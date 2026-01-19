import React from 'react';
import { NavLink, Link} from 'react-router';
import'../css/button.scss';


const Button = (props) => {
    return(
        <div className="btn-container">
            <img className="btn-icon left" src={props.leftIcon}/>
            <Link className="btn btn-text" to={props.link}> {props.text} </Link>
            <img className="btn-icon right" src={props.rightIcon}/>
        </div>
    );
}

export default Button;