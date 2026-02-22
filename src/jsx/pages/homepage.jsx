import React from 'react';
import FeaturedCard from '../components/featuredCard';
import HomeHero from '../components/homeHero';
import'../../css/homepage.scss';

import ProjectData from '../data/projectData'

import {useRef} from 'react'

function Homepage(props) {
    const scrollRef = useRef();
    return (
        <div> 
            <HomeHero scrollRef={scrollRef}></HomeHero>
            <div className='grid' ref={scrollRef}>
            
            {[...ProjectData].map(([key,project]) => {
                return<FeaturedCard 
                    key={key}
                    link={project.link}
                    title={project.title}
                    blurb={project.blurb}
                    imgSrc={project.thumbnail}/>
            })}

            </div>

        </div>
    );
};

export default Homepage;