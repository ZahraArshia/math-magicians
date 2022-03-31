import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

it('Home renders correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
