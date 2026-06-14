import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the Analytics component
jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => null,
}));

test('renders Java DSA Guide', () => {
  render(<App />);
  const titleElement = screen.getByText(/Java \+ DSA Complete Mastery Guide/i);
  expect(titleElement).toBeInTheDocument();
});
