import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Sample as NetworkCallSample } from "./pages/search/index";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("App");

  expect(linkElement).toBeInTheDocument();
});


test('renders learn react button', () => {
  render(<NetworkCallSample />);

  const searchButton = screen.getByText('+');
  userEvent.click(searchButton);
  
  expect(searchButton).toBeInTheDocument();
});
