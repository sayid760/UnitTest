import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./index";

test.skip("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("h1").textContent).toBe("TODOs");
  expect(root.querySelector("label").textContent).toBe(
    "What needs to be done?"
  );
  expect(root.querySelector("button").textContent).toBe("Add #1");
})
