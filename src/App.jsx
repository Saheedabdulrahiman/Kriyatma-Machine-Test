import "./App.css";
import MainContentBox from "./components/MainContentBox";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main className=" flex">
        <Sidebar />
        <div className=" bg-stone-50 w-full ">
          <MainContentBox />
        </div>
      </main>
    </>
  );
}

export default App;
