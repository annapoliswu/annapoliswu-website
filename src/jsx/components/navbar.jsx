import React from 'react';
import {  NavLink } from 'react-router-dom';
import '../../css/navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">WORK</NavLink></li>
                <li><NavLink to="/archive">ARCHIVE</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/resume">RESUME</NavLink></li>
            </ul>
        </nav>
    );
};


export default Navbar;