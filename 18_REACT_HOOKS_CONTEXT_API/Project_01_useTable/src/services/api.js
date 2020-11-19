const apiEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets';

async function fetchPlanets() {
  const initialResponse = await fetch(apiEndpoint);
  const { count, results: initialPlanets } = await initialResponse.json();

  const resultsPerPage = initialPlanets.length;
  const maxPages = Math.ceil(count / resultsPerPage) - 1; // initial page
  const PAGE_JUMP = 2; // the first one we need to query is page=2

  const pagesArray = Array.from(
    { length: maxPages },
    (_, index) => index + PAGE_JUMP,
  );

  const morePlanets = await Promise.all(pagesArray.map(async (page) => {
    const pageResponse = await fetch(`${apiEndpoint}/?page=${page}`);
    const { results: nextPlanets } = await pageResponse.json();

    return nextPlanets;
  }));

  const planets = (
    morePlanets.reduce((acc, planetArray) => [...acc, ...planetArray], initialPlanets)
  );

  return planets;
}

// async function fetchPlanets() {
//   const initialResponse = await fetch(apiEndpoint);
//   const { results: initialPlanets } = await initialResponse.json();

//   return initialPlanets;
// }

export default fetchPlanets;
