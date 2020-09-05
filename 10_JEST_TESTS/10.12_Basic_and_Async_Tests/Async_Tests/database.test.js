const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('test function with promise syntax', () => {
  it('should handle when user is found', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toBe('Mark')
    })
  })

  it('should handle when user is NOT found', () => {
    const id = 8;
    expect.assertions(1);
    return getUserName(8).catch((err) => {
      expect(err.error).toBe(`User with ${id} not found.`)
    })
  })
})

describe('test function with async/await syntax', () => {
  it('should handle when user is found (async/await)', async () => {
    expect.assertions(1);
    const userName = await getUserName(5);
    expect(userName).toBe('Paul')
  })

  it('should handle when user is found (async/await)', async () => {
    const id = 120;
    expect.assertions(1);
    try {
      const userName = await getUserName(id);
    } catch (err) {
      expect(err.error).toBe(`User with ${id} not found.`)
    }
  })
})