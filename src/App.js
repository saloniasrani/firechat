import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `  w-[728px] mx-auto `,
  section: ` h-[86vh] overflow-scroll  flex flex-col bg-gray-100  shadow-xl border relative`,
};
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <Navbar />
      <section className={style.section}>{user ? <Chat /> : null}</section>
    </div>
  );
}
export default App;
