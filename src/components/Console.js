import { useState, useEffect } from "react";

export default function Console(props) {
  const [input, setInput] = useState([]);

  // handleKeyDown takes in keyboard input and stores it
  // however, when enter is hit, the input is submitted for feedback
  const handleKeyDown = (event) => {
    if (props.hasReplied) {
      setInput([]);
      props.setReply([]);
      props.setHasReplied(false);
      props.setLoading(true);
      props.setTick(!props.tick);
    } else {
      if (event.key === "Enter") {
        props.setReply(input);
        props.setHasReplied(true);
      } else {
        // here, we convert KeyboardDown.key values into the values
        // we commonly see in most keyboard shortcut reference sheets
        setInput(props.nextKey(input, event.key));
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
    <p className="answer" onKeyDown={handleKeyDown} tabIndex="0">
      {input.map((x) => " " + x)}
    </p>
  );
}