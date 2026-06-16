import React from 'react';
import'../../css/about.scss';

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
                    <p>Hi, nice to meet you! I'm Zihan, a Product Designer with <b>5+ years</b> of experience crafting elegant solutions for mobile, web, and AR/VR. I specialize in user-centered design strategy, grounded by thorough research and brought to life through thoughtful visual interfaces.</p>
                    <p>I graduated from <b>Dartmouth College</b> in 2023 from the M.S. in Computer Science and Digital Arts program. My thesis focused on building AI camera systems to better streaming and recording in VR applications.</p>
                    <div className='likeDislike'>
                        <span className='aboutSubheading'>Likes: </span>
                        <span className=''>drawing, board games, exploring craft markets, napping </span>
                    </div>
                    <div className='likeDislike'>
                        <span className='aboutSubheading'>Dislikes: </span>
                        <span className=''>also drawing, fishsticks, formatting text on yellow backgrounds :c </span>
                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default About;