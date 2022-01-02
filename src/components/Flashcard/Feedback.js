import { useSelector } from "react-redux";

function Feedback(props) {
  const { answer, reply, hasReplied, displayAnswer } = useSelector((state) => {
    return {
      answer: state.answer,
      reply: state.reply,
      hasReplied: state.hasReplied,
      displayAnswer: state.displayAnswer,
    };
  });

  let is_correct = "";
  // neutral state. it has white background
  if (hasReplied) {
    // is it correct?
    let correct = true;
    if (answer.length === reply.length) {
      for (let i = 0; i < answer.length; ++i) {
        if (answer[i] !== reply[i]) {
          correct = false;
        }
      }
    } else {
      correct = false;
    }
    if (correct) {
      // correct state. it has a green theme
      is_correct = "That's correct.";
    } else {
      // incorrect state. it has a red theme
      is_correct += "That's incorrect. Correct answer: ";
      for (let i = 0; i < displayAnswer.length; ++i) {
        if (i !== 0) {
          is_correct += " + ";
        }
        is_correct += displayAnswer[i];
      }
    }
  }
  return (
    <p className={"feedback"} data-testid="feedback">
      {is_correct}
    </p>
  );
}

export default Feedback;
