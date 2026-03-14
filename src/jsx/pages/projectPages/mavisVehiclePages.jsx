import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import InfoHighlight from '../../components/infoHighlight';
import ImgText from '../../components/imgText';

function MavisVehiclePages(props) {
    let data = ProjectData.get("mavisVehiclePages");
        
    return (
        <div>
            <Project {...data}>
                <p className="subheading">Problem definition</p>
                <h1>New Entry Points Into Tire Buying </h1>
                <p>Most customers with limited knowledge of tires will search their vehicle name when looking for replacement tires. Mavis.com does not currently provide any entry points onto the site for these customers.  </p>
                <ImgText
                    imgSrc={"img/persona-woman-2.png"} 
                    imgWidth={"200"}
                    imgPosition={"left"}>
                    <h3>Clara is a mom looking to replace her daughter's tires</h3>
                    <p> She searches <b>"Tires that fit a Honda Civic 2022"</b> because she doesn't what tire size is on her daughter's car. 
                        She lands on non-Mavis site and starts her shopping journey elsewhere because Mavis doesn't have pages that reference vehicles.</p>
                </ImgText>


                <InfoHighlight
                    infoHighlightItems={[
                        { icon: "img/icon-email.svg", label: "Problem", description: "This is the description for the info highlight component." },
                        { icon: "img/icon-github.svg", label: "Constraints", description: "This is the description for the info highlight numero 2." },
                        { icon: "img/icon-linkedin.svg", label: "Users", description: "This is the description for the info highlight numero 2." },]}>
                </InfoHighlight>
            </Project>


        </div>
    );
};

export default MavisVehiclePages;