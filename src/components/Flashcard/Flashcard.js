import Question from "./Question";
import Console from "./Console";
import Feedback from "./Feedback";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import flashcardStore from "./flashcard-redux/flashcardStore";
import "./Flashcard.css";

// Functional component of Flashcard

/** Functional React component of Flashcard
 *
 * You can think of this Flashcard component this way:
 * Each CSV file or whatever has perhaps its own keybinds,
 * Therefore, it has its own way of displaying keyboard input,
 * processing input and displaying the answer, so there are para-
 * meters for this below.
 *
 * [However, each line must have two things: keybind & what it does]
 *
 * Parameters:
 * - csv is the path to the csv file to fetch
 * - parseKeybind returns an array of two arrays.
 *    - The first array is an array for Feedback. Every element is
 * iterated with +'s
 *    - The second array is an array for answer, which represents
 * every key typed out there
 * - nextKey takes in an array of strings and a KeyboardEvent
 *    - The array of strings represent the previous keyboard inputs
 *    - The string represents the next key typed
 * - displayInput is a function that takes a string in input
 * (check Console.js) and returns another string to display on console
 *
 * @param {string} csv
 * @param {string => [string[], string[]]} parseKeybind
 * @param {string[], KeyboardEvent) => string[])} nextKey
 * @param {string => string} displayInput
 * @returns {React.createElement}
 *
 * By the way, this is the reason why in each Flashcard type in
 * the CardTypes folder, there are different parseKeybind, nextKey
 * and displayInput function for each flashcard.
 */

// TODO: REWORK THE FLASHCARD INTERFACE, like nextKey and displayInupt

function Flashcard({ csv, parseKeybind, nextKey, displayInput }) {
  return (
    <Provider store={flashcardStore}>
      <div data-testid="flashcard">
        {/* I decided to do some separation of responsibility as follows. */}
        <Question csv={csv} parseKeybind={parseKeybind} />
        <Console nextKey={nextKey} displayInput={displayInput} />
        <Feedback />
        <Link to="/" className="backhome btn btn-primary mt-2">
          Go back to home screen
        </Link>
      </div>
    </Provider>
  );
}

export default Flashcard;
