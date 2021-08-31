import * as React from "react";
import { fireEvent, render } from "@testing-library/react";

import { App } from "./index";

test.skip("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});

test.skip("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  fireEvent.change(input, { target: { value: "RTL Presentation Slides" } });
  fireEvent.click(getByText("Add #1"));

  getByText("RTL Presentation Slides");
});
