import React, { useState } from 'react';
import './Navbar.css';
import { assets } from './../assets/assets';
import img from './../Images/body_background.jpg'
import Header from './Header/Header';
import { Link } from 'react-router-dom';


const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("menu");
    return (
        <div className='background'>
            <img className='background_img' src={img} alt="background" />

            <div className='navbar'>
                <Link to='/'>  <div className='logo'>
                    <h2>FlavorFeast</h2>
                </div></Link>
                <ul>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
                </ul>
                <div className='navbar-right'>
                    <img src={assets.search_icon} alt="Search Icon" className='navbar-search-icon' />
                    <div className='navbar-basket-icon'>
                        <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link>
                        <div className='dot'></div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>Sign in</button>

                </div>
            </div>
            <div className='content'>
                <Header />
            </div>
        </div>
    );
};

export default Navbar;
