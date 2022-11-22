import React, { useContext } from "react";
import { ChatContext } from "../context/Chatcontext";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatinfo">
        <span>{data.user?.displayName}</span>
        <div className="chaticons">
          <img src="https://i.pinimg.com/originals/e2/bc/2b/e2bc2b005d593253f62a4727d3da5d4f.png" alt="camera" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/FaceTime_iOS.svg/2048px-FaceTime_iOS.svg.png"
            alt="Person"
          />
          <img
            src="https://cdn1.iconfinder.com/data/icons/communication-and-navigation/16/Icon_bubble_three_dots-512.png"
            alt="More"
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
