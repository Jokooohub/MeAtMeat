import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [userName, setUserName] = useState(null);
  const { getTotalCartAmount } = useContext(StoreContext);

  // Load the logged-in user dynamically
  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    if (loggedInEmail) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === loggedInEmail);
      if (user) {
        setUserName(user.name);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInEmail");
    setUserName(null);
  };

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch); // Toggle search input visibility
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {userName ? (
          <div className="navbar-user">
            <span>Welcome, {userName}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
