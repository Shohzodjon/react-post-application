import React from "react";

import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar p-2 align-items-center">
            <div className="d-flex">
                <div className="nav-logo">
                    <img src="./images/logo.png" alt="Logo" />
                </div>
                <label htmlFor="search" className="search">
                <i className="bi bi-search"></i>
                    <input type="text" id="search" placeholder="Search for posts and memebers" name="none" />
                </label>
            </div>
            <div className="d-flex align-items-center">
                <div className="notice">
                <i className="bi bi-bell"></i>
                </div>
                <div className="person-icon">
                <i className="bi bi-person-circle"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
