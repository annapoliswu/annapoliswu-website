import React from 'react';
import'../../css/about.scss';

function About(props) {
    return (
        <div className='aboutContainer'> 
            <div className='leftRail'>
                <div className='leftInfo'>
                    <div className='photoContainer'></div>
                    <p>This is the about me.</p>
                </div>
            </div>
            <div className='rightRail'>
                <h1 className='aboutName'>Zihan Wu</h1><h2 className='aboutTag'>UI/UX - Product Designer - Life Enjoyer</h2>
                <p>Hi, nice to meet you! I'm Zihan, a UX / Product designer with 5+ years of experience designing elegant solutions. </p>
            </div>
            
        </div>
    );
};

export default About;