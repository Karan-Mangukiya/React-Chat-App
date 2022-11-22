import { arrayUnion, doc, serverTimestamp, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import { ChatContext } from "../context/Chatcontext";
import { v4 as uuid } from "uuid";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [img, setImg] = useState(null);
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          // setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
  };

  return (
    <div className="input">
      <input type="text" placeholder="Type something..." onChange={(e) => setText(e.target.value)} value={text} />
      <div className="send">
        {/* <img src="" alt="" /> */}
        <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setImg(e.target.files[0])} />
        <label htmlFor="file">
          <img src="https://i.pinimg.com/originals/e2/bc/2b/e2bc2b005d593253f62a4727d3da5d4f.png" alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
