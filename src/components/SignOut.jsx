import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Button from "@mui/material/Button";

function SignOut() {
  return (
    <div>
      <Button onClick={() => signOut(auth)}>Log Out </Button>
    </div>
  );
}

export default SignOut;
