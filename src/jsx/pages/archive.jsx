import React from 'react';
import Gallery from '../components/gallery';

import "../../css/archive.scss"

function Archive(props) {
    let imgs = [
                {url: "img/vcs-sea-1.jpg"},
                {url: "img/vcs-sea-2.jpg"},
                {url: "img/vcs-sea-3.jpg"},
                {url: "img/vcs-sea-4.jpg"},
                {url: "img/vcs-sea-6.jpg"},
                {url: "img/vcs-sea-7.jpg"},
                {url: "img/vcs-sea-8.jpg"},
                {url: "img/vcs-sea-merch.jpg"},
            ]
    //let imgs = ["img/vcs-sea-1.jpg","img/vcs-sea-2.jpg","img/vhp-market-research-features.jpg","img/vcs-sea-2.jpg","img/vhp-market-research-features.jpg","img/vhp-market-research-features.jpg"]
    return (
        <div className='archiveContainer'> 
            <h1 >Gallery</h1>
            <p>aaaa</p>
            <hr/>

            <h2 id="vcs">Southeast Asian Festival</h2>
            
            <p>Key graphics I designed for the 2026 NYC Southeast Asian Festival with over 900+ attendees. Art used for social media branding and merch.  </p>
            <Gallery urls={imgs}></Gallery>
            <h2 id="vcs-2">yo look at me</h2>
        </div>
    );
};

export default Archive;