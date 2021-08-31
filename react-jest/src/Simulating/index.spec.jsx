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



// 提供了不同的函数去定位元素。定位后的元素可用于『断言』或者是『用户交互
// import { render, screen } from '@testing-library/react'
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });