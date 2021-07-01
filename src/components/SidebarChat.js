import { Avatar } from "@material-ui/core";
import axios from "../axios";
import React, { useState } from "react";
import "./SidebarChat.css";
import { setChats, setRoom } from "../features/chatSlice";
import { useDispatch } from "react-redux";

const SidebarChat = ({ addNewChat, room }) => {
  const dispatch = useDispatch();

  const handler = async () => {
    await axios.get(`rooms/${room._id}/messages`).then((response) => {
      // console.log("handler room", room);
      dispatch(setChats(response.data.messages));
      dispatch(
        setRoom({
          _id: room._id,
          name: room.name,
        })
      );
    });

    // const tempchat = data.data.messages.map((entry) => entry.message);

    // dispatch(setChats({ chat: data.data.messages }));
    //    dispatch(setRoom(temproom));
  };
  const createChat = async () => {
    const roomName = prompt("Enter room name for chat");
    if (roomName) {
      axios.post("/rooms/new", {
        name: roomName,
        messages: [],
      });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat" onClick={handler}>
      <Avatar></Avatar>
      <div className="sidebarChat__info">
        <h2>{room.name}</h2>
        <p>this is name</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
