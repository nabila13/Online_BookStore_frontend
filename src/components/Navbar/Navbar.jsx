import { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FaBasketShopping, FaBagShopping } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-genre"
          onClick={() => {
            setMenu("explore-genre");
          }}
          className={menu === "explore-genre" ? "active" : ""}
        >
          Explore Books
        </a>
        {/* <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a> */}
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            {/* <img src={assets.basket_icon} alt="" /> */}
            <span>
              <FaBasketShopping />
            </span>
          </Link>

          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button
            onClick={() => {
              setShowLogin(true);
            }}
          >
            sign in
          </button>
        ) : (
          <div className="navbar-profile">
            {/* <img src={assets.profile_icon} alt="" /> */}
            <span>
              <FaUser />
            </span>
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                {/* <img src={assets.bag_icon} alt="" /> */}
                <span>
                  <FaBagShopping />
                </span>
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                {/* <img src={assets.logout_icon} alt="" /> */}
                <span>
                  <TbLogout />
                </span>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
