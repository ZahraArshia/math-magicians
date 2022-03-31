import operate from '../logic/operate';

describe('operate function check', () => {
  test('sum', () => {
    const sum = operate(10, 5, '+');
    expect(sum).toBe('15');
  });

  test('sub', () => {
    const sum = operate(10, 5, '-');
    expect(sum).toBe('5');
  });

  test('mul', () => {
    const sum = operate(10, 5, 'x');
    expect(sum).toBe('50');
  });

  test('div', () => {
    const sum = operate(10, 5, '÷');
    expect(sum).toBe('2');
  });

  test('mod', () => {
    const sum = operate(10, 5, '%');
    expect(sum).toBe('0');
  });

  test('divide by 0', () => {
    const sum = operate(10, 0, '%');
    expect(sum).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
