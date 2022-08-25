import React from "react";
import Chat from "./Chat";
import SignIn from "./SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Navbar() {
  const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`,
  };
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default Navbar;
