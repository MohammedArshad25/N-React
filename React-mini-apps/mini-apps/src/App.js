import { useState } from "react";
import './App.css';
import Counter from "./components/counter/Counter";
import ContextTheme from "./components/Context/ContextTheme";
import defineContext from './components/Context/defineContext';
import Todo from "./components/Todo/Todo";
import ColorTask from "./components/CustomHook/ColorTask";
import DropCheck from "./components/dropdownCheckbox/DropCheck";
import Fetch from "./components/Mphasis/Fetch";
import Profile from "./components/Photon/Profile";
import Kanban from "./components/HackerRank/App";



function App() {

  const dark = {
    color: "white",
    bgColor: "grey",
    btnColor: "black"
}

const light = {
  color: "black",
  bgColor: "pink",
  btnColor: "white"
}

const handleToggle = () => {
      if(theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
  }
const [theme, setTheme] = useState("light");


  return (
    <div className="App">
      {/* <Counter /> */}


      {/* //Theme using context */}
      {/* <defineContext.Provider value={(theme === "light") ? light : dark} >
            <ContextTheme handleToggle={handleToggle}/>
      </defineContext.Provider> */}

      {/* <Todo /> */}

      {/* <ColorTask /> */}

      {/* <DropCheck/> */}

      {/* <Fetch/>
       */}

       {/* <Profile /> */}

       <Kanban />
    </div>
  );
}

export default App;
