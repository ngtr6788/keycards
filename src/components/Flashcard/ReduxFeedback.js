import { useSelector } from "react-redux";
import Feedback from "./Feedback";

export default function ReduxFeedback() {
  const answerInfo = useSelector((state) => {
    return {
      answer: state.answer,
      reply: state.reply,
      hasReplied: state.hasReplied,
      displayAnswer: state.displayAnswer,
    };
  });

  return <Feedback {...answerInfo} />;
}
