let file = require('./randomInt');
let randomInt = file.randomInt;

describe('randomInt tests', () => {
  randomInt = jest.fn().mockReturnValue(10);

  it('should be called 2 times', () => {
    randomInt()
    randomInt()
    expect(randomInt).toHaveBeenCalled()
    expect(randomInt).toHaveBeenCalledTimes(2)
  })

  it('should return a value between 0 and 100', () => {
    expect(randomInt()).toBe(10);
  })
})