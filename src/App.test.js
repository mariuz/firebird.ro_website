import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Firebird home page with navigation', () => {
  render(<App />);
  const homeLinks = screen.getAllByRole('link', { name: /Acasă/i });
  expect(homeLinks.length).toBeGreaterThan(0);
});

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toMatch(/Firebird/i);
});
