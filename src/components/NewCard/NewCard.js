import MiniConsole from "../MiniConsole/MiniConsole";
import { useState } from "react";
import { Link } from "react-router-dom";

// NewCard screen. We add new cards.

function NewCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [validated, setValidated] = useState(false);

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    // if the question is not empty, we can submit our new card.
    // note that we allow answer to be empty.
    if (question.length !== 0) {
      console.log(question, answer);
      setQuestion("");
      setAnswer([]);
      setValidated(false);
      // we could do some backend stuff here
    } else {
      // This is so we can show some messages on the screen saying
      // you're missing something
      setValidated(true);
    }
  };

  return (
    <form className={validated ? "was-validated" : ""} noValidate>
      <div className="container">
        <h2>New Card</h2>

        {/* We type our answer in an input form */}
        <input
          className="form-control mx-auto m-2"
          placeholder="Question"
          style={{ width: 400 }}
          value={question}
          onChange={handleQuestion}
          required
        />
        <div className="invalid-feedback">A question is required.</div>

        {/* We type our answer in a console */}
        <p className="mb-1">Type in your answer below.</p>
        <MiniConsole
          id="correct-answer"
          width={400}
          height={75}
          externalValue={answer}
          setExternalValue={setAnswer}
        />
      </div>

      {/* Buttons */}
      <Link className="btn btn-warning m-2" to="/">
        Exit
      </Link>
      <button className="btn btn-primary m-2" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
}

export default NewCard;
