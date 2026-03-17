import React from 'react';
import { NavLink, Link} from 'react-router';
import'../../css/infoHighlight.scss';



const InfoHighlight = (props) => {
    return (
        <div className="infoHighlightContainer">
            {props.infoHighlightItems.map((key, item) => {
                return (
                    <div className="infoHighlightItem">
                        {item.icon && <img className="infoHighlightIcon" src={item.icon}></img>}
                        {item.label && <p className="infoHighlightLabel" > {item.label} </p> }
                        {item.description && <p className="infoHighlightDescription" > {item.description} </p>}
                    </div>
                )
            })}
        </div>  
    )
}

export default InfoHighlight;