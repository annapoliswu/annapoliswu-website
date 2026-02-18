import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet, ScrollRestoration } from 'react-router-dom';



// import pages
//import FeaturedCard from './components/featured_card';

import Navbar from './jsx/components/navbar';
import Homepage from './jsx/pages/homepage';
import Archive from './jsx/pages/archive';
import About from './jsx/pages/about';
import Fallback from './jsx/pages/fallback';

import SimplySpeak from './jsx/pages/projectPages/simplyspeak';
import Soundboard from './jsx/pages/projectPages/soundboard';
import MavisVehiclePages from './jsx/pages/projectPages/mavisVehiclePages';
import Veridium from './jsx/pages/projectPages/veridium';


const AppLayout = () => (
    <div className='app-container'>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
    </div>
);

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />,
            },
            {
                path: '/archive',
                element: <Archive />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/mavis-vehicle-pages',
                element: <MavisVehiclePages />,
            },
            {
                path: '/simplyspeak',
                element: <SimplySpeak />,
            },
            {
                path: '/veridium',
                element: <Veridium />,
            },
            {
                path: '/soundboard',
                element: <Soundboard />,
            },
            {
                path: "*",
                element: <Fallback />,
            },
        ]

    }]);


// all pages must be added to routes below
function App(props) {
    return <RouterProvider router={router} />;
};


export default App;