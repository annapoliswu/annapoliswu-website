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

                <p>After implementing design changes, we saw a <b>46.8% increase</b> in total number of tire purchases year-over-year.</p>
                <ZoomImg imgSrc={"img/mt-checkout-tire-results.jpg"} />

                <p>And a <b>22.1% increase</b> in the overall CVR for tires ( from 5.9% to 7.2% )</p>
                
                <ZoomImg imgSrc={"img/mt-checkout-cart.jpg"} />

                <hr/>

                <h3 className="subheading">Problem definition</h3>
                <h1>Fewer Customers Completing Checkout</h1>

                <p>In 2025, we saw a consistent drop in the conversion rate for tire purchases compared to last year. Though more users were visiting the site, <b>a smaller percentage were adding tires to their cart.</b>  </p>
                
                
                <p>Every step past "adding a tire to their cart," saw lower retention rates (% of users continuing to the next step).</p>

                <ZoomImg imgSrc={"img/mt-checkout-august-graph.jpg"} />


                <h3>We had 3 main goals moving forward with this project</h3>
                <ol>
                    <li>Improve specifically the % of users who added to cart on the <b>product results page</b> and the % of users who continued to checkout from the <b>cart page</b>. </li>
                    <li>Facilitate the new online promotion the marketing department was launching to drive tire sales.</li>
                    <li>Audit the checkout flow from start to end and identify and solution additional user pain points.</li>
                </ol>

                
                <hr/>

                <h3 className="subheading">Design Rationale</h3>
                <h1>Improving Product Results</h1>

                <p>Upon researching the product results page, we found that many users were confused by the filtering system.</p>
                
                <ImgText
                    imgSrc={"img/mt-checkout-results-issue-2.jpg"} 
                    imgWidth={"200"}
                    imgPosition={"left"}
                    title={"Quick Filters vs Filters Button"}
                    description={"The interaction between the quick filter tabs and the manually applied filters was not intuitive. Some expected the filters they applied manually to persist when switching between tabs, while others did not."}>
                </ImgText>

                <ImgText
                    imgSrc={"img/mt-checkout-results-issue-3.jpg"} 
                    imgWidth={"200"}
                    imgPosition={"right"}
                    title={"Few Results Depending on Vehicle"}
                    description={"Default quick filter tabs would often yield very few results, with no indication as to how many results would be shown until users clicked into a tab. This left a negative impression that we had very limited inventory."}>
                </ImgText>

                <ImgText
                    imgSrc={"img/mt-checkout-filters-clickrate.jpg"} 
                    imgWidth={"300"}
                    imgPosition={"left"}
                    title={"Filters Click Rate"}
                    description={"Due to the numerous issues with the tabs, along with lower click rates, we simplify the filters experience into a single button."}>
                </ImgText>

                <p>Heatmaps of the page indicate that 50% of users stopped just past the first row of tire results and that most users' attention was focused on the prices and CTAs.</p>

                <ZoomImg imgSrc={"img/mt-checkout-heatmaps.jpg"} />

                <p>This insight led us to prioritize reducing noise on the page and moving important information, like prices, higher above the fold.</p>

                <ZoomImg imgSrc={"img/mt-checkout-tire-results.jpg"} />

                <p>We additionally reduced the height of the product card to allow for more products to show at once, keeping the most important tire specs as indicated from previous user interviews.</p>

                <ZoomImg imgSrc={"img/mt-checkout-tire-card-height.jpg"} />

                <hr/>

                <h3 className="subheading">Marketing Collaboration</h3>
                <h1>Showcasing Value</h1>

                <p>We clearly display the new online promotion marketing planned to launch through strikethroughs.</p>

                <p>Though a simple solution at first, we quickly realized that we had multiple combinations of deals and vehicle fitment types, leading us to define 10 different card states. </p>
                <ZoomImg imgSrc={"img/mt-checkout-tire-card-variations.jpg"} />

                <p>To further carry the deals through to checkout, we brainstorm various ways to highlight the savings value at cart stage and continue iteration on option 5.</p>
                <ZoomImg imgSrc={"img/mt-checkout-cart-variations.jpg"} />

                <p>For the final cart design, we add radio buttons to more clearly indicate selectability, showcase free services included before fees, and display the earliest tire availability date.</p>
                <ZoomImg imgSrc={"img/mt-checkout-cart.jpg"} />



                <hr/>

                
                <h3 className="subheading">Auditing the flow</h3>
                <h1>Resolving Painpoints</h1>

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