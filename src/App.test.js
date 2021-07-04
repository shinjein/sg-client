import { render, screen } from '@testing-library/react';
import { FirstCard, SecondCard, ThirdCard } from "../src/components/foodpost"

test('renders first card', () => {
  render(<FirstCard />);
  const linkElement = screen.getByText(/first-card/i);
  expect(linkElement).toBeInTheDocument();
});
