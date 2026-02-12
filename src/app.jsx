import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import { ScrollReveal } from '@allwells/react-scroll-reveal';

// import pages
//import FeaturedCard from './components/featured_card';

import Navbar from './jsx/components/navbar';
import Homepage from './jsx/pages/homepage';
import Archive from './jsx/pages/archive';
import About from './jsx/pages/about';
import Fallback from './jsx/pages/fallback';


// all pages must be added to routes below
function App(props) {
    return (
        <BrowserRouter>
            <div className='app-container'>
                    <Navbar/>
                    <Routes> 
                        <Route path="/" element={<Homepage/>} />
                        <Route path="/archive" element={<Archive/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/resume" element={<About/>} />
                        <Route path="*" element={<Fallback/>} />
                    </Routes>
            </div>
        </BrowserRouter>
    );
};


export default App;