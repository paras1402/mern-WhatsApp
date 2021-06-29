import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar></Avatar>
      <div className="sidebarChat__info">
        <h2>Name</h2>
        <p>this is name</p>
      </div>
    </div>
  );
};

export default SidebarChat;
