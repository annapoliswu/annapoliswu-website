import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import InfoHighlight from '../../components/infoHighlight';
import ImgText from '../../components/imgText';
import ZoomImg from '../../components/zoomImg';

function MavisCheckout(props) {
    let data = ProjectData.get("mavisCheckout");
        
    return (
            <Project {...data}>
                <h3 className="subheading">The effect</h3>
                <h1>Impact At A Glance</h1>

                <p>After implementing design changes, we saw a 56.5% increase in conversion rate for tire checkouts (from 4.51% to 7.06% YoY)</p>
                
                <p>Through auditing and fixing user pain points, we further increased retention rates at key steps within checkout. </p>

                <h3 className="subheading">Problem definition</h3>
                <h1>Improving the Tire Buying Flow</h1>
                <p>Most customers with limited knowledge of tires will search their vehicle name when looking for replacement tires. Mavis.com does not currently provide any entry points onto the site for these customers.  </p>
                
                <ImgText
                    imgSrc={"img/persona-woman-2.png"} 
                    imgWidth={"200"}
                    imgPosition={"left"}
                    title={"Clara is looking to replace her daughter's tires"}>
                    <p> She searches <b>"Tires that fit a Honda Civic 2022"</b> because she doesn't know what tire size is on her daughter's car. 
                        Since mavis.com does not reference vehicles, she lands on non-Mavis site and starts her shopping journey elsewhere.</p>
                </ImgText>


                <hr/>

                <h3 className="subheading">Conclusion</h3>
                <h1>Challenges and Takeaways</h1>

                <p>Design-wise, I learned a great deal about scaling to accommodate dynamic content, as well as striking a balance between designing for usability and SEO. Though we worked with our developer early in the process, other challenges still surfaced when talking over the technical implementation.</p>
                <ol>
                    <li>Vehicle makes varied widely in number of trims and production years. Designs had to account for anywhere between 5-40 items, without looking too sparse or too cluttered.</li>
                    <li>Because pages had to be engaging to users and hold a large amount of SEO content, I learned how to best prioritize information and <b>organize content hierarchically.</b></li>
                    <li>We created templated copy blocks for each level, so developers could insert dynamic keywords and generate content <b>to scale for 1000's of pages.</b></li>
                    <li>We had to find sources for brand new content, resulting in us contracting an outside vendor for vehicle images, in addition to building our own libraries for logos and vehicle composites.</li>
                </ol>


            </Project>
    );
};

export default MavisCheckout;