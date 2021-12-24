import Feedback from "./Feedback";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Functional component of Flashcard
function Flashcard(props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [hasReplied, setHasReplied] = useState(false);
  const [refresh, setRefresh] = useState(false); // true and false doesn't mean anything. It's an internal clock
  const [isLoading, setLoading] = useState(true);

  // this useEffect changes the question every time refresh changes
  useEffect(() => {
    fetch(props.csv)
      .then((response) => {
        if (!response.ok) {
          throw Error("Cannot fetch data for the resource.");
        }
        return response.text();
      })
      .then((text) => {
        // TODO: Figure out a way to better parse the keyboard inputs
        let keybind_list = text.split("\r\n");
        const i = Math.floor(Math.random() * keybind_list.length);
        let key = keybind_list[i].split(",");
        setQuestion(key[1].trim());
        setAnswer(key[0].trim());
        setInput("");
        setReply("");
        setHasReplied(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [refresh, props.csv]);

  const handleKeyDown = (event) => {
    // TODO: Figure out a better way to deal with the keyboard inputs
    if (hasReplied) {
      setRefresh(!refresh);
      setLoading(true);
    } else {
      if (event.key === "Escape") {
        // clear input
        let newInput = "";
        if (input === "") {
          newInput = "Esc";
        }
        setInput(newInput);
      } else if (event.key === "Enter") {
        // submit input
        setReply(input);
        setHasReplied(true);
      } else if (event.key === "Control") {
        // control key
        setInput(input + "Ctrl + ");
      } else if (event.key.length === 1) {
        // single digit keys
        setInput(input + event.key);
      } else {
        // ignore all others
      }
    }
  };

  // this useEffects adds and removes EventListener every time
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <p className="question">{question}</p>}
      {/* Here, we insert the question here */}
      <p className="answer" onKeyDown={handleKeyDown} tabIndex="0">
        {input}
      </p>
      {/* Here, we insert our answer */}
      <Feedback answer={answer} reply={reply} hasReplied={hasReplied} />
      {/* <button onClick={props.goback}>Go back</button> */}
      <Link to="/">Go back to home screen</Link>
    </div>
  );
}

export default Flashcard;
