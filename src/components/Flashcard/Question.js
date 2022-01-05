import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from "./flashcard-redux/flashcardActions";

/* Question's job is to fetch and parse a question/answer pair from csv 
  display the question in Question tag (Flashcard doesn't need to know),
  but crucially, it must be able to modify flashcardStore's answer state. 
  Also, if it's loading, it prints loading..., hence isLoading, and if it 
  finishes fetching, it setsLoading to false. tick is needed as a sort of 
  clock. If tick is changed by Console, question reads csv */

export default function Question(props) {
  const { csv, parseKeybind } = props;

  const [question, setQuestion] = useState("");
  const tick = useSelector((state) => state.tick);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  // useEffect takes a function where every time the seed is generated
  // it fetches data from csv, it takes a keyboard shortcut
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
        let keybind_list = text.split("\n");

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
        dispatch(setAnswer(newAnswer, display));
      })
      .catch((err) => {
        console.log(err.message);
        setQuestion(err.message);
        dispatch(setAnswer([], []));
      });
    // eslint-disable-next-line
  }, [tick]);

  return (
    <p className="question" data-testid="question">
      {isLoading ? "Loading..." : question}
    </p>
  );
}
