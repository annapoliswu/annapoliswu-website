import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';

function SimplySpeak(props) {
    let data = ProjectData.get("simplyspeak");
        
    return (
        <div>
            
            <Project {...data}>
                <h2>SimplySpeak Project Page</h2>
                <p>This is extra content inside the SimplySpeak project page.</p>
            </Project>
        </div>
    );
};

export default SimplySpeak;