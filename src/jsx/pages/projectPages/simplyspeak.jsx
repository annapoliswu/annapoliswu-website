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

                <p>We start our primary research by conducting 6 interviews. Due to time constraints, we expand our interview pool to include immigrants and users at risk of displacement from their countries.  </p>
                <ZoomImg imgSrc={"img/ss-interviews.jpg"}/>


                We synthesized our findings into empathy maps and key insights.
                <ZoomImg imgSrc={"img/ss-empathy-map.jpg"}/>
                
                <p>During our first brainstorm, we focused on the issue of <b>connection</b>. We explored the idea of a website highlighting immigrant voices, using quilt-weaving as a metaphor for community. </p>
                <ZoomImg imgSrc={"img/ss-brainstorming.jpg"} alt={"Initial scrapped idea as a solution to the prompt."}/>
                
                <p>However we found this idea to be not very novel or helpful. Direct donation platforms, like GoFundMe, already exist where users could tell their own stories.</p>
                
                <hr/>

                <h6 className='subheading'>Pivoting</h6>
                <h2>Carving a Niche</h2>
                <p>Upon backtracking to talk with our interviewees in more depth, we discover <b>3 reoccurring issues</b>. We use these to define user personas to guide the rest of our design process.</p>

                
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

                <p>Finally, we settle on the direction of a <b>community-based career preparation app</b> with secondary language help, honing in on 5 core features based on our user findings.</p>
                
                <ZoomImg imgSrc={"img/ss-features.jpg"}/>


                <hr/> 


                <h6 className='subheading'>Design Process</h6>
                <h2>Cultivating a Friendly Learning Environment</h2>

                <p>Building off the brand goal of making learning <b>simple and easy</b>, we experiment with simple circle shapes. We later craft transtional UI animations, to elevate our minimal style to a delightful level.  </p>
                <ZoomImg imgSrc={"img/ss-homescreen-greyscales.jpg"}/>

                <ImgText 
                imgSrc={"img/ss-lesson-planning.jpg"} 
                imgPosition={"left"}
                title={"Lesson Planning"} 
                description={"During greyscaling, we map flows for 4 introductory lesson plans to figure out the kinds of learning modules that would be the most useful and engaging."}></ImgText>
                
                
                <ImgText 
                imgSrc={"img/ss-branding.jpg"} 
                imgPosition={"right"}
                title={"Branding Style Guide"}>
                    <p>The app needed to feel friendly and invite users to connect during an often overwhelming period in their lives.</p>
                    <p>We avoided the corporate blues found in career apps like LinkedIn and Indeed, opting for warmer hues and rounder shapes.</p> 
                </ImgText>
                
                

                <hr/> 

                <h6 className='subheading'>Hi-fi design</h6>
                <h2>Final Product</h2>

                <ImgText 
                imgSrc={"img/ss-animations.gif"} 
                imgPosition={"left"}
                title={"Delightful Animations & UI"} 
                description={"To give users a breather from their stressful job hunt and to invite them to engage more with learning, we craft a welcoming interface with fun screen transitions."}></ImgText>
                
                <ImgText 
                imgSrc={"img/ss-onboarding.gif"} 
                imgPosition={"right"}
                title={"Smooth Onboarding Experience"} 
                description={"Upon signing up, users are introduced their personal assistants, audio modules, and tapping key words to see translations. These features are later expanded upon more in the indivdual lessons."}></ImgText>
                
                <ImgText 
                imgSrc={"img/ss-lesson-2.gif"} 
                imgPosition={"left"}
                title={"Secondary Language Assistance"} 
                description={"With our target users, we assume some proficency with English already. Therefore, we primarily focus on conversational assistance - pronunciation, grammar correction, and word recall."}>
                </ImgText>
                
                <ImgText 
                imgSrc={"img/ss-groups.gif"} 
                imgPosition={"right"}
                title={"Community-Based Learning"} 
                description={"Interviews with immigrants and ESL users revealed that they felt disconnected and left without resources after moving to the U.S. We combat this issue by providing learning groups and mentor feedback. "}></ImgText>

                

                <hr/> 

                <h6 className='subheading'>User Testing</h6>
                <h2>Gathering Feedback</h2>

                
                <p>We recruited 6 testers from usertesting.com who spoke English as a second language. </p>

                <ZoomImg imgSrc={"img/ss-user-testing-demographics.jpg"}/>

                <p>Testers completed tasks on the prototype, and were then asked Likert scale and qualitative follow-up questions.</p>
                
                <ZoomImg imgSrc={"img/ss-user-testing-rating.jpg"}/>
                
                <p>Testers pointed out some confusing instructions and requested notifications for group chats, both of which we re-incorporated into the final prototype.</p>

                <ZoomImg imgSrc={"img/ss-changes.jpg"}/>

                <p>Overall, we received positive reactions from all of our testers about the concept and intuitiveness of SimplySpeak. Half of our testers were genuinely excited about the translation and language help features .</p>
                
                <hr/> 
                <h6 className='subheading'>Conclusion</h6>
                <h2>Challenges & Takeaways</h2>

                <p>In collaborating with and bouncing ideas off of other UX designers in this design jam, I gained a lot of valuable insights. </p>

                <ol>
                    <li>When in doubt, revisit user feedback and sit down with your users again.</li>
                    <li>Narrow down the target user base. Our designs had clearer direction when we focused on solving one specific problem really well, rather than solving multiple problems all at once. </li>
                    <li>We spent a lot of time iterating on our first design direction. Stay open to pivoting when early design solutions don't feel quite right. </li>
                </ol>

            </Project>
        </div>
    );
};

export default SimplySpeak;