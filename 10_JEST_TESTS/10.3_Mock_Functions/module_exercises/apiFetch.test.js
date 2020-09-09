const API_URL = 'https://icanhazdadjoke.com/';

const api = {
  fetchJoke() {
    return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
  }
}

const apiJoke = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}

describe('api mocking', () => {
  const mockFetch = jest.spyOn(api, 'fetchJoke').mockImplementation(() => apiJoke)

  it('should return the correct joke object', () => {
    expect(mockFetch()).toEqual(apiJoke);
  })

  it('should return an object with the correct structure', () => {
    const response = mockFetch();

    expect(Object.keys(response)).toEqual(['id', 'joke', 'status']);
  })
})