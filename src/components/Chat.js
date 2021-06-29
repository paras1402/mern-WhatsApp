import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
const Chat = () => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    // alert("entered");
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar></Avatar>
        <div className="chat__headerInfo">
          <h3>Name</h3>
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
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>{" "}
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>{" "}
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>{" "}
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>{" "}
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>{" "}
        <p className="chat__message">
          <span className="chat__name">paras</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form>
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
