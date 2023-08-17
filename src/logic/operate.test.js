import operate from './operate';

describe('operate', () => {
  it('adds two numbers correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('subtracts two numbers correctly', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });
});
