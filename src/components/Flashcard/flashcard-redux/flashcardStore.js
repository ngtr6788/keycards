import { createStore } from "redux";
import reducer from "./flashcardReducer";

const flashcardStore = createStore(reducer);

export default flashcardStore;
