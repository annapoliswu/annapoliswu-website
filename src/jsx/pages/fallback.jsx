import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router';

function Fallback(props) {
    return (
        <div> 
            <p>This URL has either been removed or was not found. </p>
            <NavLink to="/">Return to homepage</NavLink>
        </div>
    );
};

export default Fallback;