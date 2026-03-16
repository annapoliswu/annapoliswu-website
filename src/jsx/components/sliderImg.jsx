import React from 'react'

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';



const SliderImg = (props) => {
    const delimiterIconStyles = {
        width: '40px',
        height: '40px',
        backgroundSize: 'cover',
        borderRadius: '100px',
        backgroundImage: 'url(img/icon-slider.png)'
    };

    return(
    <ReactBeforeSliderComponent
                className={"sliderImg " + (props.className || "")}
                firstImage={{imageUrl: props.rightImg}}
                secondImage={{imageUrl: props.leftImg}}
                delimiterIconStyles={delimiterIconStyles}
                alt={props.alt}
    />
)};

export default SliderImg;
