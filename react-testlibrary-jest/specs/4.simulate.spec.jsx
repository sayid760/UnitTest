import * as React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { App } from "../src/App";

test.skip("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  // expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  fireEvent.change(input, { target: { value: "RTL Presentation Slides" } });   // 模拟输入内容
  fireEvent.click(getByText("Add #1"));   // 模拟点击

  getByText("RTL Presentation Slides");  // 判断是否获取内容
  // expect(screen.getByText(/RTL Presentation Slides/)).toBeInTheDocument();
  // 如果是异步 expect(await screen.getByText(/RTL Presentation Slides/)).toBeInTheDocument();
});


test("test userEvent api", () => {
  const { getByText, getByLabelText, getByTestId } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  const addBtn = getByTestId("add-btn");

  userEvent.type(input, "RTL Presentation Slides"); // 输出内容
  userEvent.click(addBtn); // 点击

  getByText("RTL Presentation Slides"); 
});



// 提供了不同的函数去定位元素。定位后的元素可用于『断言』或者是『用户交互
// import { render, screen } from '@testing-library/react'
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });