import React from 'react';
import FeaturedCard from '../components/featuredCard';

function Homepage(props) {
    return (
        <div> 
            This is the homepage.
            <FeaturedCard 
                link='/about'
                title='some title here'
                blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar sagittis velit, eu blandit lectus maximus ut. Vestibulum consequat ligula auctor congue luctus. Maecenas vehicula nisl orci, id egestas nisl commodo at. Aliquam nec elit interdum, fermentum leo sit amet, volutpat nulla. Proin congue nisl lacus, quis placerat lorem pulvinar nec.'
                btnText='read more'
            />
        </div>
    );
};

export default Homepage;