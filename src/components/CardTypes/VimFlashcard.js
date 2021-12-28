import Flashcard from "../Flashcard/Flashcard";

export default function VimFlashcard() {
  // we split each key by + or space, capitalize them, then return it
  const parseKeybind = (keybind) => {
    let keysArray = keybind.trim().split("+");
    for (let i = 0; i < keysArray.length; ++i) {
      keysArray[i] = keysArray[i].trim();
    }
    const splitArray = [...keysArray];

    let strArray = [];
    if (keysArray.at(-1) !== "Esc") {
      strArray = Array.from(keysArray[keysArray.length - 1]);
      keysArray.pop();
    }
    const finalArray = keysArray.concat(strArray);
    return [splitArray, finalArray];
  };

  const nextKey = (input, newKey) => {
    if (newKey === "Escape") {
      newKey = "Esc";
      if (input.length !== 0) {
        return [];
      }
    } else if (newKey === "Control") {
      newKey = "Ctrl";
    } else if (newKey.length !== 1) {
      return input;
    }
    return [...input, newKey];
  };

  const displayInput = (key) => {
    if (key === "Ctrl") {
      return "Ctrl + ";
    } else {
      return key;
    }
  };

  return (
    <Flashcard
      csv={"vim.csv"}
      parseKeybind={parseKeybind}
      nextKey={nextKey}
      displayInput={displayInput}
    />
  );
}