let randomNumber = () => {
  return Math.round(Math.random() * 100);
}

const isDivisible = (number) => (randomNumber() % number) === 0

describe('jestfn tests on isDivisible', () => {
  it('should call randomNumber', () => {
    randomNumber = jest.fn();

    isDivisible(3);
    expect(randomNumber).toHaveBeenCalled();
  })

  it('should return true for even divided by 2', () => {
    randomNumber = (
      jest
        .fn()
        .mockReturnValueOnce(20)
        .mockReturnValueOnce(44)
        .mockReturnValueOnce(62)
        .mockReturnValue(98)
    )

    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(2)).toBe(true);
  })

  it('should handle different numbers', () => {
    randomNumber = (
      jest
        .fn()
        .mockReturnValueOnce(33)
        .mockReturnValueOnce(21)
        .mockReturnValueOnce(97)
        .mockReturnValue(13)
    )

    expect(isDivisible(2)).toBe(false);
    expect(isDivisible(7)).toBe(true);
    expect(isDivisible(3)).toBe(false);
    expect(isDivisible(6)).toBe(false);
    expect(isDivisible(13)).toBe(true);
  })
})