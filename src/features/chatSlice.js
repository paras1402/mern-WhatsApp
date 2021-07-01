import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  room: null,
};
export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
  },
});

export const { setChats, setRoom } = chatSlice.actions;
export const selectChats = (state) => state.chats.chats;
export const selectRoom = (state) => state.chats.room;

export default chatSlice.reducer;
