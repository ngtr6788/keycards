function Feedback(props) {
  let is_correct;
  if (props.hasReplied) {
    let prefix = props.answer !== props.reply ? "in" : "";
    is_correct = `That's ${prefix}correct.`;
    if (prefix === "in") {
      is_correct += ` Correct answer: ${props.answer}`;
    }
  } else {
    is_correct = "";
  }
  return <p>{is_correct}</p>;
}

export default Feedback;
