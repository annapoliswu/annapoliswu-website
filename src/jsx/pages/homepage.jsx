import React from 'react';
import FeaturedCard from '../components/featuredCard';
import HomeHero from '../components/homeHero';
import'../../css/homepage.scss';

import mavis from'../../img/mavis-thumbnail.jpg';
import simplyspeak from'../../img/simplyspeak-thumbnail.jpg';
import veridium from'../../img/veridium-thumbnail.jpg';

import {useRef} from 'react'

function Homepage(props) {
    const scrollRef = useRef();
    return (
        <div> 
            <HomeHero scrollRef={scrollRef}></HomeHero>
            <div class='grid' ref={scrollRef}>
                <FeaturedCard 
                    link='/about'
                    title='some title here'
                    blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar sagittis velit, eu blandit lectus maximus ut. Vestibulum consequat ligula auctor congue luctus.'
                    imgSrc={mavis}
                />
                <FeaturedCard 
                    link='/about'
                    title='some title here'
                    blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar sagittis velit, eu blandit lectus maximus ut. Vestibulum consequat ligula auctor congue luctus.'
                    imgSrc={simplyspeak}
                />
                
                <FeaturedCard 
                    link='/about'
                    title='some title here'
                    blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    imgSrc={mavis}
                />
                <FeaturedCard 
                    link='/about'
                    title='some title here'
                    blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    imgSrc={simplyspeak}
                />
            </div>

        </div>
    );
};

export default Homepage;