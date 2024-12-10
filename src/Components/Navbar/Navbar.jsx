import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-logo">EV-sajol</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explorer</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;