import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron">
        <img className="img-responsive displaylogo" src={"https://cat-rails-production.s3.amazonaws.com/uploads/auction/item/image/45046/big_image_be44012026ead9c4b8b0d807d3315116_nfl-eagles-emblem-gallery-philadelphia-eagles-clipart-logo_1280-549.png"} alt="logo"/>
        <p className="gamedirections">Click on any player to score a point, click on that same player more than once and it's GAME OVER!</p>
    </div>
);

export default Jumbotron;


