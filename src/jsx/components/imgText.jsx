import React from 'react';
import { NavLink, Link} from 'react-router';
import'../../css/imgText.scss';


const ImgText = (props) => {

    return(
        <div className={"imgTextContainer " + props.className}>
            <img className="imgTextImage" src={props.imgSrc}></img>
            <div className="imgTextContentContainer">
                <h2 className="imgTextTitle" > {props.title} </h2>
                <p className="imgTextDescription" > {props.description} </p>
            </div>
        </div>
    );
}

export default ImgText; 