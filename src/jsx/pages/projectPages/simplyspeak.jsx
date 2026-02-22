import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import ImgText from '../../components/imgText';

function SimplySpeak(props) {
    let data = ProjectData.get("simplyspeak");
        
    return (
        <div>
            
            <Project {...data}>
                <h2>SimplySpeak Project Page</h2>
                <p>This is extra content inside the SimplySpeak project page.</p>
                <ImgText 
                imgSrc={"img/test-img.png"} 
                title={"Text title"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio nibh, sodales ut tortor at, rutrum ullamcorper leo. Nulla cursus lobortis nisl bibendum tincidunt. Etiam felis nunc, faucibus in gravida non, ultrices commodo erat. Nam velit leo, cursus aliquam tincidunt non, fringilla eget nisl. Pellentesque sodales, turpis ut commodo mattis, orci erat accumsan nibh, id vehicula nibh mauris sed dui. In mattis enim non pellentesque iaculis. Nam volutpat ante ex, vel ultrices felis sodales nec. Vivamus maximus in tellus convallis imperdiet. Morbi ullamcorper turpis elit, ac egestas leo semper at. Phasellus bibendum tincidunt cursus. Ut volutpat ipsum ac quam tincidunt placerat. Donec porttitor, sem sed porttitor ornare, quam justo pellentesque est, nec semper massa sapien a ipsum. "}></ImgText>
            </Project>
        </div>
    );
};

export default SimplySpeak;