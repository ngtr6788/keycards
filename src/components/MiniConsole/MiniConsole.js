import { useEffect, useState } from "react";
import "./MiniConsole.css";

function MiniConsole(props) {
  const { id, width, height, externalValue, setExternalValue, validated } =
    props;

  const [consoleClicked, setConsoleClicked] = useState(false);

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
    if (consoleClicked) {
      if (event.key === "Escape" && externalValue.length !== 0) {
        result = [];
      } else {
        result = [...externalValue, event.key];
      }
      setExternalValue(result);
    }
  }

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
