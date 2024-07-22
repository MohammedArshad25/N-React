import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("login");

    const onlineStatus = useOnlineStatus();
    const {userName} = useContext(UserContext);
    console.log(useContext(UserContext));

    // console.log(onlineStatus)

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header-wrapper bg-gray-100 flex justify-between ">

            <Link to="/">
            <img  className="header-logo w-24" src={LOGO_URL} alt="food-logo"/>
            </Link>

        <ul className="header-nav flex justify-around w-1/2 items-center text-lg" >

            <li>
                {userName}
            </li>
            <li>
                {onlineStatus? "online" : "offline"}
            </li>
            <li className="border hover:bg-green-100 text-black font-bold py-2 px-4 rounded">
                <Link to="/">Home</Link>
            </li>
            <li className="border hover:bg-green-100 text-black font-bold py-2 px-4 rounded">
                <Link to="/grocery">Grocery</Link>
            </li>
            <li className="border hover:bg-green-100 text-black font-bold py-2 px-4 rounded">
                <Link to="/about">About</Link>
            </li>
            <li className="border hover:bg-green-100 text-black font-bold py-2 px-4 rounded">
                <Link to="/contact">contact us</Link>
            </li>
            <li className="border hover:bg-green-100 text-black font-bold py-2 px-4 rounded">
                <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            <button className="header-login-btn bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 border border-green-700 rounded" onClick = {() => {
                (loginBtn === "login") ? setLoginBtn("logout") : setLoginBtn("login");
            }}>{loginBtn}</button>
        </ul>
</div>
    )
};

export default Header;
