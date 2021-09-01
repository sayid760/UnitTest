import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Search } from "../src/CallbackApp";

describe('Search', () => {
    test('calls the onChange callback handler', () => {
      const onChange = jest.fn();
   
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
   
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
   
      expect(onChange).toHaveBeenCalledTimes(1);
    });
});
