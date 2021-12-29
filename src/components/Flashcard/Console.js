import { useState, useEffect } from "react";

export default function Console(props) {
  const {
    setReply,
    hasReplied,
    setHasReplied,
    nextKey,
    setLoading,
    tick,
    setTick,
    displayInput,
  } = props;

  const [input, setInput] = useState([]);

  // handleKeyDown takes in keyboard input and stores it
  // however, when enter is hit, the input is submitted for feedback
  const handleKeyDown = (event) => {
    console.log(event);
    if (hasReplied) {
      setInput([]);
      setReply([]);
      setHasReplied(false);
      setLoading(true);
      setTick(!tick);
    } else {
      if (event.key === "Enter") {
        setReply(input);
        setHasReplied(true);
      } else {
        // here, we convert KeyboardDown.key values into the values
        // we commonly see in most keyboard shortcut reference sheets
        setInput(nextKey(input, event));
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
      {input.map(displayInput)}
    </p>
  );
}
