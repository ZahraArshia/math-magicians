import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';

it('Quote renders correctly', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});

it('Quote user interaction', () => {
  render(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  );
  const Element = screen.getByText('- William Paul Thurston');
  expect(Element).toBeInTheDocument();
});
