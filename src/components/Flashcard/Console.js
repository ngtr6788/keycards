import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReply, reset } from "./flashcard-redux/flashcardActions";

/* Console's responsibility is to read user keyboard input. How it
   actually takes in and displays input is up to nextKey and displayInput
   property, respectively. However, when it's said and done, it must be 
   able to change the reply, and when feedback is over, when pressing any key, 
   it must be able to go back, hence, being able to set the clock with tick.
   
   Note that reply and tick are stored in flashcardStore and it can only
   work with the given actions from flashcardActions. */

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
