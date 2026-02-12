import React from 'react';
import '../../css/project.scss';


function Project(props) {
    return (
        <div className='projectContainer'> 
            
            <img className="projectCoverImg" src={props.thumbnail}></img>
            <h1>{props.title}</h1>
            <p>{props.blurb}</p>

            This is the project page.

            {props.children}
        </div>
    );
};

export default Project;