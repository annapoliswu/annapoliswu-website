import React from 'react';
import { NavLink, Link} from 'react-router';
import'../../css/button.scss';


const Button = (props) => {
    let leftIcon = <img/>;
    if(props.leftIcon){
        leftIcon = <img className="btn-icon left" src={props.leftIcon}/>
    }
    let rightIcon = <img/>;
    if( props.rightIcon){
        rightIcon = <img className="btn-icon right" src={props.rightIcon}/>
    }
    return(
        <Link className={"btn-container " + props.btnType} to={props.link}>
            {leftIcon}
            <p className="btn btn-text" > {props.text} </p>
            {rightIcon}
        </Link>
    );
}

export const ScrollButton = (props) => {
    return(
        <div className={"btn-container " + props.btnType} onClick={()=>{props.scrollRef
            .current.scrollIntoView({behavior: 'smooth', block: 'start' })}}>
            <p className="btn btn-text">{props.text}</p>
        </div>
    );

}


export default Button;