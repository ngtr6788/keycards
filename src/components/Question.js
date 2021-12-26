import React, { useState, useEffect } from "react";

export default function Question(props) {
  const [question, setQuestion] = useState("");

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
        console.log(keybind_list);

        console.log(keybind_list.forEach((line) => console.log(line)));

        // choose random index for the keyboard shortcut
        const i = Math.floor(Math.random() * keybind_list.length);
        console.log(i);

        // we separate the keyboard shortcut with what it does
        let key = keybind_list[i].split(",");
        console.log(key);

        if (key.length !== 2) {
          throw Error("Error: No question/answer pair detected.");
        }
        if (typeof key[0] !== "string" || typeof key[1] !== "string") {
          throw Error("Error: Unable to read question/answer as string.");
        }

        const newQuestion = key[1].trim();
        const [display, newAnswer] = props.parseKeybind(key[0].trim());

        setQuestion(newQuestion);
        props.setDisplayAns(display);
        props.setAnswer(newAnswer);
        props.setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setQuestion(err.message);
        props.setLoading(false);
      });
    // eslint-disable-next-line
  }, [props.tick]);

  return (
    <p className="question">{props.isLoading ? "Loading..." : question}</p>
  );
}
