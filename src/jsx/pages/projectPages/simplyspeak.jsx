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
                <p> Born from a 3 week design jam where the goal was to design to aid refugees, our team focused on our own experiences with first generation immigrant parents and the stuggles we've witnessed with language barriers and employment. </p>

                <ZoomImg imgSrc={"img/ss-final.jpg"}/>
                
                <p> SimplySpeak is an app designed to specifically for English as a second language users. Focused primarily on career prepartion with secondary language assistance, SimpleSpeak carves a niche with its highly applicable lessons and a community-based style of learning. </p>

                <hr/>

                
                <InfoHighlight 
                infoHighlightItems={[
                    { label:"Design jam prompt", description:"How might we use digital technology to help refugees overcome some of the overwhelming odds they face?"},]}>
                </InfoHighlight>

                <br/><br/>
                <h6 className="subheading">Problem definition</h6>
                <h2>Finding a Niche</h2>

                <p>We started our primary research by conducting 6 interviews. Due to time constraints, we expanded our interview pool to include immigrants and users at risk of displacement from their countries.  </p>
                <ZoomImg imgSrc={"img/ss-interviews.jpg"}/>

                <ZoomImg imgSrc={"img/ss-empathy-map.jpg"}/>

                <InfoHighlight 
                infoHighlightItems={[
                    { label:"Need to be heard", description:"Users want their voices and stories heard and their struggles recognized."},
                    { label:"Language barriers", description:"Language barriers are major obstacles when resettling into new countries."},
                    { label:"Trouble job seeking", description:"Job searching in a new country is challenging without connections and resources."},
                    ]}>
                </InfoHighlight>

                
                <p>During our first brainstorming, we dabbled with the idea of a website highlighting immigrant stories, centered around themes of quilt-weaving and connectedness. </p>
                <ZoomImg imgSrc={"img/ss-brainstorming.jpg"} alt={"Initial scrapped idea as a solution to the prompt."}/>
                
                <p>However we quickly found the idea to be not very novel or helpful. Direct donation platforms, like GoFundMe, already existed where users could tell their own stories.</p>
                <p>So we set out to re-examine the prompt and interview notes.</p>

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