import Flashcard from "../Flashcard/Flashcard";

// WindowsFlashcard is a "general" flashcard component, taking
// in any csv file whose keybinds can support Windows.

export default function WindowsFlashcard(props) {
  // we split each key by + or space, capitalize them, then return it
  const parseKeybind = (keybind) => {
    const keysArray = keybind.toUpperCase().trim().split(/\+| /);
    const copyArray = [...keysArray];
    return [copyArray, keysArray];
  };

  const nextKey = (input, event) => {
    let newKey = event.key.toUpperCase();
    switch (newKey) {
      case "ESCAPE":
        newKey = "ESC";
        if (input.length !== 0) {
          return [];
        }
        break;
      case "ARROWUP":
        newKey = "UP";
        break;
      case "ARROWDOWN":
        newKey = "DOWN";
        break;
      case "ARROWLEFT":
        newKey = "LEFT";
        break;
      case "ARROWRIGHT":
        newKey = "RIGHT";
        break;
      case "PAGEUP":
        newKey = "PGUP";
        break;
      case "PAGEDOWN":
        newKey = "PGDOWN";
        break;
      case "DELETE":
        newKey = "DEL";
        break;
      case "CONTROL":
        newKey = "CTRL";
        break;
      case " ":
        newKey = "[SPACE]";
        break;
      default:
        break;
    }
    return [...input, newKey];
  };

  const displayInput = (key) => " " + key;

  return (
    <Flashcard
      csv={props.csv}
      parseKeybind={parseKeybind}
      nextKey={nextKey}
      displayInput={displayInput}
    />
  );
}
