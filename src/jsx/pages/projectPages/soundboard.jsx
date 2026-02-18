import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';

function Soundboard(props) {
    let data = ProjectData.get("soundboard");
        
    return (
        <div>
            <Project {...data}>
                <h2>Soundboard Project Page</h2>
                <p>This is extra content inside the Soundboard project page.</p>
            </Project>
        </div>
    );
};

export default Soundboard;