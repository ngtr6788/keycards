import step2 from "../../assets/step2.png";

/**
 * This is our second step in our help screen. It must be able
 * to change back to first step or leave the screen.
 */
export default function StepTwo({ decrementStep, undoHelp }) {
  return (
    <div className="step" data-testid="step2">
      <img src={step2} alt="Feedback has been given"></img>
      <p className="my-2">
        When feedback is displayed, press any key to continue.
      </p>
      {/* <p>A new question will be automatically generated.</p> */}
      <div className="modal-footer">
        <button className="btn btn-primary" onClick={decrementStep}>
          Previous
        </button>
        <button className="btn btn-success" onClick={undoHelp}>
          Done
        </button>
      </div>
    </div>
  );
}
