import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("toggles dark mode and light mode correctly", () => {
  const { container } = render(<App />);

  // Initially in light mode
  expect(container.querySelector(".App.light")).toBeInTheDocument();

  // Click to switch to dark mode
  fireEvent.click(screen.getByText("DARK"));
  expect(container.querySelector(".App.dark")).toBeInTheDocument();

  // Click to switch back to light mode
  fireEvent.click(screen.getByText("LIGHT"));
  expect(container.querySelector(".App.light")).toBeInTheDocument();
});
