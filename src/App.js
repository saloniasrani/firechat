import Navbar from "./components/Navbar";
import "./App.css";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  section: `flex flex-col h-[90vh] bg-gray-100`,
  appContainer: `max-w-[728px] mx-auto text-center mt-10 shadow-xl border relative`,
};
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <section className={style.section}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}
export default App;
