import React from 'react';
import { NavLink, Link} from 'react-router';
import'../../css/imgText.scss';
import ZoomImg from './zoomImg';



const ImgText = (props) => {

    return(
        <div className={"imgTextContainer " + props.imgPosition}>
            <ZoomImg className="imgTextImage" src={props.imgSrc} alt={props.alt}/>
            <div className="imgTextContentContainer">
                <h2 className="imgTextTitle" > {props.title} </h2>
                <p className="imgTextDescription" > {props.description} </p>
                {props.children}
            </div>
        </div>
    );
}

export default ImgText; 