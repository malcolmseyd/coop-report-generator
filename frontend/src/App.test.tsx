import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Co-Op Report Generator Link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Co-Op Report Generator/i);
  expect(linkElement).toBeInTheDocument();
});
