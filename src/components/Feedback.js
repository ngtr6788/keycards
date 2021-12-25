function Feedback(props) {
  let is_correct = "";
  // neutral state. it has white background
  let style = {
    backgroundColor: "white",
    color: "black",
  };
  if (props.hasReplied) {
    // is it correct?
    let prefix = props.answer !== props.reply ? "in" : "";
    is_correct = `That's ${prefix}correct.`;
    if (prefix === "in") {
      // incorrect state. it has a red theme
      style = {
        backgroundColor: "#ffe7e7",
        color: "#7e0000",
      };
      is_correct += ` Correct answer: ${props.answer}`;
    } else {
      // correct state. it has a green theme
      style = {
        backgroundColor: "#D5FFD5",
        color: "#002A00",
      };
    }
  }
  return (
    <p className={"feedback"} style={style}>
      {is_correct}
    </p>
  );
}

export default Feedback;
