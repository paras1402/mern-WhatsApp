import React from "react";
import "./LoginPage.css";
import { auth, provider } from "../firebase";

const LoginPage = () => {
  const signInhandler = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="loginpage-container">
      <div className="loginpage-component">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1021px-WhatsApp.svg.png"
          alt=""
        />
        <button onClick={signInhandler}>login</button>
      </div>
    </div>
  );
};

export default LoginPage;
