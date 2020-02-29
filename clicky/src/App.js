import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matches.json";
import "./App.css"

var correctGuesses = 0;
var highScore = 0;
var clickMessage = "Click an image to score points. But be careful! If you click the same image twice you lose!"

class App extends Component {
  state = {
    matches,
    correctGuesses,
    highScore,
    clickMessage,
  };

  setClicked = id => {

    const matches = this.state.matches;

    const clickedMatches = matches.filter(match => match.id === id);

    if (clickedMatches[0].clicked) {

      correctGuesses = 0;
      clickMessage = "Ahh! You already clicked this one..sad face. Keep trying for a better score.";

      for (var i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ matches });

    } else if (correctGuesses < 11) {
      clickedMatches[0].clicked = true;

      correctGuesses++;

      clickMessage = "So far so good! Keep clicking!";

      if (correctGuesses > highScore) {
        highScore = correctGuesses;
        this.setState({ highScore });
      }

      matches.sort(function (a, b) { return .5 - Math.random() });

      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });

    } else {
      clickedMatches[0].clicked = true;

      correctGuesses = 0;

      clickMessage = "Holy moly! You're a memory machine. Want to try again?"
      highScore = 12;
      this.setState({ highScore });

      for (var i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }
    }
  }

render() {
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      <div className="gameStats">
        <h4> {this.state.clickMessage}</h4>
        <h4> <strong>Correct Guesses:</strong> {this.state.correctGuesses} || High Score: {this.state.highScore}</h4>
        <br />
      </div>
      <br />

      {this.state.matches.map(match => (
        <MatchCard
          setClicked={this.setClicked}
          id={match.id}
          key={match.id}
          name={match.name}
          image={match.image}
        />
      ))}
    </Wrapper>
  );
}
}


export default App;
