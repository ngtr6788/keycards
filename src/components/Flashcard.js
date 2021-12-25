import Feedback from "./Feedback";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Functional component of Flashcard
function Flashcard(props) {
  // state variables. I tried to avoid this, yet I have a lot
  // of variables. Doesn't look good, codewise.
  const [question, setQuestion] = useState("");

  // we store our input and answer as an array of keys
  const [answer, setAnswer] = useState([]);
  const [input, setInput] = useState([]);
  const [reply, setReply] = useState([]);

  const [hasReplied, setHasReplied] = useState(false);
  const [tick, setTick] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // we split each key by + or space, capitalize them, then return it
  const parseKeybind = (keybind) => {
    // we split keys by +
    const keysArray = keybind.trim().split(/\+| /);
    const finalKeys = keysArray.map((key) => key.toUpperCase());
    return finalKeys;
  };

  // useEffect takes a function where every time the seed is generated
  // it fetches data from props.csv, it takes a keyboard shortcut
  // a random one, and sets the Q and A.
  useEffect(() => {
    fetch(props.csv)
      .then((response) => {
        if (!response.ok) {
          throw Error("Error: Cannot fetch data for the resource.");
        }
        return response.text();
      })
      .then((text) => {
        // TODO: Figure out a way to better parse the keyboard inputs
        if (text.length === 0) {
          throw Error("Error: No data fetched.");
        }

        // split many keyboard shortcuts by line break
        let keybind_list = text.split("\r\n");

        // choose random index for the keyboard shortcut
        const i = Math.floor(Math.random() * keybind_list.length);

        // we separate the keyboard shortcut with what it does
        let key = keybind_list[i].split(",");

        if (key.length !== 2) {
          throw Error("Error: No question/answer pair detected.");
        }
        if (typeof key[0] !== "string" || typeof key[1] !== "string") {
          throw Error("Error: Unable to read question/answer as string.");
        }

        const newQuestion = key[1].trim();
        const newAnswer = parseKeybind(key[0]);

        setQuestion(newQuestion);
        setAnswer(newAnswer);
        setInput([]);
        setReply([]);
        setHasReplied(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [tick, props.csv]);

  // handleKeyDown takes in keyboard input and stores it
  // however, when enter is hit, the input is submitted for feedback
  const handleKeyDown = (event) => {
    // TODO: Figure out a better way to deal with the keyboard inputs
    if (hasReplied) {
      setTick(!tick);
      setLoading(true);
    } else {
      let newKey = event.key.toUpperCase();
      if (newKey === "ENTER") {
        setReply(input);
        setHasReplied(true);
      } else {
        // here, we convert KeyboardDown.key values into the values
        // we commonly see in most keyboard shortcut reference sheets
        switch (newKey) {
          case "ESCAPE":
            newKey = "ESC";
            if (input.length !== 0) {
              setInput([]);
              return;
            }
            break;
          case "ARROWUP":
            newKey = "UP";
            break;
          case "ARROWDOWN":
            newKey = "DOWN";
            break;
          case "ARROWLEFT":
            newKey = "LEFT";
            break;
          case "ARROWRIGHT":
            newKey = "RIGHT";
            break;
          case "PAGEUP":
            newKey = "PGUP";
            break;
          case "PAGEDOWN":
            newKey = "PGDOWN";
            break;
          case "DELETE":
            newKey = "DEL";
            break;
          case "CONTROL":
            newKey = "CTRL";
            break;
          default:
            break;
        }
        setInput([...input, newKey]);
      }
    }
  };

  // this useEffects adds and removes EventListener every time
  // the return function is for cleanup
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <p className="question">{isLoading ? "Loading..." : question}</p>
      {/* Here, we insert the question here */}
      <p className="answer" onKeyDown={handleKeyDown} tabIndex="0">
        {input.map((x) => " " + x)}
      </p>
      {/* Here, we insert our answer */}
      <Feedback answer={answer} reply={reply} hasReplied={hasReplied} />
      {/* <button onClick={props.goback}>Go back</button> */}
      <Link to="/" className="backhome">
        Go back to home screen
      </Link>
    </div>
  );
}

export default Flashcard;
