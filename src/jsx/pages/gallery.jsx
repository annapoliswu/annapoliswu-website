import React from 'react';
import MasonGrid from '../components/masonGrid';

import "../../css/gallery.scss"

function Gallery(props) {

    return (
        <div className='galleryContainer'> 
            <h1>Art Gallery</h1>
            <hr/>

            <div id='vcs-sea'>
                <p>Drew key art and led art direction for the <a href="https://www.instagram.com/fromseatoseanyc/" target="_blank">2026 NYC Southeast Asian Festival</a>, garnering over 900+ attendees.</p>
                <MasonGrid imgList={[
                    {url: "img/vcs-sea-2.jpg"},
                    {url: "img/vcs-sea-1.jpg"},
                    {url: "img/vcs-sea-3.jpg"},
                    {url: "img/vcs-sea-4.jpg"},
                    {url: "img/vcs-sea-merch.jpg"},
                    {url: "img/vcs-sea-6.jpg"},
                    {url: "img/vcs-sea-8.jpg"},
                ]}></MasonGrid>
            </div>

            <hr/>

            <div id='vcs-beep-boop'>
                <p>Designed artist highlights for a tech music night hosted by the Viet Creative Society <a href="https://www.instagram.com/p/DS5YAWNDli_/" target="_blank">(@vcs.nyc)</a>. </p>
                <MasonGrid imgList={[
                    {url: "img/vcs-beep-boop-1.jpg"},
                    {url: "img/vcs-beep-boop-2.jpg"},
                    {url: "img/vcs-beep-boop-3.jpg"},
                    {url: "img/vcs-beep-boop-4.jpg"},
                    {url: "img/vcs-beep-boop-5.jpg"},
                    {url: "img/vcs-beep-boop-6.jpg"},
                    {url: "img/vcs-beep-boop-10.jpg"},
                    {url: "img/vcs-beep-boop-9.jpg"},
                    {url: "img/vcs-beep-boop-8.jpg"},
                    
                ]}></MasonGrid>
            </div>

            <hr/>
            
            <div id='mavis-assets'>
                <p>Artist highlights created for a tech music night hosted by the Viet Creative Society <a href="https://www.instagram.com/p/DS5YAWNDli_/" target="_blank">(@vcs.nyc)</a>. </p>
                <MasonGrid imgList={[
                    {url: "img/vcs-beep-boop-1.jpg"},
                ]}></MasonGrid>
            </div>

            <hr/>

            <div id='mavis-assets'>
                <p>Artist highlights created for a tech music night hosted by the Viet Creative Society <a href="https://www.instagram.com/p/DS5YAWNDli_/" target="_blank">(@vcs.nyc)</a>. </p>
                <MasonGrid imgList={[
                    {url: "img/vcs-beep-boop-1.jpg"},
                ]}></MasonGrid>
            </div>


        </div>
    );
};

export default Gallery;