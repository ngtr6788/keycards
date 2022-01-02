import React, { isValidElement } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Flashcard from "../Flashcard";

const MockIdealFlashcard = () => {
  return (
    <Router>
      <Flashcard
        csv=""
        parseKeyBind={(key) => key}
        nextKey={(input, event) => {
          if (event.key === "Escape") {
            return [];
          } else {
            return [...input, event.key];
          }
        }}
        displayInput={(key) => {
          let prefix, suffix;
          if (key.length > 1) {
            prefix = " ";
            suffix = " + ";
          } else {
            prefix = "";
            suffix = "";
          }
          return prefix + key + suffix;
        }}
      />
    </Router>
  );
};

test("Reading control/shift keys", () => {
  render(<MockIdealFlashcard />);
  userEvent.keyboard("{Control>}{Shift>}A{/Shift}{/Control}");
  const console = screen.queryByTestId("console");
  expect(console).toHaveTextContent("Control + Shift + A");
});

test("Reading regular text", () => {
  render(<MockIdealFlashcard />);
  userEvent.keyboard("qwertyuiopASDFGHJKLzxcvBNM");
  const console = screen.queryByTestId("console");
  expect(console).toHaveTextContent("qwertyuiopASDFGHJKLzxcvBNM");
});

test("Reading Ctrl keys thrice", () => {
  render(<MockIdealFlashcard />);
  userEvent.keyboard("{Control>}cv{/Control}{Control>}zx{/Control}");
  const console = screen.queryByTestId("console");
  expect(console).toHaveTextContent("Control + cv Control + zx");
});
