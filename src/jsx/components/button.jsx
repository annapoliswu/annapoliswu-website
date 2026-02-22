import React from 'react';
import { NavLink, Link} from 'react-router';
import'../../css/button.scss';


const Button = (props) => {
    let leftIcon = <img/>;
    if(props.leftIcon){
        leftIcon = <img className="btnIcon left" src={props.leftIcon}/>
    }
    let rightIcon = <img/>;
    if( props.rightIcon){
        rightIcon = <img className="btnIcon right" src={props.rightIcon}/>
    }
    return(
        <Link className={"btnContainer " + props.btnType} to={props.link}>
            {leftIcon}
            <p className="btnText" > {props.text} </p>
            {rightIcon}
        </Link>
    );
}

export const ScrollButton = (props) => {
    return(
        <div className={"btnContainer " + props.btnType} onClick={()=>{props.scrollRef
            .current.scrollIntoView({behavior: 'smooth', block: 'start' })}}>
            <p className="btnText">{props.text}</p>
        </div>
    );

}


export default Button;