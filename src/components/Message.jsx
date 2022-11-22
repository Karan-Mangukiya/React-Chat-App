import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { ChatContext } from "../context/Chatcontext";

const Message = (m) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className={`message ${m.messages.senderId === currentUser.uid && "owner"} `}>
      <div className="messageinfo">
        <img src={m.messages.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURl} alt="" />
        {/* <span>{m.messages.date}</span> */}
      </div>
      <div className="messagecontent">
        <p>{m.messages.text}</p>
        {m.messages.img && <img src={m.messages.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
