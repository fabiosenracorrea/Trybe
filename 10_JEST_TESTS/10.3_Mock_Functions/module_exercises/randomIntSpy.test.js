let file = require('./randomInt');

describe('undertanding spyOn', () => {
  const mockedFunc = (
    jest
      .spyOn(file, 'randomInt')
      .mockImplementation((a, b, c) => a * b * c)
  )

  it('should work with the implemented func', () => {
    expect(mockedFunc(10, 2, 4)).toBe(80);
  })

  it('should reset to default after clearing', () => {
    file.randomInt.mockRestore();
    expect(file.randomInt()).toBeLessThanOrEqual(100);
  })

  it('should be mocked again', () => {
    const newMock = (
      jest
      .spyOn(file, 'randomInt')
      .mockImplementation((a) => 2 * a)
    )

    expect(newMock(2)).toBe(4);
  })
})