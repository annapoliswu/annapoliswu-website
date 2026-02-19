import React, { useState, useEffect } from 'react';
import {  NavLink, useLocation } from 'react-router-dom';
import '../../css/footer.scss';


const Footer = () => {

    return (
        <footer>
            <hr className='footerDivider'/>
            <div id='footerTop'>
            <div id='footerColumn'>
                <p id='footerName'>Zihan Wu</p>
                <p id='footerBlurb'>Let's work together!</p>
                <div id="footerSocials">
                    <a href="mailto:zihanna.wu@gmail.com"><img className="footerIcon" src="img/icon-email.svg" alt="Email"/></a>
                    <a href="https://www.linkedin.com/in/annapoliswu/"><img className="footerIcon" src="img/icon-linkedin.svg" alt="LinkedIn"/></a>
                    <a href="https://github.com/annapoliswu"><img className="footerIcon" src="img/icon-github.svg" alt="GitHub"/></a>
                </div>
            </div>

                <div id='footerNav'> 
                    <NavLink to="/">Work</NavLink>
                    <NavLink to="/archive">Archive</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                </div>
            </div>

            <div id='footerBottom'>
                <div id='footerCopyright'>
                    <p>Built with <img id="footerHeart" src="img/icon-heart.svg" alt="love"/> in React © 2026 Zihan Wu</p>
                </div>
            </div>

        </footer>

    );

}

export default Footer;