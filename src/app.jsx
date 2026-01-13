import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';

// import pages
//import FeaturedCard from './components/featured_card';

import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Work from './pages/work';
import About from './pages/about';
import Fallback from './pages/fallback';


function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/resume" element={<About/>} />
                    <Route path="*" element={<Fallback/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};


export default App;