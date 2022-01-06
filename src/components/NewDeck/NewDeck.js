import { useState } from "react";
import { Link } from "react-router-dom";
import MiniConsole from "../MiniConsole/MiniConsole";

// NewDeck screen. Here, we add new decks.

// Note to self: This is very badly written.
// TODO: Give this code some better style. (Perhaps a little later,
// let's just make the tests work first, practicality first, beauty later)

export default function NewDeck() {
  const [deckInfo, setDeckInfo] = useState({
    deckname: "",
    description: "",
  });

  const [clearKeyBind, setClearKeyBind] = useState([]);
  const [submitKeyBind, setSubmitKeyBind] = useState([]);
  const [validated, setValidated] = useState(false);

  function handleFormField(event) {
    setDeckInfo({ ...deckInfo, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    // we only allow submission if the deck name is not empty and
    // the keybinds are typed.
    if (
      deckInfo.deckname !== "" &&
      clearKeyBind.length !== 0 &&
      submitKeyBind.length !== 0
    ) {
      console.log(deckInfo, clearKeyBind, submitKeyBind);
      // here, we do some back end stuff.
    } else {
      event.preventDefault();
    }
    setValidated(true);
  }

  return (
    <form className={validated ? "was-validated" : ""} noValidate>
      <h2>New Deck</h2>
      <div className="container-md" style={{ maxWidth: 600 }}>
        <div className="col mx-3">
          {/* Deck Name field */}
          <div className="form-group row my-2">
            <label htmlFor="deckname">Deck Name</label>
            <input
              name="deckname"
              className="form-control"
              type="text"
              id="deckname"
              placeholder="Deck Name"
              value={deckInfo.name}
              onChange={handleFormField}
              required
            />
            <div className="invalid-feedback">Name required</div>
          </div>

          {/* Deck Description Field */}
          <div className="form-group row my-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              type="text"
              placeholder="Description"
              rows="4"
              value={deckInfo.description}
              onChange={handleFormField}
            />
          </div>
        </div>

        <div className="row">
          {/* Clear keyboard shortcut field */}
          <div className="form-group col m-2">
            <p className="mb-1">Clear keybind</p>
            <MiniConsole
              id="clear-keybind"
              width={200}
              height={50}
              externalValue={clearKeyBind}
              setExternalValue={setClearKeyBind}
              validated={validated}
            />
          </div>

          {/* Submit keyboard shortcut field */}
          <div className="form-group col m-2">
            <p className="mb-1">Submit keybind</p>
            <MiniConsole
              id="submit-keybind"
              width={200}
              height={50}
              externalValue={submitKeyBind}
              setExternalValue={setSubmitKeyBind}
              validated={validated}
            />
          </div>
        </div>

        {/* Buttons */}
        <Link to="/" className="btn btn-danger m-3" onClick={() => {}}>
          Cancel
        </Link>
        <Link
          to="/new-card"
          className="btn btn-success m-3"
          onClick={handleSubmit}
        >
          Done
        </Link>
      </div>
    </form>
  );
}
