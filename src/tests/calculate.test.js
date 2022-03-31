import calculate from '../logic/calculate';

describe('operate function check', () => {
  test('AC', () => {
    const obj = {
      total: '50',
      next: '2',
      operation: '+',
    };
    const state = calculate(obj, 'AC');
    expect(state.total).toBe(0);
  });

  test('number', () => {
    const obj = {
      total: '0',
      next: null,
      operation: '+',
    };
    const state = calculate(obj, '1');
    expect(state.next).toBe('1');
  });

  test('dot', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };
    const state = calculate(obj, '.');
    expect(state.total).toBe('3.');
  });

  test('equal', () => {
    const obj = {
      total: '50',
      next: '2',
      operation: '+',
    };

    const state = calculate(obj, '=');
    expect(state.next).toBe(null);
  });

  test('+/-', () => {
    const obj = {
      total: '50',
      next: null,
      operation: null,
    };

    const state = calculate(obj, '+/-');
    expect(state.total).toBe('-50');
  });
});
