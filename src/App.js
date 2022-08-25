import Navbar from "./components/Navbar";
import "./App.css";

const style = {
  section: `flex flex-col h-[90vh] bg-gray-100`,
  appContainer: `max-w-[728px] mx-auto text-center mt-10 shadow-xl border relative`,
};
function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.section}>
        <Navbar />
      </section>
    </div>
  );
}
export default App;
