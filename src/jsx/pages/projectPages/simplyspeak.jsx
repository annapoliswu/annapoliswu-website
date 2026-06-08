import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import ImgText from '../../components/imgText';
import Button from '../../components/button';
import InfoHighlight from '../../components/infoHighlight';
import ZoomImg from '../../components/zoomImg';

function SimplySpeak(props) {
    let data = ProjectData.get("simplyspeak");
        
    return (
        <div>
            
            <Project {...data}>
                <h6 className="subheading">Overview</h6>
                <h1>SimplySpeak App For ESL Career Preparation</h1>
                <p> Born from a <b>3 week design jam</b> with the goal of aiding refugees, our team drew from our own experiences with first generation immigrant family and how they've struggled with language barriers and employment. </p>

                <ZoomImg imgSrc={"img/ss-final.jpg"}/>

                <p>Designed to help <b>English as a second language</b> (ESL) users in career preparation, SimpleSpeak carves a niche with its highly applicable lessons and a community-based style of learning. </p>

                <hr/>

                
                <InfoHighlight 
                infoHighlightItems={[
                    { label:"Design jam prompt", description:"How might we use digital technology to help refugees overcome some of the overwhelming odds they face?"},]}>
                </InfoHighlight>

                <br/><br/>
                
                <h6 className="subheading">Need finding</h6>
                <h2>User Research</h2>

                <p>We started our primary research by conducting 6 interviews. Due to time constraints, we expanded our interview pool to include immigrants and users at risk of displacement from their countries.  </p>
                <ZoomImg imgSrc={"img/ss-interviews.jpg"}/>


                We synthesized our findings into empathy maps and key insights.
                <ZoomImg imgSrc={"img/ss-empathy-map.jpg"}/>
                
                <p>During our first brainstorm, we focused on the issue of <b>connection</b>. We explored the idea of a website highlighting immigrant voices, using quilt-weaving as a metaphor for community. </p>
                <ZoomImg imgSrc={"img/ss-brainstorming.jpg"} alt={"Initial scrapped idea as a solution to the prompt."}/>
                
                <p>However we found this idea to be not very novel or helpful. Direct donation platforms, like GoFundMe, already existed where users could tell their own stories.</p>
                
                <hr/>

                <h6 className='subheading'>Pivoting</h6>
                <h2>Carving a Niche</h2>
                <p>We went back to talk with our interviewees in more depth, honed in on <b>3 reoccurring issues</b>, and created user personas to guide our design process.</p>

                
                <InfoHighlight 
                infoHighlightItems={[
                    { label:"Community", description:"They feel disconnected from loved ones and struggle to build new community."},
                    { label:"Language barriers", description:"Language barriers make day-to-day life difficult. Many want to improve their English."},
                    { label:"Trouble job seeking", description:"Job searching in a new country is challenging without connections and resources."},
                    ]}>
                </InfoHighlight>

                <ImgText
                    imgSrc={"img/persona-woman-2.png"} 
                    imgWidth={"200"}
                    imgPosition={"left"}>
                    <h6 className='subheading'>User persona</h6>
                    <h2>Vera immigrated to the United States a year ago</h2>
                    <p>She has completed ESL courses and is now trying to find employment. After several unsuccessful interviews where she struggled to answer interview questions, she looks for better resources to prepare herself.</p>
                </ImgText>

                <p>Finally, we settle on the direction of a <b>community-based career preparation app</b> with secondary language help. </p>
                <ZoomImg imgSrc={"img/ss-features.jpg"}/>

                <hr/> 
                <ImgText 
                imgSrc={"img/test-img.png"} 
                imgPosition={"left"}
                title={"Text title"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio nibh, sodales ut tortor at, rutrum ullamcorper leo. Nulla cursus lobortis nisl bibendum tincidunt. Etiam felis nunc, faucibus in gravida non, ultrices commodo erat. Nam velit leo, cursus aliquam tincidunt non, fringilla eget nisl. Pellentesque sodales, turpis ut commodo mattis, orci erat accumsan nibh, id vehicula nibh mauris sed dui. In mattis enim non pellentesque iaculis. Nam volutpat ante ex, vel ultrices felis sodales nec. Vivamus maximus in tellus convallis imperdiet. Morbi ullamcorper turpis elit, ac egestas leo semper at. Phasellus bibendum tincidunt cursus."}></ImgText>
                
                <ImgText 
                imgSrc={"img/test-img.png"} 
                imgPosition={"right"}
                title={"Text title"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio nibh, sodales ut tortor at, rutrum ullamcorper leo. Nulla cursus lobortis nisl bibendum tincidunt. Etiam felis nunc, faucibus in gravida non, ultrices commodo erat. Nam velit leo, cursus aliquam tincidunt non, fringilla eget nisl. Pellentesque sodales, turpis ut commodo mattis, orci erat accumsan nibh, id vehicula nibh mauris sed dui. In mattis enim non pellentesque iaculis. Nam volutpat ante ex, vel ultrices felis sodales nec. Vivamus maximus in tellus convallis imperdiet. Morbi ullamcorper turpis elit, ac egestas leo semper at. Phasellus bibendum tincidunt cursus."}></ImgText>
                
                <ImgText 
                imgSrc={"img/test-img-2.png"} 
                imgPosition={"left"}
                title={"Text title"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio nibh, sodales ut tortor at, rutrum ullamcorper leo. Nulla cursus lobortis nisl bibendum tincidunt. Etiam felis nunc, faucibus in gravida non, ultrices commodo erat. Nam velit leo, cursus aliquam tincidunt non, fringilla eget nisl. Pellentesque sodales, turpis ut commodo mattis, orci erat accumsan nibh, id vehicula nibh mauris sed dui. In mattis enim non pellentesque iaculis. Nam volutpat ante ex, vel ultrices felis sodales nec. Vivamus maximus in tellus convallis imperdiet. Morbi ullamcorper turpis elit, ac egestas leo semper at. Phasellus bibendum tincidunt cursus."}>
                <Button text={"Button Text"} link={"/"} btnType={"primary"} newTab={true}></Button>
                </ImgText>
                
                <ImgText 
                imgSrc={"img/test-img-2.png"} 
                imgPosition={"right"}
                title={"Text title"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio nibh, sodales ut tortor at, rutrum ullamcorper leo. Nulla cursus lobortis nisl bibendum tincidunt. Etiam felis nunc, faucibus in gravida non, ultrices commodo erat. Nam velit leo, cursus aliquam tincidunt non, fringilla eget nisl. Pellentesque sodales, turpis ut commodo mattis, orci erat accumsan nibh, id vehicula nibh mauris sed dui. In mattis enim non pellentesque iaculis. Nam volutpat ante ex, vel ultrices felis sodales nec. Vivamus maximus in tellus convallis imperdiet. Morbi ullamcorper turpis elit, ac egestas leo semper at. Phasellus bibendum tincidunt cursus."}></ImgText>
                
            </Project>
        </div>
    );
};

export default SimplySpeak;