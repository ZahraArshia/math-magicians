import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('NavBar renders correctly', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  screen.getByText('Math Magicians');
});
