let file = require('./randomInt');
let randomInt = file.randomInt;
jest.mock('./randomInt')

describe('mocking randomInt', () => {
  randomInt.mockImplementationOnce((a, b) => a / b);

  it('should work to divide 2 numbers', () => {
    expect(randomInt(100, 10)).toBe(10);
    expect(randomInt).toHaveBeenCalled();
    expect(randomInt).toHaveBeenCalledWith(100, 10);
  })

  it('should only divide numbers the first time', () => {
    expect(randomInt(100, 10)).toBeUndefined();
  })
})