import calculate from './calculate'; 

describe('calculate', () => {
  it('should handle AC button', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle numbers', () => {
    const result = calculate({  next: '2', operation: '+' , total: '5' }, '3');
    expect(result).toEqual({
      total: '5',
      next: '23',
      operation: '+',
    });
  });

  it('should handle "." button', () => {
    const result = calculate({ next: '5', operation: '+' }, '.');
    expect(result).toEqual({
      next: '5.',  // result of the operation
      operation: '+',
    });
  });

  it('should handle "=" button', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '=');
    expect(result).toEqual({
      total: '8', // result of the operation
      next: null,
      operation: null,
    });
  });

});
