/* Feedback's job is simple. Compare answer and reply and determine
   if it's correct or incorrect. Also, it also displays the correct answer
   if it's wrong, and it shouldn't display anything when you hasReplied not */

function Feedback(props) {
  const { answer, reply, hasReplied, displayAnswer } = props;
  let is_correct = "";
  let alert_type = "light";
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
      alert_type = "success";
    } else {
      // incorrect state. it has a red theme
      is_correct += "That's incorrect. Correct answer: ";
      alert_type = "danger";
      for (let i = 0; i < displayAnswer.length; ++i) {
        if (i !== 0) {
          is_correct += " + ";
        }
        is_correct += displayAnswer[i];
      }
    }
  }
  return (
    <p className={`feedback alert-${alert_type}`} data-testid="feedback">
      {is_correct}
    </p>
  );
}

export default Feedback;
