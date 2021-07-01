import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
const Sidebar = ({ rooms }) => {
  const user = useSelector(selectUser);

  const logoutHandler = () => {
    auth.signOut();
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="sidebar__headerAvatar"
          onClick={logoutHandler}
          src={user?.photo}
        ></Avatar>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined></SearchOutlined>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat={true} />
        {rooms.map((room) => (
          <SidebarChat room={room}></SidebarChat>
        ))}
        {/* <SidebarChat />
        <SidebarChat />
        <SidebarChat /> */}
      </div>
    </div>
  );
};

export default Sidebar;
