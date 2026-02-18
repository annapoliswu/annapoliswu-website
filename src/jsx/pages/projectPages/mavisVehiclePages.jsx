import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';

function MavisVehiclePages(props) {
    let data = ProjectData.get("mavisVehiclePages");
        
    return (
        <div>
            <Project {...data}>
                <h2>Mavis Vehicle Project Page</h2>
                <p>This is extra content inside the Mavis Vehicle project page.</p>
            </Project>
        </div>
    );
};

export default MavisVehiclePages;