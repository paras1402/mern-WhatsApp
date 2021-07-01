import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import { auth, provider } from "./firebase";
import LoginPage from "./components/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { selectChats } from "./features/chatSlice";

function App() {
  // const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            name: authUser.displayName,
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  // useEffect(() => {
  //   axios.get("/messages/sync").then((response) => {
  //     console.log(response.data);
  //     setMessages(response.data);
  //   });
  // }, []);

  const messages = useSelector(selectChats);
  useEffect(() => {
    axios.get("/rooms/sync").then((response) => {
      console.log(response.data);
      setRooms(response.data);
    });
  }, []);

  // useEffect(() => {
  //   const pusher = new Pusher("48f8ca66baab0718bdb8", {
  //     cluster: "ap2",
  //   });

  //   const channel = pusher.subscribe("messages");
  //   channel.bind("inserted", (data) => {
  //     // alert(JSON.stringify(data));
  //     // setMessages([...messages, data]);
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [messages]);

  useEffect(() => {
    const pusher = new Pusher("48f8ca66baab0718bdb8", {
      cluster: "ap2",
    });

    const channel1 = pusher.subscribe("rooms");
    channel1.bind("inserted", (data) => {
      // alert(JSON.stringify(data));
      setRooms([...rooms, data]);
    });

    return () => {
      channel1.unbind_all();
      channel1.unsubscribe();
    };
  }, [rooms]);

  return (
    <div className="app">
      <div className="top"></div>
      <div className="app__body">
        {!user && <LoginPage></LoginPage>}
        {user && (
          <>
            <Sidebar rooms={rooms}></Sidebar>
            <Chat messages={messages}></Chat>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
