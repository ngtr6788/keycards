import { SET_ANSWER, SET_REPLY, RESET } from "./flashcardConsts";

export const setAnswer = (answer, displayAnswer) => {
  return {
    type: SET_ANSWER,
    answer: answer,
    displayAnswer: displayAnswer,
    loading: false,
  };
};

export const setReply = (reply) => {
  return {
    type: SET_REPLY,
    reply: reply,
    hasReplied: true,
  };
};

export const reset = () => {
  return {
    type: RESET,
    resetedState: {
      answer: [],
      displayAnswer: [],
      reply: [],
      hasReplied: false,
      loading: true,
    },
  };
};
