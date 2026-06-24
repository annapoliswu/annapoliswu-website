import React from 'react'
import Zoom from 'react-medium-image-zoom'
import '../../css/reactMediumImageZoom.scss';
import { ScrollReveal } from '@allwells/react-scroll-reveal';

const ZoomImg = (props) => {
    return(
    <ScrollReveal animationType="fade" delay={60} once={false} duration={500}>
    <Zoom >
        <img className={"zoomImg " + (props.className || "")} src={props.imgSrc} width={props.imgWidth} height={props.imgHeight} alt={props.alt || undefined} />
    </Zoom>
    </ScrollReveal>
)};

export default ZoomImg;