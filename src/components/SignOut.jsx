import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
// import Button from "@mui/material/Button";

function SignOut() {
  const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
  };

  return (
    <div>
      <button onClick={() => signOut(auth)} className={style.button}>
        Log Out
      </button>
    </div>
  );
}

export default SignOut;
