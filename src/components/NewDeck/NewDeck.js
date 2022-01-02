import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NewDeck.css";

// Note to self: This is very badly written.
// TODO: Give this code some better style.

export default function NewDeck() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clearCmd, setClearCmd] = useState([]);
  const [submitCmd, setSubmitCmd] = useState([]);
  const [clearClicked, setClearClicked] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  function handleInput(event, setVar) {
    setVar(event.target.value);
  }

  function handleKeyDown(event, clicked, cmd, setCmd) {
    if (clicked) {
      if (event.key === "Escape" && cmd.length !== 0) {
        setCmd([]);
      } else if (cmd.length < 4) {
        setCmd([...cmd, event.key]);
      }
    }
  }

  function handleClearCmd(event) {
    handleKeyDown(event, clearClicked, clearCmd, setClearCmd);
  }

  function handleSubmitCmd(event) {
    handleKeyDown(event, submitClicked, submitCmd, setSubmitCmd);
  }

  function handleSubmit(event) {
    if (name !== "") {
      console.log(name);
      console.log(description);
      console.log(clearCmd);
      console.log(submitCmd);
      // here, we do some back end stuff.
    } else {
      event.preventDefault();
    }
  }

  function clickedOn(event) {
    const clickElement = document.getElementById("clear-cmd");
    const submitElement = document.getElementById("submit-cmd");
    let targetElement = event.target;
    do {
      if (targetElement === clickElement) {
        setClearClicked(true);
        setSubmitClicked(false);
        return;
      }
      if (targetElement === submitElement) {
        setSubmitClicked(true);
        setClearClicked(false);
        return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);
    setClearClicked(false);
    setSubmitClicked(false);
  }

  useEffect(() => {
    document.addEventListener("click", clickedOn);
    document.addEventListener("keydown", handleClearCmd);
    document.addEventListener("keydown", handleSubmitCmd);
    return function cleanup() {
      document.removeEventListener("click", clickedOn);
      document.removeEventListener("keydown", handleClearCmd);
      document.removeEventListener("keydown", handleSubmitCmd);
    };
  });

  return (
    <form className="needs-validation" noValidate>
      <h2>New Deck</h2>
      <div className="container-md" style={{ maxWidth: 600 }}>
        {/* Deck Name field */}
        <div className="col mx-3">
          <div className="form-group row my-2">
            <input
              className="form-control"
              type="text"
              placeholder="Deck Name"
              value={name}
              onChange={(event) => {
                handleInput(event, setName);
              }}
              required
            />
            <div className="invalid-feedback">Name required</div>
          </div>

          {/* Deck Description Field */}
          <div className="form-group row my-2">
            <input
              className="form-control"
              type="text"
              placeholder="Description"
              rows="4"
              value={description}
              onChange={(event) => {
                handleInput(event, setDescription);
              }}
            />
          </div>
        </div>

        <div className="row">
          {/* Clear keyboard shortcut field */}
          <div className="form-group col m-2">
            <p className="mb-1">Clear keybind</p>
            <p
              className="mini-console"
              style={
                clearClicked
                  ? { border: "3px solid #ffc107" }
                  : { border: "none" }
              }
              tabIndex={0}
              onKeyDown={handleClearCmd}
              id="clear-cmd"
            >
              {clearCmd.map((k) => k)}
            </p>
          </div>

          {/* Submit keyboard shortcut field */}
          <div className="form-group col m-2">
            <p className="mb-1">Submit keybind</p>
            <p
              className="mini-console"
              style={
                submitClicked
                  ? { border: "3px solid #ffc107" }
                  : { border: "none" }
              }
              tabIndex={0}
              onKeyDown={handleSubmitCmd}
              id="submit-cmd"
            >
              {submitCmd.map((k) => k)}
            </p>
          </div>
        </div>

        <Link to="/" className="btn btn-danger m-3" onClick={() => {}}>
          Cancel
        </Link>
        <Link to="/" className="btn btn-success m-3" onClick={handleSubmit}>
          Done
        </Link>
      </div>
    </form>
  );
}
