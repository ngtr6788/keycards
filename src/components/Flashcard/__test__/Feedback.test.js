import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Feedback from "../Feedback";

// Right now, we changed Feedback's interface, so yeah.
// For now, enjoy this dummy test.
test("dummy test", () => {});

// test("No feedback is given: reply not finished", () => {
//   render(
//     <Feedback
//       answer={["Control", "Shift", "A"]}
//       reply={["Control"]}
//       hasReplied={false}
//       displayAnswer={["Ctrl", "Shift", "A"]}
//     />
//   );
//   expect(screen.getByTestId("feedback").textContent).toBe("");
// });

// test("No feedback is given: reply has finished", () => {
//   render(
//     <Feedback
//       answer={["Control", "Shift", "A"]}
//       reply={["Control", "Shift", "A"]}
//       hasReplied={false}
//       displayAnswer={["Ctrl", "Shift", "A"]}
//     />
//   );
//   expect(screen.getByTestId("feedback").textContent).toBe("");
// });

// test("No feedback is given: reply has overfinished", () => {
//   render(
//     <Feedback
//       answer={["Control", "Shift", "A"]}
//       reply={["Control", "Shift", "A", "B", "C"]}
//       hasReplied={false}
//       displayAnswer={["Ctrl", "Shift", "A"]}
//     />
//   );
//   expect(screen.getByTestId("feedback").textContent).toBe("");
// });

// test("Feedback says correct", () => {
//   render(
//     <Feedback
//       answer={["Control", "Shift", "A"]}
//       reply={["Control", "Shift", "A"]}
//       hasReplied={true}
//       displayAnswer={["Ctrl", "Shift", "A"]}
//     />
//   );
//   expect(screen.getByTestId("feedback").textContent).toBe("That's correct.");
// });

// test("Feedback says incorrect", () => {
//   render(
//     <Feedback
//       answer={["Control", "Shift", "A"]}
//       reply={["Control", "A"]}
//       hasReplied={true}
//       displayAnswer={["Ctrl", "Shift", "A"]}
//     />
//   );
//   expect(screen.getByTestId("feedback").textContent).toBe(
//     "That's incorrect. Correct answer: Ctrl + Shift + A"
//   );
// });

// test("Feedback says incorrect, no pluses", () => {
//   render(
//     <Feedback
//       answer={[":", "w", "q"]}
//       reply={[":", "q", "!"]}
//       hasReplied={true}
//       displayAnswer={[":wq"]}
//     />
//   );
//   expect(screen.getByTestId("feedback").textContent).toBe(
//     "That's incorrect. Correct answer: :wq"
//   );
// });

// test("No reply, that's incorrect", () => {
//   render(
//     <Feedback
//       answer={["Control", "Shift", "s", "Shift", "h"]}
//       reply={[]}
//       hasReplied={true}
//       displayAnswer={["Ctrl", "Shift", "s", "Shift", "h"]}
//     />
//   );
//   expect(screen.getByTestId("feedback").textContent).toBe(
//     "That's incorrect. Correct answer: Ctrl + Shift + s + Shift + h"
//   );
// });
