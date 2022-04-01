import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('NavBar renders accurately', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  screen.getByText('Math Magicians');
});
