import * as React from "react";
import { render, screen} from "@testing-library/react";

import { App } from "../src/App";

test.skip('renders App component', () => {
  render(<App />); // 渲染组件

  screen.debug(); // 在命令行上运行测试后，应该会看到App组件的HTML输出（所以先渲染组件，再调试是否存在某些文件）
});

test.skip("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});


test("renders the correct content by screen", () => {
  render(<App />);

  // expect(screen.getByText(/TODOs~~~~/)).toBeNull(); 不适合用来判断内容是否为空
  expect(screen.queryByText(/TODOs~~~~/)).toBeNull();

  // 用于异步操作，等待有这个文本时
  // await screen.findByText(/Signed in as/);
  
});