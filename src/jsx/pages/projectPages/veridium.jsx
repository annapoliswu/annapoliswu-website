import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';

import InfoHighlight from '../../components/infoHighlight';
import ImgText from '../../components/imgText';
import ZoomImg from '../../components/zoomImg';
import Button from '../../components/button';

import SliderImg from '../../components/sliderImg';

function Veridium(props) {
    let data = ProjectData.get("veridium");
        
    return (
        <Project {...data}>
            <h3 className="subheading">Background</h3>
            <h1>Teaching Abstract Concepts</h1>

            <p>Complex atomic and molecular structures are often difficult for students to comprehensively visualize, especially as 3D structures represented simply in 2D textbook pages.</p>
            <ZoomImg imgSrc={"img/veridium-ss-diagram.jpg"} alt={"Examples of structure diagrams of various materials"}/>

            <p>Even on physcial clay models, concepts like quantum mechanics and atomic orbitals are hard to properly convey. To overcome this challenge, Professor Katherine A. Mirica proposed the use of VR-based visualization to aid student learning.</p>

            <p>Earning a Neukom Grant in 2022, she partnered with the Design and Innovation Lab at Dartmouth College to develop Veridium, a VR app to aid in the teaching of abstract solid state chemistry concepts. </p>
        
            <hr/>
            <h3 className="subheading">My role</h3>
            <h1>Working With Veridium</h1>

            <p>I joined the Veridium project near the end of development, as a <b>UX Designer</b> and <b>Technical 3D Artist</b>. Most of the initial conceptualization and development of the app had been completed by previous teams, and it was up to our team to test, polish, and ship the final product. </p>
            <p>As a 3D artist, I refined exisiting environments ( lightmaps and textures ) and modeled background assets to replace placeholder ones.</p>

            <SliderImg leftImg={"img/veridium-before.jpg"} rightImg={"img/veridium-after.jpg"} />

            <p>As a UX designer, my various responsibilities included: conducting usability testing to identify painpoints, scripting and filming the user manual video, and conducting research trials. </p>

            <ImgText
                imgSrc={"img/veridium-selector-wand.jpg"} 
                imgWidth={"300px"}
                imgPosition={"left"}
                title={"Improving the Selection Tool"}
                description={"In user testing, I found that the selector wand used in lessons was not intuitive for users. We changed this interaction to a standard raycast selection, improving experiences for first-time users."}
            />

            <ImgText
                imgSrc={"img/veridium-user-manual.png"} 
                imgWidth={"300px"}
                imgPosition={"right"}
                title={"Creating a User Manual"}
                description={"To guide students and instructors during the research trials, I created a comprehensive user manual to help users install Veridium and use the VR headset effectively."}
            > <Button text={"View User Manual Video"} link={"https://www.youtube.com/watch?v=xAVzm_0EwDY"} newTab={true}/></ImgText>

            
            <ImgText
                imgSrc={"img/veridium-user-trials.jpg"} 
                imgWidth={"400px"}
                imgPosition={"left"}
                title={"Conducting User Trials"}
                description={"We conducted research trials with the students in Professor Mirica's chemistry class to test the learning outcomes of using Veridium."}
            ><Button text={"View Research Publication"} link={"https://pubs.acs.org/doi/10.1021/acs.jchemed.4c01256"} newTab={true}/></ImgText>
        
            <hr/>
            <h3 className="subheading">Testing</h3>
            <h1>Research Trial Methodology</h1>

            <ZoomImg imgSrc={"img/veridium-research-methodology.jpg"}/>
        
        </Project>
    );
};

export default Veridium;