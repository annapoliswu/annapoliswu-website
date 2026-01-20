import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import '../css/navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className='logo' ></div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
        </nav>
    );
};


export default Navbar;