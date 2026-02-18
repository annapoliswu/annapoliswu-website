import React, { useState, useEffect } from 'react';
import {  NavLink, useLocation } from 'react-router-dom';
import '../../css/navbar.scss';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const location = useLocation();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    //reset nav state on page change
    useEffect(() => { 
        setIsNavOpen(false);
    }, [location.pathname]);


    return (
        <nav>
            
            <button id="menuText" onClick={toggleNav}>MENU</button>
            
            <ul className={isNavOpen ? 'navActive' : 'navHidden'}>
                <li><NavLink to="/">WORK</NavLink></li>
                <li><NavLink to="/archive">ARCHIVE</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/resume">RESUME</NavLink></li>
            </ul>
        
        </nav>
        
    );
};


export default Navbar;