import React from 'react';
import Gallery from '../components/gallery';

function Archive(props) {
    let imgs = ["img/vcs-sea-1.jpg","img/vcs-sea-2.jpg","img/vhp-market-research-features.jpg","img/vcs-sea-2.jpg","img/vhp-market-research-features.jpg","img/vhp-market-research-features.jpg"]
    return (
        <div> 
            <h2 id="vcs">VCS wow stuff</h2>
            <Gallery urls={imgs} ></Gallery>
            <h2 id="vcs-2">yo look at me</h2>
        </div>
    );
};

export default Archive;