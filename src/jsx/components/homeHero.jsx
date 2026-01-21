import React from 'react';
import { NavLink, Link} from 'react-router';
import'../../css/button.scss';
import { ScrollReveal } from '@allwells/react-scroll-reveal';

const HomeHero = (props) => {

    return(
        <ScrollReveal animationType="fadeUp" delay={200}>
            <div className="home-hero-container">
                <h1>Zihan Wu</h1>
                <p></p>
            </div>
        </ScrollReveal>
    );
}

export default HomeHero;