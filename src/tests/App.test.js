import { render, screen } from '@testing-library/react';
import { FirstCard } from "../pages/community/components/foodpost"
import { SecondCard } from "../pages/community/components/foodpost"
import { ThirdCard } from "../pages/community/components/foodpost"
import Contact from "../pages/contact/section"
import Menu from "../pages/menu/section"
import  Nav  from "../components/Nav/navigation"

test('renders nav component', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact section component', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Lorem/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders first card component', () => {
  render(<FirstCard />);
  const linkElement = screen.getByText(/@buzzfeedfood/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders second card component', () => {
  render(<SecondCard />);
  const linkElement = screen.getByText(/Waffle sticks in Copenhagen!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders third card component', () => {
  render(<ThirdCard />);
  const linkElement = screen.getByText(/Getting into long weekend mode/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Menu section', () => {
  render(<Menu />);
  const linkElement = screen.getByText(/Sea bass ceviche with aji limo tiger’s milk, sweet potato purée/i);
  expect(linkElement).toBeInTheDocument();
});

