function Feedback(props) {
  let is_correct = "";
  // neutral state. it has white background
  let style = {
    backgroundColor: "white",
    color: "black",
  };
  if (props.hasReplied) {
    // is it correct?
    let correct = true;
    if (props.answer.length === props.reply.length) {
      for (let i = 0; i < props.answer.length; ++i) {
        if (props.answer[i] !== props.reply[i]) {
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
      for (let i = 0; i < props.answer.length; ++i) {
        if (i !== 0) {
          is_correct += " + ";
        }
        is_correct += props.answer[i];
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
