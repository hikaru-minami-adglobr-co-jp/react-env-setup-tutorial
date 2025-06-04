/// <reference types="@testing-library/jest-dom/vitest" />
import TextInput from "./TextInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("TextInput Component test", async () => {
  render(<TextInput />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

test("TextInput Event Text", async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const inputElement = screen.getByRole("textbox");
  await user.type(inputElement, "Hello World");
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
