import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';

function Veridium(props) {
    let data = ProjectData.get("veridium");
        
    return (
        <div>
            <Project {...data}>
                <h2>Veridium Project Page</h2>
                <p>This is extra content inside the Veridium project page.</p>
            </Project>
        </div>
    );
};

export default Veridium;