import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';

import InfoHighlight from '../../components/infoHighlight';
import ImgText from '../../components/imgText';
import ZoomImg from '../../components/zoomImg';
import Button from '../../components/button';

import SliderImg from '../../components/sliderImg';

function Veridium(props) {
    let data = ProjectData.get("veridium");
        
    return (
        <Project {...data}>
            <h3 className="subheading">Background</h3>
            <h1>Teaching Abstract Concepts</h1>

            <p>Complex atomic and molecular structures are often difficult for students to comprehensively visualize, especially as 3D structures represented in traditional textbooks.</p>
            <ZoomImg imgSrc={"img/veridium-ss-diagram.jpg"} alt={"Examples of structure diagrams of various materials"}/>

            <p>Even on physical clay models, concepts like quantum mechanics and atomic orbitals are hard to properly convey and difficult to assemble. To overcome these challenges, Professor Katherine A. Mirica proposed the use of VR-based visualization to aid student learning.</p>

            <p>Earning a Neukom Grant in 2022, she partnered with the <a href="https://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Design and Innovation Lab</a> at Dartmouth College to develop Veridium, a VR app to aid in the teaching of abstract solid state chemistry concepts. </p>
        
            <hr/>
            <h3 className="subheading">The product</h3>
            <h1>Building Off A Foundation</h1>

            <p>I joined the Veridium project near the end of development, as a <b>UX Designer</b> and <b>Technical 3D Artist</b>. Most of the initial conceptualization and development of the app had been completed by previous teams, and it was up to our team to test, polish, and ship the final product. </p>

            <p>As a <b>UX designer</b>, I identified painpoints through usability testing, scripted and filmed our user manual video, and conducted research trials to gauge the effectiveness of VR on learning. </p>

            <ImgText
                imgSrc={"img/veridium-selector-wand.jpg"} 
                imgWidth={"300px"}
                imgPosition={"left"}
                title={"Improving the Selection Tool"}
                description={"In user testing, I found that the selector wand used in lessons was not intuitive for users. We changed this interaction to a standard raycast selection, improving experiences for first-time users."}
            />

            <ImgText
                imgSrc={"img/veridium-user-manual.png"} 
                imgWidth={"300px"}
                imgPosition={"right"}
                title={"Creating a User Manual"}
                description={"To guide students and instructors during the research trials, I created a comprehensive user manual to help users install Veridium and use the VR headset effectively."}
            > <Button text={"View User Manual Video"} link={"https://www.youtube.com/watch?v=xAVzm_0EwDY"} newTab={true}/></ImgText>

            
            <ImgText
                imgSrc={"img/veridium-user-trials.jpg"} 
                imgWidth={"400px"}
                imgPosition={"left"}
                title={"Conducting Test Trials"}
                description={"We conducted research trials with the students in Professor Mirica's chemistry class to test the learning outcomes of Veridium."}
            ><Button text={"View Research Publication"} link={"https://pubs.acs.org/doi/10.1021/acs.jchemed.4c01256"} newTab={true}/></ImgText>
        
            <hr/>
            <h3 className="subheading">Testing Trials</h3>
            <h1>Research Methodology</h1>

            <p>To draw a fair comparison, we test our VR learning experience against the same lesson with analog 3D clay models, eliminating the outlying factor of comparing 3D teaching methods to 2D ones.</p>
            <ZoomImg imgSrc={"img/veridium-research-methodology.jpg"}/>
            
            <p>We conducted a randomized study on 60 undergraduate students. Participants were split into 2 groups that followed a VR lesson and 2 groups that followed an in-person lecture with 3D clay models. </p>

            <ImgText
                imgSrc={"img/veridium-lecture-content.png"} 
                imgWidth={"280px"}
                imgPosition={"left"}
                title={"Lesson Plan & Assessment"}
                description={"Both the VR and clay sessions are designed to be as similar as possible, with near identical narration about the Magnesium crystal structure. Before and after any lesson material, students were assessed with a pre and post test to measure learning outcomes."}
            >
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', marginTop: '8px'}}>
                <Button text={"View Lesson Plan"} link={"https://pubs.acs.org/doi/suppl/10.1021/acs.jchemed.4c01256/suppl_file/ed4c01256_si_004.pdf"} newTab={true}/>
                <Button text={"View Tests"} link={"https://pubs.acs.org/doi/suppl/10.1021/acs.jchemed.4c01256/suppl_file/ed4c01256_si_005.pdf"} newTab={true}/>
                </div>
                
            </ImgText>
            <h2>Trial Results</h2>
            <p>While both groups saw a significant increase from their pre-test scores to their post-test scores, we overall found <b>no significant difference</b> in learning gains <b>between</b> the VR and clay groups.</p>
            <ZoomImg imgSrc={"img/veridium-test-results.jpg"}/>
            <p> The VR group achieved a comparable average point gain (M = 2.50, SD = 2.27), in contrast to the clay group (M = 2.47, SD = 1.56), indicating similar learning outcomes regardless of VR use.</p>

            <p>Additionally, we asked students to fill out a short survey gauging their engagement with the content. We found that students in the VR group had a <b>significantly higher situational interest </b> (M = 3.73, SD = 0.22) than those in the clay group (M = 3.23, SD = 0.51).</p>

            <h2 style={{marginTop:'16px'}}>Research Conclusions</h2>
            <p>To read more about the outcomes to this study, please visit the <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.4c01256" target="_blank" rel="noopener noreferrer">research publication linked here.</a> </p>
            <ol>
                <li>VR can be an effective tool for teaching complex 3D concepts, with learning outcomes comparable to hands-on 3D traditional methods.</li>
                <li>Students initially showed more interest in the lesson when using VR. Though this may be attributed to the novelty effect of new technology.</li>
                <li>More research is needed to determine if the increased engagement seen with VR holds over time.</li>
            </ol>

            <hr/>

            <h3 className="subheading">The final product</h3>
            <h1>Shipping Veridium</h1>
            
            <p>Our team was responsible for polishing and launching the final app onto the Meta Quest Store. </p>
            <p>As a <b>3D artist</b>, I refined existing environments ( lightmaps and textures ) and modeled background assets to replace placeholder ones.</p>

            <SliderImg leftImg={"img/veridium-before.jpg"} rightImg={"img/veridium-after.jpg"} />
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px'}}>
            <ZoomImg imgSrc={"img/veridium-1.png"}/>
            <ZoomImg imgSrc={"img/veridium-2.png"}/>
            <ZoomImg imgSrc={"img/veridium-3.png"}/>
            <ZoomImg imgSrc={"img/veridium-4.png"}/>
            </div>

            <ImgText
                imgSrc={"img/meta-quest-logo.jpg"} 
                imgWidth={"250px"}
                imgPosition={"left"}
                description={"We launched Veridium onto the Meta Quest Store in 2024, making it accessible to educators and students worldwide. Try it now for free!"}
            >
                <Button text={"Download App"} link={"https://www.meta.com/experiences/veridium/7441691572588551/"} newTab={true}/>
                
            </ImgText>
            
            <hr/>
            <h3 className="subheading">Conclusion</h3>
            <h1>Challenges and Takeaways</h1>
            <p>This was a fantastic first term at DALI Labs and I wouldn't have had it any other way! Throughout my time with the product, I learned a great deal about refining work, as well as the shipping process for VR apps.</p>
 
            <ol>
                <li>Working with an existing product, I learned to understand the <b>history of design decisions</b> and limitations of prior teams.</li>
                <li>Funnily enough, this was my second time working on a product in chemistry and education. I enjoyed seeing the differences between designing for <b>K-12 vs college audiences</b>, in addition to learning from subject matter experts. </li>
                <li>The research methodologies I learned, with the advisement of professors in the field, helped me <b>formulate future testing approaches</b>, especially for my own M.S. thesis in the coming years. </li>
            </ol>

            <ZoomImg imgSrc={"img/dali-team-1.jpg"} alt={"Photo of Veridium with the entire DALI team near the time I joined."}/>

        </Project>
    );
};

export default Veridium;