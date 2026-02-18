import React from 'react';
import '../../css/featuredCard.scss';
import Button from './button';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router';
import { ScrollReveal } from '@allwells/react-scroll-reveal';


const FeaturedCard = (props) => {
    return (
        <ScrollReveal animationType="fade" delay={100} once={false}>
                <div className='featuredCardContainer' >
                    <Link className="featuredCardLink" to={props.link}>
                    <img className='featuredCardImage' src={props.imgSrc}></img>
                    <h2 className='project-title font-lg'>{props.title}</h2>
                    <p className='project-blurb font-md'>{props.blurb}</p>
                    </Link>
                    <Button link={props.link} text="Read More" />
                </div>
        </ScrollReveal>
    )

};


export default FeaturedCard;