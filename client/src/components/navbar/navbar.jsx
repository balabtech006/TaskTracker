import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = ({ currentUser, logout }) => {
    return (
        <header className="nav-bar">
            <nav className="left-nav">
                <Link to="/" className="header-link">
                    <img src={logo} alt="logo" />
                </Link>
                {/* <p className="nav-title"> Task Tracker </p> */}
            </nav>
            <nav className="right-nav">
                <ul>
                    <li className="nav-home">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-name">
                        {currentUser.username}
                    </li>
                   
                    <li className="logout">
                        <button className="logout-button" onClick={logout}>
                            Log Out
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Navbar;