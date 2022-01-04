import "./Help.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useState } from "react";

export default function Help({ undoHelp }) {
  const [step, setStep] = useState(1);

  return (
    <div className="overlay">
      <div
        className="modal-dialog modal-dialog-centered"
        data-testid="help-screen"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="my-auto">Using the flashcard:</h5>
            <button type="button" className="btn-close" onClick={undoHelp} />
          </div>
          <div className="modal-body">
            {step === 1 && (
              <StepOne incrementStep={() => setStep(2)} undoHelp={undoHelp} />
            )}
            {step === 2 && (
              <StepTwo decrementStep={() => setStep(1)} undoHelp={undoHelp} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
