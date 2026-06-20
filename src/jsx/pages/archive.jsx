import React from 'react';
import Gallery from '../components/gallery';

import "../../css/archive.scss"

function Archive(props) {
    let imgs = [
                {url: "img/vcs-sea-1.jpg"},
                {url: "img/vcs-sea-2.jpg"},
                {url: "img/vcs-sea-3.jpg"},
                {url: "img/vcs-sea-4.jpg"},
                {url: "img/vcs-sea-merch.jpg"},
                {url: "img/vcs-sea-6.jpg"},
                {url: "img/vcs-sea-8.jpg"},
            ]
    //let imgs = ["img/vcs-sea-1.jpg","img/vcs-sea-2.jpg","img/vhp-market-research-features.jpg","img/vcs-sea-2.jpg","img/vhp-market-research-features.jpg","img/vhp-market-research-features.jpg"]
    
    return (
        <div className='archiveContainer'> 
            <h1>Art Gallery</h1>
            <hr/>

            <div id='vcs-sea'>
                <p>Designed key graphics and directed art for the <a href="https://www.instagram.com/fromseatoseanyc/" target="_blank">2026 NYC Southeast Asian Festival</a>, garnering over 900+ attendees.</p>
                <Gallery imgList={[
                    {url: "img/vcs-sea-1.jpg"},
                    {url: "img/vcs-sea-2.jpg"},
                    {url: "img/vcs-sea-3.jpg"},
                    {url: "img/vcs-sea-4.jpg"},
                    {url: "img/vcs-sea-merch.jpg"},
                    {url: "img/vcs-sea-6.jpg"},
                    {url: "img/vcs-sea-8.jpg"},
                ]}></Gallery>
            </div>

            <hr/>

            <div id='vcs-beep-boop'>
                <p>Artist highlights created for a tech music night hosted by the Viet Creative Society <a href="https://www.instagram.com/p/DS5YAWNDli_/" target="_blank">(@vcs.nyc)</a>. </p>
                <Gallery imgList={[
                    {url: "img/vcs-beep-boop-1.jpg"},
                    {url: "img/vcs-beep-boop-2.jpg"},
                    {url: "img/vcs-beep-boop-3.jpg"},
                    {url: "img/vcs-beep-boop-4.jpg"},
                    {url: "img/vcs-beep-boop-5.jpg"},
                    {url: "img/vcs-beep-boop-6.jpg"},
                ]}></Gallery>
            </div>
        </div>
    );
};

export default Archive;