import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReply, reset } from "./flashcard-redux/flashcardActions";

export default function Console(props) {
  const { nextKey, displayInput } = props;

  const [input, setInput] = useState([]);
  const hasReplied = useSelector((state) => state.hasReplied);
  const dispatch = useDispatch();

  // handleKeyDown takes in keyboard input and stores it
  // however, when enter is hit, the input is submitted for feedback
  const handleKeyDown = (event) => {
    if (hasReplied) {
      dispatch(reset());
      setInput([]);
    } else {
      if (event.key === "Enter") {
        dispatch(setReply(input));
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
    <p
      className="console"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      data-testid="console"
    >
      {input.map(displayInput)}
    </p>
  );
}
