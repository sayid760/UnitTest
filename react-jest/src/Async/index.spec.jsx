import * as React from "react";
import { fireEvent, render, wait } from "@testing-library/react";

import { App } from "./index";

// Normally you can mock the entire module using jest.mock("./api"),
// but this doesn't work in codesandbox.
import { api } from "./api";
const mockCreateItem = (api.createItem = jest.fn());

describe.skip("Title", () => {
    test("allows users to add items to their list", async () => {
    const todoText = "RTL Presentation Slides";
    mockCreateItem.mockResolvedValueOnce({ id: 123, text: todoText });

    const { getByText, getByLabelText } = render(<App />);

    const input = getByLabelText("What needs to be done?");
    fireEvent.change(input, { target: { value: todoText } });
    fireEvent.click(getByText("Add #1"));

    expect(mockCreateItem).toHaveBeenCalledTimes(1);
    expect(mockCreateItem).toHaveBeenCalledWith(
        "/items",
        expect.objectContaining({ text: todoText })
    );

    await wait(() => getByText(todoText));
    });
})

