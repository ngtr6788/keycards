import Feedback from "./Feedback";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Functional component of Flashcard

/** Functional React component of Flashcard
 *
 * csv is the path to the csv file to fetch
 *
 * parseKeybind returns an array of two arrays.
 *  - The first array is an array for Feedback. Every element is
 * iterated with +'s
 *  - The second array is an array for answer, which represents
 * every key typed out there
 *
 * nextKey takes in an array of strings and a string
 *  - The array of strings represent the previous keyboard inputs
 *  - The string represents the next key typed
 *
 * @param {string} csv
 * @param parseKeybind - string => [Array(string), Array(string)]
 * @param nextKey - (Array(string), string) => Array(string)
 * @returns an React.create??
 */
function Flashcard({ csv, parseKeybind, nextKey }) {
  // state variables. I tried to avoid this, yet I have a lot
  // of variables. Doesn't look good, codewise.
  const [question, setQuestion] = useState("");

  // displayAns is an array of string used to display in Feedback
  // set by parseKeybind property
  const [displayAns, setDisplayAns] = useState([]);

  // we store our input and answer as an array of keys
  const [answer, setAnswer] = useState([]);
  const [input, setInput] = useState([]);
  const [reply, setReply] = useState([]);

  const [hasReplied, setHasReplied] = useState(false);
  const [tick, setTick] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // useEffect takes a function where every time the seed is generated
  // it fetches data from props.csv, it takes a keyboard shortcut
  // a random one, and sets the Q and A.
  useEffect(() => {
    fetch(csv)
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
        const [display, newAnswer] = parseKeybind(key[0].trim());

        setQuestion(newQuestion);
        setDisplayAns(display);
        setAnswer(newAnswer);
        setInput([]);
        setReply([]);
        setHasReplied(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setQuestion(err.message);
        setLoading(false);
      });
  }, [tick, csv, parseKeybind]);

  // handleKeyDown takes in keyboard input and stores it
  // however, when enter is hit, the input is submitted for feedback
  const handleKeyDown = (event) => {
    // TODO: Figure out a better way to deal with the keyboard inputs
    if (hasReplied) {
      setTick(!tick);
      setLoading(true);
    } else {
      if (event.key === "Enter") {
        setReply(input);
        setHasReplied(true);
      } else {
        // here, we convert KeyboardDown.key values into the values
        // we commonly see in most keyboard shortcut reference sheets
        setInput(nextKey(input, event.key));
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
      <Feedback
        answer={answer}
        reply={reply}
        hasReplied={hasReplied}
        displayAnswer={displayAns}
      />
      {/* <button onClick={props.goback}>Go back</button> */}
      <Link to="/" className="backhome">
        Go back to home screen
      </Link>
    </div>
  );
}

export default Flashcard;
