import React from "react";

import {
  cleanup,
  render,
  waitForElement,
  fireEvent
} from "react-testing-library";

import Counter from "./Counter";

afterEach(cleanup);

describe("Counter component", () => {
  it("loads with initial count state of 0", async () => {
    const { getByText } = render(<Counter />);
    await waitForElement(() => getByText(/You clicked 0 times/i));
  });

  it("calls setCount on button click", async () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText(/Click me/i));
    await waitForElement(() => getByText(/You clicked 1 times/i));
  });
});
