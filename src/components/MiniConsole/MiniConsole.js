import { useEffect, useState } from "react";
import "./MiniConsole.css";

// Our MiniConsole reads in user's keyboard input and
// has the ability to change an externalValue and
// display it inside the console, from the keyboard input

function MiniConsole(props) {
  const { id, width, height, externalValue, setExternalValue, validated } =
    props;

  const [consoleClicked, setConsoleClicked] = useState(false);

  // we can only type on the console if console is clicked on
  function clickedOn(event) {
    const clickElement = document.getElementById(id);
    let targetElement = event.target;
    do {
      if (targetElement === clickElement) {
        setConsoleClicked(true);
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);
    setConsoleClicked(false);
  }

  function handleKeyDown(event) {
    let result = [];
    // also, we can only type on the console if it's clicked on
    if (consoleClicked) {
      // we clear console with ESC button, unless it's empty,
      // in which case, we display the word escape
      if (event.key === "Escape" && externalValue.length !== 0) {
        result = [];
      } else {
        result = [...externalValue, event.key];
      }
      setExternalValue(result);
    }
  }

  // This useEffect is similar to componentDidMount and componentWillUnmount
  useEffect(() => {
    document.addEventListener("click", clickedOn);
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("click", clickedOn);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <p
        className="mini-console"
        style={{
          width: width,
          height: height,
          border: consoleClicked ? "3px solid #ffc107" : "none",
        }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        id={id}
      >
        {props.externalValue.map((k) => {
          if (k.length > 1) {
            return " " + k + " ";
          } else {
            return k;
          }
        })}
      </p>
      {validated && externalValue.length === 0 && (
        <p className="text-danger">Missing input</p>
      )}
    </div>
  );
}

export default MiniConsole;
