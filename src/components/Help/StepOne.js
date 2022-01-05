import step1 from "../../assets/step1.png";

/**
 * This is our first step in our help screen. It must be able
 * to change to the second step or leave the screen.
 */
export default function StepOne({ incrementStep, undoHelp }) {
  return (
    <div className="step" data-testid="step1">
      <img src={step1} alt="Text has been entered."></img>
      <p className="my-2">When a question appears, type in the answer.</p>
      {/* <p>Press ESC to clear. Press Enter to submit.</p> */}
      <div className="modal-footer my-auto">
        <button className="btn btn-danger" onClick={undoHelp}>
          Exit
        </button>
        <button className="btn btn-primary" onClick={incrementStep}>
          Next
        </button>
      </div>
    </div>
  );
}
