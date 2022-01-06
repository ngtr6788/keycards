import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NewDeck from "../NewDeck";
import { BrowserRouter } from "react-router-dom";

test("All fields are filled. It submits", () => {
  render(
    <BrowserRouter>
      <NewDeck />
    </BrowserRouter>
  );

  const deckNameField = screen.getByRole("textbox", {
    name: /deck name/i,
  });
  const descriptionField = screen.getByRole("textbox", {
    name: /description/i,
  });
  const clearKeyBindConsole = screen.getByRole("clear-keybind");
  const submitKeyBindConsole = screen.getByRole("submit-keybind");
  const doneButton = screen.getByRole("link", { name: /done/i });

  const name = "Custom Vim deck";
  const description = "I'll make a custom field.";

  userEvent.type(deckNameField, name);
  expect(deckNameField).toHaveValue(name);
  userEvent.type(descriptionField, description);
  expect(descriptionField).toHaveValue(description);
  userEvent.type(clearKeyBindConsole, "{esc}");
  expect(clearKeyBindConsole).toHaveTextContent("Escape");
  userEvent.type(submitKeyBindConsole, "{enter}");
  expect(submitKeyBindConsole).toHaveTextContent("Enter");
  userEvent.click(doneButton);
  // if it prints stuff, it's successful
});

test("Description is not filled. Still submits", () => {
  render(
    <BrowserRouter>
      <NewDeck />
    </BrowserRouter>
  );

  const deckNameField = screen.getByRole("textbox", {
    name: /deck name/i,
  });
  const descriptionField = screen.getByRole("textbox", {
    name: /description/i,
  });
  const clearKeyBindConsole = screen.getByRole("clear-keybind");
  const submitKeyBindConsole = screen.getByRole("submit-keybind");
  const doneButton = screen.getByRole("link", { name: /done/i });

  const name = "Custom Vim deck";

  userEvent.type(deckNameField, name);
  expect(deckNameField).toHaveValue(name);
  expect(descriptionField).toHaveValue("");
  userEvent.type(clearKeyBindConsole, "{esc}");
  expect(clearKeyBindConsole).toHaveTextContent("Escape");
  userEvent.type(submitKeyBindConsole, "{enter}");
  expect(submitKeyBindConsole).toHaveTextContent("Enter");
  userEvent.click(doneButton);
  // if it prints stuff, it's successful
});

test("Title is missing, so can't submit", () => {
  render(
    <BrowserRouter>
      <NewDeck />
    </BrowserRouter>
  );

  const deckNameField = screen.getByRole("textbox", {
    name: /deck name/i,
  });
  const descriptionField = screen.getByRole("textbox", {
    name: /description/i,
  });
  const clearKeyBindConsole = screen.getByRole("clear-keybind");
  const submitKeyBindConsole = screen.getByRole("submit-keybind");
  const doneButton = screen.getByRole("link", { name: /done/i });

  const description = "I'll make a custom field.";

  expect(deckNameField).toHaveValue("");
  userEvent.type(descriptionField, description);
  expect(descriptionField).toHaveValue(description);
  userEvent.type(clearKeyBindConsole, "{esc}");
  expect(clearKeyBindConsole).toHaveTextContent("Escape");
  userEvent.type(submitKeyBindConsole, "{enter}");
  expect(submitKeyBindConsole).toHaveTextContent("Enter");
  userEvent.click(doneButton);
  // if it doesn't print stuff, it's not successful
  const nameRequired = screen.getByText(/name required/i);
  expect(nameRequired).toBeInTheDocument();
});

test("Clear keybind missing, can't submit", () => {
  render(
    <BrowserRouter>
      <NewDeck />
    </BrowserRouter>
  );

  const deckNameField = screen.getByRole("textbox", {
    name: /deck name/i,
  });
  const descriptionField = screen.getByRole("textbox", {
    name: /description/i,
  });
  const clearKeyBindConsole = screen.getByRole("clear-keybind");
  const submitKeyBindConsole = screen.getByRole("submit-keybind");
  const doneButton = screen.getByRole("link", { name: /done/i });

  const name = "Custom Vim deck";
  const description = "I'll make a custom field.";

  userEvent.type(deckNameField, name);
  expect(deckNameField).toHaveValue(name);
  userEvent.type(descriptionField, description);
  expect(descriptionField).toHaveValue(description);
  expect(clearKeyBindConsole).toHaveTextContent("");
  userEvent.type(submitKeyBindConsole, "{enter}");
  expect(submitKeyBindConsole).toHaveTextContent("Enter");
  userEvent.click(doneButton);
  // if it doesn't print stuff, it's not successful
  const missingInput = screen.getByText(/missing input/i);
  expect(missingInput).toBeInTheDocument();
});

test("Submit keybind missing, can't submit", () => {
  render(
    <BrowserRouter>
      <NewDeck />
    </BrowserRouter>
  );

  const deckNameField = screen.getByRole("textbox", {
    name: /deck name/i,
  });
  const descriptionField = screen.getByRole("textbox", {
    name: /description/i,
  });
  const clearKeyBindConsole = screen.getByRole("clear-keybind");
  const submitKeyBindConsole = screen.getByRole("submit-keybind");
  const doneButton = screen.getByRole("link", { name: /done/i });

  const name = "Custom Vim deck";
  const description = "I'll make a custom field.";

  userEvent.type(deckNameField, name);
  expect(deckNameField).toHaveValue(name);
  userEvent.type(descriptionField, description);
  expect(descriptionField).toHaveValue(description);
  userEvent.type(clearKeyBindConsole, "{esc}");
  expect(clearKeyBindConsole).toHaveTextContent("Esc");
  expect(submitKeyBindConsole).toHaveTextContent("");
  userEvent.click(doneButton);
  // if it doesn't print stuff, it's not successful
  const missingInput = screen.getByText(/missing input/i);
  expect(missingInput).toBeInTheDocument();
});
