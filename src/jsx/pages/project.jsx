import React from 'react';
import '../../css/project.scss';



function Project(props) {
    return (
        <div className='projectContainer'> 
            
            <img className="projectCoverImg" src={props.cover}></img>

            <div className='projectOverview'>
                <div className='projectDetails'>
                        <div className='projectDetailItem'>
                            <p className='label'>YEAR</p>
                            <p className='labelValue'>{props.timeFrame}</p>
                        </div>
                        <div className='projectDetailItem'>
                            <p className='label'>ROLE</p>
                            <div>{props.role.map(role =>
                                <p className='labelValue' key={role}>{role}</p> )}
                            </div>
                        </div>
                        <div className='projectDetailItem'>
                            <p className='label'>TOOLS</p>
                            <div>{props.tools.map(tool =>
                                <p className='labelValue' key={tool}>{tool}</p> )}
                            </div>
                        </div>
                        <div className='projectDetailItem'>
                            <p className='label'>TEAM</p>
                            <div>{props.collab.map(collaborator =>
                                <p className='labelValue' key={collaborator}>{collaborator}</p> )}
                            </div>
                        </div>
                </div>

            </div>

            <hr></hr>
            <div className='projectContent'>
                {props.children}
            </div>
        </div>
    );
};

export default Project;