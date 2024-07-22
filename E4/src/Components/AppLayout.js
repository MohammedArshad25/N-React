import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useState, useEffect } from "react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";


const AppLayout = () => {
    const [uName, setUName] = useState("default");

    useEffect(()=> {
        setUName("arshad")
    }, [])
    return (
    <div className="app-wrapper">
        <Provider store={appStore}>
            <UserContext.Provider value={{userName: uName, setUName}}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </Provider>
    </div>
    )};

    export default AppLayout;
