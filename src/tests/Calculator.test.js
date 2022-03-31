import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('Calculator renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
