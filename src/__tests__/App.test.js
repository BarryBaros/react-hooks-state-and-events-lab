import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom/extend-expect"; // Ensure this is imported

test("toggles dark mode and light mode correctly", () => {
  render(<App />);

  // Initially in light mode
  const appElement = screen.getByRole("main"); // Using a role if possible or another query method
  expect(appElement).toHaveClass("App light");

  // Click to switch to dark mode
  fireEvent.click(screen.getByText("DARK"));
  expect(appElement).toHaveClass("App dark");

  // Click to switch back to light mode
  fireEvent.click(screen.getByText("LIGHT"));
  expect(appElement).toHaveClass("App light");
});
