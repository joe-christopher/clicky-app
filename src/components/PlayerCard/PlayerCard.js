import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card">
    <div className="allImages col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
    key={props.id}
    onClick={() => props.handleClick(props.id, props.clicked)}>
      <img id={props.name} src={props.image} alt= {props.name}/>
    </div>
  </div>
);

export default PlayerCard;
