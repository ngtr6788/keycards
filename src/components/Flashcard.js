import Question from "./Question";
import Console from "./Console";
import Feedback from "./Feedback";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Flashcard.css";

// Functional component of Flashcard

/** Functional React component of Flashcard
 *
 * You can think of this Flashcard component this way:
 * Each CSV file or whatever has perhaps its own keybinds,
 * Therefore, it has its own way of displaying keyboard input,
 * processing input and displaying the answer, so there are para-
 * meters for this below.
 *
 * [However, each line must have two things: keybind & what it does]
 *
 * Parameters:
 * - csv is the path to the csv file to fetch
 * - parseKeybind returns an array of two arrays.
 *  - The first array is an array for Feedback. Every element is
 * iterated with +'s
 *  - The second array is an array for answer, which represents
 * every key typed out there
 * - nextKey takes in an array of strings and a string
 *  - The array of strings represent the previous keyboard inputs
 *  - The string represents the next key typed
 * - displayInput is a function that takes a string in input
 * (check Console.js) and returns another string to display on console
 *
 * @param {string} csv
 * @param {string => [string[], string[]]} parseKeybind
 * @param {string[], string) => string[])} nextKey
 * @param {string => string} displayInput
 * @returns {React.createElement}
 */
function Flashcard({ csv, parseKeybind, nextKey, displayInput }) {
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
      {/* I decided to do some separation of responsibility as follows. */}

      {/* Question's job is to fetch and parse a question/answer pair from csv
      display the question in Question tag (Flashcard doesn't need to know),
      but crucially, it must be able to modify Flashcard's answer state. Also,
      if it's loading, it prints loading..., hence isLoading, and if it finishes
      fetching, it setsLoading to false */}
      <Question
        setAnswer={setAnswer}
        setDisplayAns={setDisplayAns}
        csv={csv}
        parseKeybind={parseKeybind}
        isLoading={isLoading}
        setLoading={setLoading}
        tick={tick}
      />

      {/* Console's responsibility is to read user keyboard input. How it
      actually takes in and displays input is up to nextKey and displayInput
      property, respectively. However, when it's said and done, it must be 
      able to change the reply, and when feedback is over, when pressing any key, 
      it must be able to go back, hence, being able to set the clock with tick */}
      <Console
        setReply={setReply}
        hasReplied={hasReplied}
        setHasReplied={setHasReplied}
        nextKey={nextKey}
        setLoading={setLoading}
        tick={tick}
        setTick={setTick}
        displayInput={displayInput}
      />

      {/* Feedback's job is simple. Compare answer and reply and determine
      if it's correct or incorrect. Also, it also displays the correct answer
      if it's wrong, and it shouldn't display anything when you hasReplied not */}
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
