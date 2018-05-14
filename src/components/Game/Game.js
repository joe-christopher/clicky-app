import React, { Component } from 'react';
import PlayerCard from "../PlayerCard";
import images from "../../images.json";
import "./Game.css";

class Game extends Component {
    state = {
        images,
        message: "Click a player to begin...",
        score: 0,
        highScore : 0
    };

handleClick =(id, clicked) => {

    const imageOrder = this.state.images;

    if (clicked) 
    {
        imageOrder.forEach((image, index) => {
            imageOrder[index].clicked = false;
        });
        return this.setState({
            image: imageOrder.sort(() => Math.random() - 0.5),
            message: "You clicked on the same player more then once, GAME OVER!",
            score: 0
        })
    }
    else
    {
        imageOrder.forEach((image, index) => {
            if (id === image.id) {
                imageOrder[index].clicked = true;
            }
        });

        const { highScore, score } = this.state;
        const updatedScore = score + 1;
        const currentHighScore = updatedScore > highScore ? updatedScore: highScore;

        return this.setState({
            image: imageOrder.sort(() => Math.random() - 0.5),
            message: "Correct!  Click a new player...",
            score: updatedScore,
            highScore: currentHighScore,
        })
    }
};

render() {
    return (
        <div className="allCards container-fluid">
        <div className="gameMsgs text-center">
            <p>{this.state.message}</p>
        </div>
        <div className="gameScores text-center">
            <p> Current Score: {this.state.score} </p>
            <p> High Score: {this.state.highScore} </p>
        </div>
        <div className="imgContainer">
            <div className="row">
            {this.state.images.map(image => (
                <PlayerCard
                    key = {image.id}
                    id = {image.id}
                    clicked={image.clicked}
					image={image.image}
					handleClick={this.handleClick}/>
            ))}
            </div>
        </div>
        </div>
    );
};
    
};
export default Game;
