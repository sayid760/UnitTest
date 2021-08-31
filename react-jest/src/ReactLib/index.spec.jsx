import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";

import { App } from "./index";

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  const { getByText, getByLabelText } = getQueriesForElement(root);

  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});

