import { render, screen } from '@testing-library/react';
import { FirstCard } from "../src/components/foodpost"
import Nav from "../src/components/Nav/navigation"

test('renders first card', () => {
  render(<FirstCard />);
  const linkElement = screen.getByText(/first-card/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders nav component', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

