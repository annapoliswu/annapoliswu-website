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
        <div className={"btn-container " + props.btnType}>
            {leftIcon}
            <Link className="btn btn-text" to={props.link}> {props.text} </Link>
            {rightIcon}
        </div>
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