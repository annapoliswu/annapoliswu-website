import React from 'react';
import Project from '../project';
import ProjectData from '../../data/projectData';
import InfoHighlight from '../../components/infoHighlight';
import ImgText from '../../components/imgText';
import ZoomImg from '../../components/zoomImg';
import Button from '../../components/button';

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
                    title={"Few Default Results"}
                    description={"Quick filter tabs would often yield very few results, with no indication as to how many results would be shown until users clicked into a tab. This left a negative impression and a perception of very low inventory."}>
                </ImgText>

                <ImgText
                    imgSrc={"img/mt-checkout-filters-clickrate.jpg"} 
                    imgWidth={"300"}
                    imgPosition={"left"}
                    title={"Filters Click Rate"}
                    description={"Due to the numerous issues with the tabs, along with lower tab click rates, we simplify the filters experience into a single button."}>
                </ImgText>

                <p>Heatmaps of the page indicate that 50% of users stopped just past the first row of tire results and that most users' attention was focused on the prices and CTAs.</p>

                <ZoomImg imgSrc={"img/mt-checkout-heatmaps.jpg"} />

                <p>This insight led us to prioritize reducing noise on the page and moving important information, like prices, higher above the fold.</p>

                <ZoomImg imgSrc={"img/mt-checkout-tire-results.jpg"} />

                <p>We additionally reduced the height of the product card to allow for more products to show at once, keeping the most valued tire specs indicated by previous user interviews.</p>

                <ZoomImg imgSrc={"img/mt-checkout-tire-card-height.jpg"} />

                <hr/>

                <h3 className="subheading">Marketing Collaboration</h3>
                <h1>Showcasing Value</h1>

                <p>We clearly display the new online promotion marketing planned to launch through strikethroughs.</p>

                <p>Though a simple solution at first, we quickly realized that we had multiple combinations of deals and vehicle fitment types, leading us to define over <b>10 different card states.</b> </p>
                <ZoomImg imgSrc={"img/mt-checkout-tire-card-variations.jpg"} />

                <p>To further carry the deals through to checkout, we brainstorm various ways to highlight the savings value at the cart stage and continue iteration on option 5.</p>
                <ZoomImg imgSrc={"img/mt-checkout-cart-variations.jpg"} />

                <p>For the final cart design, we add radio buttons to more clearly indicate selectability, showcase free services included before fees, and display the earliest tire availability date.</p>
                <ZoomImg imgSrc={"img/mt-checkout-cart.jpg"} />



                <hr/>

                
                <h3 className="subheading">Auditing the flow</h3>
                <h1>Resolving Painpoints</h1>

                <p>In my October UX audit, I identified several areas of user frustration in the checkout flow and recommended solutions. View the <a href="https://www.figma.com/deck/wLLmKIMFmXz8QwbQyvb56m" target="_blank" rel="noopener noreferrer">full report here</a>.</p>
                <ZoomImg imgSrc={"img/ux-audit-01.jpg"} />
                <ZoomImg imgSrc={"img/ux-audit-02.jpg"} />
                <ZoomImg imgSrc={"img/ux-audit-09.jpg"} />
                <ZoomImg imgSrc={"img/ux-audit-10.jpg"} />
                <ZoomImg imgSrc={"img/ux-audit-11.jpg"} />
                <div style={{display: 'flex', justifyContent: 'center'}}><Button text={"View Full Report"} link={"https://www.figma.com/deck/wLLmKIMFmXz8QwbQyvb56m"} btnType={"primary"} newTab={true}></Button></div>

                <hr/>

                <h3 className="subheading">The Impact</h3>
                <h1>More Online Reservations</h1>

                <p>The product result and cart changes were released February 18th. Since then, we've seen a <b>significant increase in online reservations</b> which has persisted over 3 months. </p>
                <ZoomImg imgSrc={"img/mt-checkout-rolling-stats.png"} />

                <p>In March, we saw a <b>46.8% increase</b> in reservations and a <b>22.1% increase</b> in CVR, compared to last year. </p>
                <ZoomImg imgSrc={"img/mt-checkout-march-graph.jpg"} />
                <p>As we roll out further improvements to the checkout experience, we continue to see higher percentages of users continue through to each step. </p>
                <hr/>

                <h3 className="subheading">Conclusion</h3>
                <h1>Challenges and Takeaways</h1>

                <p>Through my collaboration with multiple stakeholders across departments in this project, I learned to: </p>
                <ol>
                    <li>Guide asks from marketing stakeholders in the direction of more user-centric design. </li>
                    <li>Present data surrounding user frustrations in a compelling way, to gain support for design decisions. </li>
                    <li>Determine what information is actually necessary. Simplify crowded designs without removing any existing useful functionality.</li>
                </ol>
                
            </Project>
    );
};

export default MavisCheckout;