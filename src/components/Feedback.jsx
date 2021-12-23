import React, { Component } from "react";

class Feedback extends Component {
  render() {
    let is_correct;
    if (this.props.appState.has_replied) {
      let prefix = this.props.appState.answer !== this.props.appState.reply ? "in" : "";
      is_correct = `That's ${prefix}correct.`;
      if (prefix === "in") {
          is_correct += ` Correct answer: ${this.props.appState.answer}`
      }
    } else {
      is_correct = "";
    }
    return <p>{is_correct}</p>;
  }
}

export default Feedback;
