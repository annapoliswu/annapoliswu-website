import React from 'react';
import { NavLink, Link} from 'react-router';
import'../../css/imageText.scss';


const ImageText = (props) => {

    return(
        <div className={"imageTextContainer " }>
            <img className="imageTextImage" src={props.imgSrc}></img>
            <div className="imageTextContent">
                <h2 className="imageTextTitle" > {props.title} </h2>
                <p className="imageTextDescription" > {props.description} </p>
            </div>
        </div>
    );
}

export default ImageText; 