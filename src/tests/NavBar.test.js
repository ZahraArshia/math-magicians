import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('NavBar renders accurately', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Math Magicians');
  expect(Element).toBeInTheDocument();
});
