const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('callback test', () => {
  it('should account for the callback', (done) => {
    uppercase('hello', (upper) => {
      expect(upper).toBe('HELLO')
      done()
    })
  })
})