import React, { use } from 'react';
import'../../css/about.scss';
import MasonGrid from '../components/masonGrid';

function About(props) {
    return (
        <div className='aboutContainer'> 
            <div className='leftRail'>
                <div className='leftFloat'>
                    <div className='photoContainer'>
                        <img src='img/about-photo-1.jpg'></img>
                    </div>
                    
                    <div className="leftInfoContainer">
                        <a href="mailto:zihanna.wu@gmail.com"><img className="aboutIcon" src="img/icon-email.svg" alt="Email" />zihanna.wu@gmail.com</a>
                        <a href="https://www.linkedin.com/in/annapoliswu/" target="_blank" rel="noopener noreferrer"><img className="aboutIcon" src="img/icon-linkedin.svg" alt="LinkedIn" />linkedin.com/in/annapoliswu</a>
                    </div>

                </div>
            </div>
            <div className='rightRail'>
                <div className='aboutBlurb'>
                    <h2 className='aboutHeading'>UI/UX  •  Product Designer  •  Art Lover</h2>
                    <p>Hi, nice to meet you! I'm Zihan, a Product Designer with <b>5+ years</b> of experience crafting elegant solutions for mobile, web, and AR/VR. I specialize in user-centered design strategy, grounded by thorough research and a practical background in programming. I bring engaging visual interfaces to life with thoughtful ideation.</p>
                    <p>I graduated from <b>Dartmouth College</b> in 2023 from the M.S. in Computer Science and Digital Arts program. My thesis focused on <a href="https://digitalcommons.dartmouth.edu/masters_theses/162/" target="_blank">building AI camera systems</a> to better streaming and recording in VR applications.</p>
                    
                    
                    <p>For fun: I draw, I collect art from crafts markets, and I play board games. </p>
                    <p>Catch me exploring the city during the weekend!</p>
                    
                    <MasonGrid imgList={[    
                        {url: "img/about-photo-3.jpg"},
                        {url: "img/about-photo-4.jpg"},
                        {url: "img/about-photo-5.jpg"},
                    ]}></MasonGrid>
                    

                </div>
            </div>
            
        </div>
    );
};

export default About;