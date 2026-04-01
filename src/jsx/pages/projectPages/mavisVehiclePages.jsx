import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import InfoHighlight from '../../components/infoHighlight';
import ImgText from '../../components/imgText';
import ZoomImg from '../../components/zoomImg';

function MavisVehiclePages(props) {
    let data = ProjectData.get("mavisVehiclePages");
        
    return (
            <Project {...data}>
                <h3 className="subheading">Problem definition</h3>
                <h1>New Entry Points Into Tire Buying </h1>
                <p>Most customers with limited knowledge of tires will search their vehicle name when looking for replacement tires. Mavis.com does not currently provide any entry points onto the site for these customers.  </p>
                <ImgText
                    imgSrc={"img/persona-woman-2.png"} 
                    imgWidth={"200"}
                    imgPosition={"left"}
                    title={"Clara is looking to replace her daughter's tires"}>
                    <p> She searches <b>"Tires that fit a Honda Civic 2022"</b> because she doesn't know what tire size is on her daughter's car. 
                        Since mavis.com does not reference vehicles, she lands on non-Mavis site and starts her shopping journey elsewhere.</p>
                </ImgText>


                <InfoHighlight
                    infoHighlightItems={[
                        {label: "Problem", description: "Mavis is losing first-time tire buyers who are searching for tires by vehicle." },
                        { label: "Goal", description: "Create pages that can outrank competitors for organic vehicle searches." },
                        { label: "Success Metric", description: "Increase organic traffic by 5%. Retain > 4% tire CVR on new pages." },]}>
                </InfoHighlight>
                <hr/>

                <h3 className="subheading">Market Research</h3>
                <h1>Providing Quality Content For Search Ranking </h1>
                
                <p>We found that top ranking sites would capture all 4 levels of vehicle information users would search. </p>            
                                
                <table>
                    <thead>
                        <tr>
                            <th>Lv</th>
                            <th>Information</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Make</td>
                            <td>Honda Tires</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Make Model</td>
                            <td>Honda Civic Tires</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Make Model Year</td>
                            <td>2020 Honda Civic Tires</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Make Model Year Trim</td>
                            <td>2020 Honda Civic EX Tires</td>
                        </tr>
                    </tbody>
                </table>

                <p>Sites on the first page of Google had built pages for each of the 4 levels and would interlink these pages, boosting search ranking by allowing users to visit each level whilst continuing their search.</p>
                <ZoomImg imgSrc={"img/vhp-market-research-search.jpg"} alt={"Top ranking results for vehicle-specific tire searches: Discouunt Tire, Goodyear, and Walmart."}/>
                
                <p>To compete, we aim to <b>provide more comprehensive information for each level</b>, while still engaging customers. We compiled the most useful features from vehicle pages to base our designs off of.</p>
                <ZoomImg imgSrc={"img/vhp-market-research-features.jpg"} alt={"Various features from the vehicle pages of top ranking sites."}/>
                <ol>
                    <li>Tire model recommendations based on vehicle.</li>
                    <li>Guide on with how to find your tire size.</li>
                    <li>FAQs and vehicle specfic information.</li>
                    <li>Linked pages for vehicle year and trim levels.</li>
                </ol>
                
                <hr/>

                <h3 className="subheading">Design Iteration</h3>
                <h1>Designing to Capture Information</h1>
                <p>We want to engage users to enter the rest of their vehicle information, so we design to immediately connect with users through a <b>recognizable visual of their vehicle.</b></p>
                <ZoomImg imgSrc={"img/vhp-design-iteration.jpg"} alt={"Greyscale designs of the desktop make, model, and trim level vehicle pages."}/>

                <p>Most of our site visitors will not scroll past 1/2 the page, so we keep the most engaging content, such as tire suggestions and deals, higher up. </p>
                <ZoomImg imgSrc={"img/vhp-design-iteration-2.jpg"} alt={"Polished desktop and mobile mockups of the vehicle pages."}/>
                
                <p>The rest of the page is rich with SEO content, as well as additional points for users to select YEAR or TRIM to further their tire search.</p>

                <hr/>

                <h3 className="subheading">Final Designs</h3>
                <h1>Polished Prototypes</h1>
                
                <p>For final approval, I created <a href="https://www.figma.com/proto/D6wfyaKSWBgJSXg8rFGV7d/UI-UX-Requests--June---2025---1-?node-id=2338-197599&t=U47IB9OoZkTJeM84-1&scaling=scale-down&content-scaling=fixed&page-id=285%3A24285&starting-point-node-id=2338%3A197599&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">mobile prototypes</a> to present to leadership.</p>

                <ImgText
                    imgSrc={"img/vhp-hero-compressed.gif"}
                    imgPosition={"left"}
                    title={"Personalized Hero Section"}
                    description={"The hero section transitions from a generic car to the user's specific vehicle as the user searches, creating a more personalized experience, all while allowing us to interlink pages to boost SEO."}>
                </ImgText>

                <ImgText
                    imgSrc={"img/vhp-carousel-compressed.gif"}
                    imgPosition={"right"}
                    title={"Accessible Product Suggestions"}
                    description={"The tire carousel provides users with an alternative option to browse tires without completing a search. We show users a range of prices and prompt for more information to get an exact pricing."}>
                </ImgText>

                <ImgText
                    imgSrc={"img/vhp-notsure-compressed.gif"}
                    imgPosition={"left"}
                    title={"Re-routing for Unhappy Paths"}
                    description={"We provide alternate routes for users who are unsure of their vehicle information, providing license plate lookup and other help links when necessary."}>
                </ImgText>

                <ImgText
                    imgSrc={"img/vhp-scroll-compressed.gif"}
                    imgPosition={"right"}
                    title={"Informative Dynamic Content"}
                    description={"Dynamic FAQs, headings, and tables provide space for SEO keywords that change based on the vehicle and page level."}>
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

export default MavisVehiclePages;