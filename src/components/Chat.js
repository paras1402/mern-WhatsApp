import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  console.log("usrt", user);
  const sendMessage = async (e) => {
    e.preventDefault();
    // alert("entered");
    axios.post("/messages/new", {
      name: "paras",
      message: input,
      timestamp: "123",
      received: true,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar></Avatar>
        <div className="chat__headerInfo">
          <h3>{user?.name}</h3>
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
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.received ? "chat__reciever" : ""
            }`}
          >
            <span className="chat__name">{message.name}</span>
            <span className="chat__message__text"> {message.message}</span>
            <span className="chat__timestamp">{message.timestamp}</span>
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
