import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import VideoFrame from '../../components/videoFrame';

function Soundboard(props) {
    let data = ProjectData.get("soundboard");
        
    return (
        <div>
            <Project {...data}>
                <h2>Soundboard Project Page</h2>
                <p>This is extra content inside the Soundboard project page.</p>
                <VideoFrame
                    videoUrl="https://www.youtube.com/embed/3UTdcA6CpkI?rel=0"
                    title="Soundboard App Demo"
                ></VideoFrame>
            </Project>
        </div>
    );
};

export default Soundboard;