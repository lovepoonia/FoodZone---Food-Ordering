import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [LoginB, setLoginB] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, isLoggedIn, setIsLoggedIn, setUserName } = useContext(UserContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("Default User");
    alert("You have been logged out successfully.");
  };

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  return (
    <div className="flex justify-between border-4 border-solid border-black ">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="w-28" />
      </div>
      <div className="nav-item">
        <ul className="flex p-4 m-6">
          <li className="px-3">Internet Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">🛒({cartItems.length} item)</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button className="px-3" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="px-3">Login</button>
              </Link>
            )}
          </li>
          <li className="px-3">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
