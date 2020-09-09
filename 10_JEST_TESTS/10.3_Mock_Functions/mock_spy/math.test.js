const math = require('./math');
jest.mock('./math')

describe('mock and spy tests', () => {
  it('should register function call', () => {
    math.subtrair.mockImplementation((a, b) => a - b);

    math.subtrair(2, 1);

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair(4,2)).toBe(2)
  })

  it('should handle multiplicar implementation', () => {
    (
      math
        .multiplicar
        .mockImplementation((a, b) => a * b)
        .mockReturnValue(10)
    )

    math.multiplicar(2, 1);

    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar(4,2)).toBe(10);
  })
})