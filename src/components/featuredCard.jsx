import React from 'react';
import '../css/featuredCard.scss';
import Button from './button';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router';


const FeaturedCard = (props) => {
    return (
        <Link className="btn btn-text" to={props.link}>
            <div className='featuredCardContainer rounded' >
                <img className='featuredCardImage rounded' src={props.imgSrc}></img>
                <h2 className='project-title font-lg'>{props.title}</h2>
                <p className='project-blurb font-md'>{props.blurb}</p>
                <Button link={props.link} text={props.btnText} btnType={"primary"} />
            </div>
        </Link>
    )

};


export default FeaturedCard;