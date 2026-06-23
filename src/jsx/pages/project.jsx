import React from 'react';
import '../../css/project.scss';
import { Link } from 'react-router';
import ProjectData from '../data/projectData'



function Project(props) {
    const projectArray = [...ProjectData];
    const index = projectArray.findIndex(([id]) => id === props.id);
    const prevProject = index > 0 ? projectArray[index - 1][1] : null;
    const nextProject = index < projectArray.length - 1 ? projectArray[index + 1][1] : null;

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

            <hr/>
            
            <div className='projectNav'>
                {prevProject ? 
                    (<div className='prevProject'>
                    <p className='projectNavLabel'>PREV. PROJECT </p>
                    <Link to={prevProject.link}>{prevProject.title}</Link>
                    </div>) 
                : <div className='prevProject'></div>}
                
                {nextProject ? 
                    (<div className='nextProject'>
                    <p className='projectNavLabel'>NEXT PROJECT</p>
                    <Link to={nextProject.link}> {nextProject.title}</Link>
                    </div>)
                    :<div className='prevProject'></div>
                }
                
            </div>
        </div>
    );
};

export default Project;