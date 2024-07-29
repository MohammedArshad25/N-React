
import AppContext from "./utils/AppContext";
import { useState , useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import './App.css';



const App = () => {



const [uName, setUName] = useState("default");

useEffect(()=> {
  setUName("arshad")
}, []);

  return (
    <>
    <AppContext.Provider value={{userName: uName, setUName}}>
        <Header />
        <Outlet/>

    </AppContext.Provider>

    </>
  )
}

export default App;
