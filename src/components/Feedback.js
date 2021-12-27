function Feedback(props) {
  const { answer, reply, hasReplied, displayAnswer } = props;

  let is_correct = "";
  // neutral state. it has white background
  let style = {
    backgroundColor: "white",
    color: "black",
  };
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
      style = {
        backgroundColor: "#D5FFD5",
        color: "#002A00",
      };
      is_correct = "That's correct.";
    } else {
      // incorrect state. it has a red theme
      style = {
        backgroundColor: "#ffe7e7",
        color: "#7e0000",
      };
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
    <p className={"feedback"} style={style}>
      {is_correct}
    </p>
  );
}

export default Feedback;
