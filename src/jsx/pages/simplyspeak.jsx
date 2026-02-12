import React from 'react';
import Project from './project';
import ProjectData from '../data/projectData';

function SimplySpeak(props) {
    let data = ProjectData.get("simplyspeak");
        
    return (
        <div>
            
            <Project {...data}>
                <h1>SimplySpeak Project Page</h1>
                <p>This is extra content inside the SimplySpeak project page.</p>
            </Project>
        </div>
    );
};

export default SimplySpeak;