import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the test app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Flourish/i);
  expect(linkElement).toBeInTheDocument();
});
