import "./style.css"
import React from "react";


const Card =(props) => {
    return(
    <div className="card">
        <img src={props.Imgpath} className="card__logo"></img>
        <h3 className='card__title'>{props.Title}</h3>
        <div className="card__text">{props.Text}</div>
    </div>
    );
}

export default Card