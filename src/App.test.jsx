import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest';

describe('My test suite', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});

test('le bouton doit incrémenter le compteur', () => {
  expect.assertions(3);  // Cette ligne doit être la première

  render(<App />)

  const button = screen.getByRole('button', { name: /count is/i })
  expect(button).toHaveTextContent('count is 0')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 1')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 2')
})
