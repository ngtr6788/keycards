import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import NewCard from "../NewCard";

test("Question and Answer filled in, submits", () => {
  render(
    <BrowserRouter>
      <NewCard />
    </BrowserRouter>
  );
  const questionForm = screen.getByRole("textbox", {
    name: /question/i,
  });
  const correctConsole = screen.getByRole("correct-answer");
  const addButton = screen.getByRole("button", { name: /add/i });

  const question = "go up one line";
  const answer = "h";

  userEvent.type(questionForm, question);
  userEvent.type(correctConsole, answer);

  expect(questionForm).toHaveValue(question);
  expect(correctConsole).toHaveTextContent(answer);

  userEvent.click(addButton);
  // if it console logs it works
});

test("Question filled in, Answer left blank, submits", () => {
  render(
    <BrowserRouter>
      <NewCard />
    </BrowserRouter>
  );
  const questionForm = screen.getByRole("textbox", {
    name: /question/i,
  });
  const correctConsole = screen.getByRole("correct-answer");
  const addButton = screen.getByRole("button", { name: /add/i });

  const question = "go up one line";

  userEvent.type(questionForm, question);

  expect(questionForm).toHaveValue(question);
  expect(correctConsole).toHaveTextContent("");

  userEvent.click(addButton);
  // if it console logs it works
});

test("Question left blank, doesn't submit", () => {
  render(
    <BrowserRouter>
      <NewCard />
    </BrowserRouter>
  );
  const questionForm = screen.getByRole("textbox", {
    name: /question/i,
  });
  const correctConsole = screen.getByRole("correct-answer");
  const addButton = screen.getByRole("button", { name: /add/i });

  const answer = "h";

  userEvent.type(correctConsole, answer);
  userEvent.click(addButton);

  expect(questionForm).toHaveValue("");
  expect(correctConsole).toHaveTextContent(answer);
  // if it doesn't console log, it doesn't work
  const questionRequired = screen.getByText(/a question is required/i);
  expect(questionRequired).toBeInTheDocument();
});
