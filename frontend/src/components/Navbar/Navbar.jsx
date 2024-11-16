import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");
    const { getTotalCartAmount } = useContext(StoreContext);

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
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <div className={`navbar-search-container ${showSearch ? 'expanded' : ''}`}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search..."
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') handleSearch();
                        }}
                        className="navbar-search-input"
                    />
                    <img
                        src={assets.search_icon}
                        alt="Search"
                        onClick={handleSearchIconClick}
                        className="search-icon"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
