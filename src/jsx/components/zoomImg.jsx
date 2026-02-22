import React from 'react'
import Zoom from 'react-medium-image-zoom'
import '../../css/reactMediumImageZoom.scss';


const ZoomImg = (props) => {
    return(
    <Zoom >
        <img className={props.className} src={props.src} alt={props.alt} />
    </Zoom>
)};

export default ZoomImg;