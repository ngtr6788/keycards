import step1 from "../../assets/step1.png";

export default function StepOne({ incrementStep, undoHelp }) {
  return (
    <div className="step" role="step1">
      <img src={step1} alt="Text has been entered."></img>
      <p>When a question appears, type in the answer.</p>
      <p>Press ESC to clear. Press Enter to submit.</p>
      <button onClick={undoHelp}>Exit</button>
      <button onClick={incrementStep}>Next</button>
    </div>
  );
}
