import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";
const Header = ({ onLogout, isLoggedIn, isLoginPage }) => {
    const [username, setUsername] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        onLogout();
        setDropdownOpen(false);
    };

    const handleMouseEnter = () => {
        console.log(dropdownOpen)
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <header className="header-container">
            <div className="header-title">
                <span className='bold'>VIBE</span><span>CART</span>
            </div>

            <h5 className="header-subtitle"> Offer Management System</h5>

            <div className="header-actions">
                {isLoggedIn && (
                    <div
                        className="user-info"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FaRegUserCircle className="user-icon" size={24} color='#dd1e25'/>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <span className="dropdown-item">{username}</span>
                            <span className="dropdown-item">Settings</span>
                            <button className="dropdown-item" onClick={handleLogout}>Sign out</button>
                        </div>
                    </div>
                 )}
            </div>
        </header>
    );
};

export default Header;
