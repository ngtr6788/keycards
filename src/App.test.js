import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("Help button displays help screen", () => {
  render(<App />);
  const helpBtn = screen.getByRole("button", { name: "Help" });
  userEvent.click(helpBtn);
  expect(screen.queryByRole("help-screen")).toBeInTheDocument();
});

test("Click on each link displays the flashcard", () => {
  render(<App />);
  const allLinks = screen.queryAllByRole("link");
  allLinks.forEach((link) => {
    userEvent.click(link);
    expect(screen.queryByTestId("question")).toBeInTheDocument();
    expect(screen.queryByTestId("console")).toBeInTheDocument();
    expect(screen.queryByTestId("feedback")).toBeInTheDocument();
    expect(screen.queryByRole("link")).toBeInTheDocument();
  });
});

test("Back home link works", () => {
  render(<App />);
  // IDK why but I don't have to click on any other link before this one
  const homeBtn = screen.queryByRole("link", {
    name: /Go back to home screen/i,
  });
  userEvent.click(homeBtn);
  expect(screen.queryByRole("home")).toBeInTheDocument();
});
