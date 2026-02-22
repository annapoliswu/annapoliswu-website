import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import ImgText from '../../components/imgText';
import Button from '../../components/button';

function SimplySpeak(props) {
    let data = ProjectData.get("simplyspeak");
        
    return (
        <div>
            
            <Project {...data}>
                <h2>SimplySpeak Project Page</h2>
                <p>This is extra content inside the SimplySpeak project page.</p>
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