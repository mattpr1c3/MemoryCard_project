import React, { Component } from "react";

class Promptt extends Component {
  render() {
    const { item, handleAnswer, index } = this.props;
    return (
      <div>
        <p>Have you seen this letter?</p>
        <div className="d-flex justify-content-around align-items-center">
          <button onClick={(e) => handleAnswer(e, item, index, true)}>
            Yes
          </button>
          <button onClick={(e) => handleAnswer(e, item, index, false)}>
            No
          </button>
        </div>
      </div>
    );
  }
}

export default Promptt;
