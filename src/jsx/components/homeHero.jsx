import React from 'react';
import { NavLink, Link} from 'react-router';
import { ScrollReveal } from '@allwells/react-scroll-reveal';

import Button from './button';
import'../../css/homeHero.scss';


const HomeHero = (props) => {

    return(
        <ScrollReveal animationType="fade" delay={100} once={false}>
            <div className="home-hero-container rounded">
                <h1 className='home-hero-title font-2xl'>Zihan Wu</h1>
                <p className='home-hero-blurb font-lg'>
                    Designing elegant solutions with my background in interaction and computer science. 
                </p>
                <Button link={props.link} text={"scroll down"} btnType={"secondary"} />
            </div>
        </ScrollReveal>
    );
}

export default HomeHero;