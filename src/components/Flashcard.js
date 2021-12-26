import Question from "./Question";
import Console from "./Console";
import Feedback from "./Feedback";
import React, { useState } from "react";
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

  // we store our input and answer as an array of keys
  const [answer, setAnswer] = useState([]);
  // displayAns is an array of string used to display in Feedback
  // set by parseKeybind property
  const [displayAns, setDisplayAns] = useState([]);

  const [reply, setReply] = useState([]);
  const [hasReplied, setHasReplied] = useState(false);

  // clock + loading
  const [tick, setTick] = useState(false);
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      <Question
        setAnswer={setAnswer}
        setDisplayAns={setDisplayAns}
        csv={csv}
        parseKeybind={parseKeybind}
        isLoading={isLoading}
        setLoading={setLoading}
        tick={tick}
      />
      <Console
        setReply={setReply}
        hasReplied={hasReplied}
        setHasReplied={setHasReplied}
        nextKey={nextKey}
        setLoading={setLoading}
        tick={tick}
        setTick={setTick}
      />
      <Feedback
        answer={answer}
        reply={reply}
        hasReplied={hasReplied}
        displayAnswer={displayAns}
      />
      <Link to="/" className="backhome">
        Go back to home screen
      </Link>
    </div>
  );
}

export default Flashcard;
