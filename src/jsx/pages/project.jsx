import React from 'react';
import '../../css/project.scss';


function Project(props) {
    return (
        <div className='projectContainer'> 
            
            <img className="projectCoverImg" src={props.thumbnail}></img>
            <div className='projectDetails'>
                    <div className='projectDetailItem'>
                        <p className='label'>Time Frame</p>
                        <p className='labelValue'>{props.timeFrame}</p>
                    </div>
                    <div className='projectDetailItem'>
                        <p className='label'>Role</p>
                        <p className='labelValue'>{props.role} </p>
                    </div>
                    <div className='projectDetailItem'>
                        <p className='label'>Tools</p>
                        <p className='labelValue'>{props.tools} </p>
                    </div>
                    <div className='projectDetailItem'>
                        <p className='label'>In Collab With</p>
                        <p className='labelValue'>{props.collab}</p>
                    </div>
            </div>
            <h1>{props.title}</h1>
            <p>{props.blurb}</p>

            <hr></hr>

            {props.children}
        </div>
    );
};

export default Project;