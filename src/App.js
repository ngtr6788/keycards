import React, { Component } from "react";
import Question from "./components/Question";
import Console from "./components/Console";
import Feedback from "./components/Feedback";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      input: "",
      reply: "",
      has_replied: false,
    };
    this.createQuestion = this.createQuestion.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  createQuestion() {
    // Solution taken from https://stackoverflow.com/questions/50007055/fetch-request-to-local-file-not-working
    // and https://www.youtube.com/watch?v=RfMkdvN-23o
    fetch("vim.csv")
      .then((response) => response.text())
      .then((text) => {
        let keybind_list = text.split("\r\n");
        const i = Math.floor(Math.random() * keybind_list.length);
        let key = keybind_list[i].split(" , ");
        this.setState({
          question: key[1].trim(),
          answer: key[0].trim(),
          input: "",
          reply: "",
          has_replied: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    this.createQuestion();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (this.state.has_replied) {
      this.createQuestion();
    } else {
      if (event.key === "Escape") {
        // clear input
        let newInput = "";
        if (this.state.input === "") {
          newInput = "Esc";
        }
        this.setState({
          input: newInput,
        });
      } else if (event.key === "Enter") {
        // submit input
        this.setState({
          reply: this.state.input,
          has_replied: true,
        });
      } else if (event.key === "Control") {
        // control key
        this.setState({
          input: this.state.input + "Ctrl + ",
        });
      } else if (event.key.length === 1) {
        // single digit keys
        this.setState({
          input: this.state.input + event.key,
        });
      } else {
        // ignore all others
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Question question={this.state.question} />
        <Console onKeyDown={this.handleKeyDown} input={this.state.input} />
        <Feedback appState={this.state} />
      </div>
    );
  }
}

export default App;
