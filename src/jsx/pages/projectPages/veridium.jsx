import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';

import InfoHighlight from '../../components/infoHighlight';
import ImgText from '../../components/imgText';
import ZoomImg from '../../components/zoomImg';

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

            <p>I joined the Veridium project near the end of development, as a UX designer and technical 3D artist. Most of the initial conceptualization and development of the app had been completed by previous teams, and it was up to our team to test, polish, and ship the final product. </p>
            <p>As a 3D artist, I was responsible for cleaning up placeholder assets and refining 3D environments. I refined the light maps for the the main environments, as well as modeled some background elements.</p>

            <SliderImg leftImg={"img/veridium-before.jpg"} rightImg={"img/veridium-after.jpg"} />
        </Project>
    );
};

export default Veridium;