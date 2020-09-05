const { TestScheduler } = require("jest");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('implementation', () => {
  it('should add numeric values correctly', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-20, 10)).toBe(-10);
  })

  it('should not add if params arent numbers', () => {
    expect(() => sum(4, '4')).toThrow();
    expect(() => sum(4, [])).toThrow();
    expect(() => sum(4, null)).toThrow();
  })

  it('should throw correct error msg', () => {
    expect(() => sum(4, '4')).toThrowError("parameters must be numbers")
  })
})