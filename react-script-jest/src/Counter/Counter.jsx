import React, { useState } from 'react'

function Counter (){
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    return (
        <div>
            <h3 data-testid='header'>My Counter</h3>
            <h3 data-testid='counter'>{ counterValue }</h3>

            <h3 data-testid='add-btn'>+</h3>
            <input data-testid='input' value={inputValue} type="number" />
            <h3 data-testid='subtract-btn'>-</h3>

        </div>
    )
}

export default Counter