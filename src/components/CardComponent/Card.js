import React from "react";
import styls from './Card.module.css'


function Card(props) {
  return (
    <div className="card">
      <img id="catImg" src={props.imgSrc} alt={props.imaAlt} className={`card-img-top ${styls.aa}`}/>
      <div className="card-body">
        <h2 className="card-title">name: {props.name}</h2>
        <p className="card-text">age: {props.age}</p>
      </div>
    </div>
  );
}

export default Card;
