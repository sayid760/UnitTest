import React from 'react'
import Counter from '../Counter'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('header renders with correct text', ()=>{
    const { getByTestId } = render(<Counter />)
    const headerEl = getByTestId('header')
    expect(headerEl.textContent).toBe('My Counter')
})

test('counter initally start with text of 0', ()=>{
    const { getByTestId } = render(<Counter />)
    const headerEl = getByTestId('counter')
    expect(headerEl.textContent).toBe('0')
})

test('input contains inital value of 1', ()=>{
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId('input')
    expect(inputEl.value).toBe('1')
})

test('add button renders with', ()=>{
    const { getByTestId } = render(<Counter />)
    const addBtn = getByTestId('add-btn')
    expect(addBtn.textContent).toBe('+')
})

test('subtract button renders with', ()=>{
    const { getByTestId } = render(<Counter />)
    const subtractBtn = getByTestId('subtract-btn')
    expect(subtractBtn.textContent).toBe('-')
})

test('change value of input works correctly', ()=>{
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId('input')
    fireEvent.change(inputEl, {
        target:{
            value: '5'
        }
    })
    expect(inputEl.value).toBe(5)
})