import React from 'react';
import '../../css/videoFrame.scss';

const VideoFrame = (props) => {
    return (
        <iframe 
            className= {'videoFrame ' + props.className} 
            src={props.videoUrl}
            title={props.title||undefined}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allow="fullscreen"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
        >
        </iframe>
    )};

export default VideoFrame;

