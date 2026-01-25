import React from 'react';
import '../../css/featuredCard.scss';
import Button from './button';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router';
import { ScrollReveal } from '@allwells/react-scroll-reveal';


const FeaturedCard = (props) => {
    return (
        <ScrollReveal animationType="fade" delay={100} once={false}>
            <Link className="btn btn-text" to={props.link}>
                <div className='featuredCardContainer rounded' >
                    <img className='featuredCardImage rounded' src={props.imgSrc}></img>
                    <h2 className='project-title font-lg'>{props.title}</h2>
                    <p className='project-blurb font-md'>{props.blurb}</p>
                    <Button link={props.link} text={props.btnText} btnType={"secondary"} />
                </div>
            </Link>
        </ScrollReveal>
    )

};


export default FeaturedCard;