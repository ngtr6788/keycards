import step2 from "../../assets/step2.png";

export default function StepTwo({ decrementStep, undoHelp }) {
  return (
    <div className="step">
      <img src={step2} alt="Feedback has been given"></img>
      <p>When feedback is displayed, press any key to continue.</p>
      <p>A new question will be automatically generated.</p>
      <button onClick={decrementStep}>Previous</button>
      <button onClick={undoHelp}>Done</button>
    </div>
  );
}
