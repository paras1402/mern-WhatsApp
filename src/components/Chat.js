import React, { useEffect, useState } from "react";
import "./Chat.css";
import Pusher from "pusher-js";

import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectChats, selectRoom, setChats } from "../features/chatSlice";
const Chat = () => {
  const messages = useSelector(selectChats);

  // const user = useSelector(selectUser);
  console.log("what is messages", messages);
  const room = useSelector(selectRoom);
  const dispatch = useDispatch();

  useEffect(() => {
    const pusher = new Pusher("48f8ca66baab0718bdb8", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      // alert(JSON.stringify(data));
      console.log("inside", data);
      dispatch(setChats([...messages, data]));
      // setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  const sendMessage = async (e) => {
    e.preventDefault();
    // alert("entered");

    console.log("rooooom", room);
    axios.post(`/rooms/${room._id}/messages/new`, {
      name: user.name,
      message: input,
      timestamp: "123",
      received: false,
    });
    // axios.post("/messages/new", {
    //   name: "paras kangra",
    //   message: input,
    //   timestamp: "123",
    //   received: false,
    // });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar></Avatar>
        <div className="chat__headerInfo">
          <h3>{room?.name}</h3>
          <p>last seen : Just now</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages?.map(({ message, name }) => (
          <p
            className={`chat__message ${
              name === user.name ? "chat__reciever" : ""
            }`}
          >
            <span className="chat__name">
              {name === user.name ? "ME" : name}
            </span>
            {/* <span className="chat__name">{message.name}</span> */}

            {/* <span className="chat__message__text"> {message.message}</span>
            <span className="chat__timestamp">{message.timestamp}</span> */}
            <span className="chat__message__text"> {message}</span>
            {/* <span className="chat__timestamp">{message.timestamp}</span>  */}
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form method="post">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />

          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
};

export default Chat;
