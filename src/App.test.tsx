import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // my man actually added a test what a fucking tryhard
  expect(linkElement).toBeInTheDocument();
});
