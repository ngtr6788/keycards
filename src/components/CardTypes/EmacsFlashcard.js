// Source of basic Emacs commands: https://www.cs.colostate.edu/helpdocs/emacs-bindings
// Emacs 2: https://people.ast.cam.ac.uk/~vasily/idl/emacs_commands_list.html

// Disclaimer: I do not know Emacs. I'm only building this for fun and practicing
// my React front-end skills. If there is any discrepancy, please let me know.

import Flashcard from "../Flashcard/Flashcard";

export default function EmacsFlashcard({ csv }) {
  const parseKeybind = (key) => {
    const answerArray = key.split(/-| /);
    return [[key], answerArray];
  };

  const nextKey = (input, keyEvent) => {
    const lowercaseKey = keyEvent.key.toLowerCase();
    let nextInput = "";
    if (lowercaseKey === "delete") {
      return [];
    }

    if (lowercaseKey === "control") {
      nextInput = "C";
    } else if (lowercaseKey === "alt" || lowercaseKey === "meta") {
      nextInput = "M";
    } else if (lowercaseKey === "shift") {
      nextInput = "S";
    } else if (lowercaseKey === "escape") {
      nextInput = "ESC";
    } else if (keyEvent.key.length !== 1) {
      return [...input];
    } else {
      nextInput = lowercaseKey;
    }
    return [...input, nextInput];
  };

  const displayInput = (key) => {
    if (["M", "C", "S"].includes(key)) {
      return key + "-";
    } else {
      return key + " ";
    }
  };

  return (
    <Flashcard
      csv={csv}
      parseKeybind={parseKeybind}
      nextKey={nextKey}
      displayInput={displayInput}
    />
  );
}
