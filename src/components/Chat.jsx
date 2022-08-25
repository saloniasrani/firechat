import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import SignOut from "./SignOut";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
const style = {
  main: `flex flex-col p-[10px]`,
};
function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <main className={style.main}>
        {/* {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))} */}
      </main>
      {/* Send Message Compoenent
      <SendMessage scroll={scroll} /> */}
      {/* <span ref={scroll}></span> */}
    </>
  );
}

export default Chat;
