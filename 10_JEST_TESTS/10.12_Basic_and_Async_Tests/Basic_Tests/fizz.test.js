function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('implementations', () => {
  it('should return false to anything other than a number', () => {
    expect(myFizzBuzz('w')).toBeFalsy();
    expect(myFizzBuzz('3')).toBeFalsy();
    expect(myFizzBuzz([])).toBeFalsy();
    expect(myFizzBuzz({})).toBeFalsy();
  })

  it('should return fizzbuzz to numbers divided by 3 and 5', () => {
    expect(myFizzBuzz(15)).toMatch(/^fizzbuzz$/)
    expect(myFizzBuzz(45)).toMatch(/^fizzbuzz$/)
    expect(myFizzBuzz(150)).toMatch(/^fizzbuzz$/)
  })

  it('should return fizz to numbers divided by 3', () => {
    expect(myFizzBuzz(9)).toMatch(/^fizz$/)
    expect(myFizzBuzz(33)).toMatch(/^fizz$/)
    expect(myFizzBuzz(999)).toMatch(/^fizz$/)
  })

  it('should return buzz to numbers dividded by 5', () => {
    expect(myFizzBuzz(50)).toMatch(/^buzz$/)
    expect(myFizzBuzz(100)).toMatch(/^buzz$/)
    expect(myFizzBuzz(5)).toMatch(/^buzz$/)
  })

  it('should return the input to other numbers', () => {
    expect(myFizzBuzz(4)).toBe(4)
    expect(myFizzBuzz(1024)).toBe(1024)
    expect(myFizzBuzz(1000001)).toBe(1000001)
  })
})