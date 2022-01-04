import { SET_ANSWER, SET_REPLY, RESET } from "./flashcardConsts";

const state = {
  answer: [],
  displayAnswer: [],
  reply: [],
  hasReplied: false,
  loading: true,
  tick: false,
};

const reducer = (prevState = state, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return {
        ...prevState,
        answer: action.answer,
        displayAnswer: action.displayAnswer,
        loading: action.loading,
      };
    case SET_REPLY:
      return {
        ...prevState,
        reply: action.reply,
        hasReplied: action.hasReplied,
      };
    case RESET:
      return {
        ...action.resetedState,
        tick: !prevState.tick,
      };
    default:
      return prevState;
  }
};

export default reducer;
