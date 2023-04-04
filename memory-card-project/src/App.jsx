import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      bestScore: 0,
    };
    this.handleScore = this.handleScore.bind(this);
    this.highScore = this.highScore.bind(this);
  }
  handleScore(increment) {
    if (increment) {
      this.setState({
        currentScore: this.state.currentScore + 1,
      });
      this.highScore(this.state.currentScore + 1)
    } else {
      this.setState({
        currentScore: 0,
      });
    }
  }
  highScore(currentScore) {
    let winMessage = document.getElementById("highScoreText")
    if (currentScore > this.state.bestScore) {
      this.setState({
        bestScore: currentScore
      })
    }
  }
  render() {
    let className = "center no-display"
    const { currentScore, bestScore } = this.state;
    if ((currentScore === bestScore) && (bestScore > 0)) {
      className = "center display"
    } else {
      className = "center no-display"
    }
    return (
      <div className="App">
        <Header currentScore={currentScore} bestScore={bestScore} />
        <Game currentScore={currentScore} handleScore={this.handleScore} />
        <div id="highScoreText" className={className}>
          <h1>
            <p>
              New High Score
            </p>
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
