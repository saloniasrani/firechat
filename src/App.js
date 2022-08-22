import "./App.css";
import SignIn from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <p> Chat Application</p>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}
export default App;
