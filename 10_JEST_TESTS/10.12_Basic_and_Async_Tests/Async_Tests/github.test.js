const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('check presence of repositories', () => {
  it('should have 2 repos on the list', async () => {
    const testedURL = 'https://api.github.com/users/tryber/repos';
    const repo1 = 'sd-01-block22-project-queries-unite';
    const repo2 = 'sd-01-block21-mysql-vocabulary-booster';
    expect.assertions(2);

    const repos = await getRepos(testedURL);
    expect(repos).toContainEqual(repo1);
    expect(repos).toContainEqual(repo2);
  })
})