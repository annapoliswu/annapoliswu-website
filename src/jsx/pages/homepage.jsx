import React from 'react';
import FeaturedCard from '../components/featuredCard';
import'../../css/homepage.scss';

import mavis from'../../img/mavis-thumbnail.jpg';
import simplyspeak from'../../img/simplyspeak-thumbnail.jpg';
import veridium from'../../img/veridium-thumbnail.jpg';

function Homepage(props) {
    return (
        <div> 
            <p>This is the homepage.</p>

            <div class='grid'>
                <FeaturedCard 
                    link='/about'
                    title='some title here'
                    blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar sagittis velit, eu blandit lectus maximus ut. Vestibulum consequat ligula auctor congue luctus. Maecenas vehicula nisl orci, id egestas nisl commodo at. Aliquam nec elit interdum, fermentum leo sit amet, volutpat nulla. Proin congue nisl lacus, quis placerat lorem pulvinar nec.'
                    btnText='read more'
                    imgSrc={mavis}
                />
                <FeaturedCard 
                    link='/about'
                    title='some title here'
                    blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar sagittis velit, eu blandit lectus maximus ut. Vestibulum consequat ligula auctor congue luctus. Maecenas vehicula nisl orci, id egestas nisl commodo at. Aliquam nec elit interdum, fermentum leo sit amet, volutpat nulla. Proin congue nisl lacus, quis placerat lorem pulvinar nec.'
                    btnText='read more'
                    imgSrc={simplyspeak}
                />
            </div>

        </div>
    );
};

export default Homepage;