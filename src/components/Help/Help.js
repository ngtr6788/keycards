import "./Help.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useState } from "react";

export default function Help({ undoHelp }) {
  const [step, setStep] = useState(1);

  return (
    <div className="overlay">
      <div className="help-screen">
        <p>Using the flashcard:</p>
        {step === 1 && (
          <StepOne incrementStep={() => setStep(2)} undoHelp={undoHelp} />
        )}
        {step === 2 && (
          <StepTwo decrementStep={() => setStep(1)} undoHelp={undoHelp} />
        )}
      </div>
    </div>
  );
}
