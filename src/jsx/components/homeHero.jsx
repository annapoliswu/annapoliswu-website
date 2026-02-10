import React from 'react';
import { NavLink, Link} from 'react-router';
import { ScrollReveal } from '@allwells/react-scroll-reveal';

import {ScrollButton} from './button';

import'../../css/homeHero.scss';


const HomeHero = (props) => {

    return(
        <ScrollReveal animationType="fade" delay={100} once={false}>
            
            <div className="home-hero">
                <p className='home-hero-background-text font-xl'>吴紫旰</p>
                <div className="home-hero-container rounded">
                <h1 className='home-hero-title font-2xl'>Zihan Wu</h1>
                <p className='home-hero-blurb font-lg'>
                    Designing elegant solutions with my background in interaction and computer science. 
                </p>
                <ScrollButton scrollRef={props.scrollRef} text={"Scroll To Projects"} btnType={""} />
                </div>
            </div>
        </ScrollReveal>

    );

    
}

export default HomeHero;