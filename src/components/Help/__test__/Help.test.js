import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Help from "../Help";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";

test("Help exit button leaves help screen", () => {
  render(<StepOne />);
  const exitBtn = screen.getByRole("button", { name: "Exit" });
  userEvent.click(exitBtn);
  const helpScreen = screen.queryByRole("help-screen");
  expect(helpScreen).toBeNull();
});

test("Help done button leaves help screen", () => {
  render(<StepTwo />);
  const exitBtn = screen.getByRole("button", { name: "Done" });
  userEvent.click(exitBtn);
  const helpScreen = screen.queryByRole("help-screen");
  expect(helpScreen).toBeNull();
});

test("Help can toggle between next and previous", () => {
  render(<Help />);

  const nextBtn = screen.getByRole("button", { name: "Next" });
  userEvent.click(nextBtn);
  const nextScreenText = screen.queryByRole("step2");
  expect(nextScreenText).toBeInTheDocument();

  const prevBtn = screen.getByRole("button", { name: "Previous" });
  userEvent.click(prevBtn);
  const prevScreenText = screen.queryByRole("step1");
  expect(prevScreenText).toBeInTheDocument();
});
