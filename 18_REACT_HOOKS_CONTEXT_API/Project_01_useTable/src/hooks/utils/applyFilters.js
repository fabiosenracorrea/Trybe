import { compareColumns } from './numericComparison';

export default function reApplyPlanetsFilters(planets, { nameFilter, numericFilters }) {
  const filteredPlanetsByName = planets.filter((planet) => {
    const nameRegex = new RegExp(nameFilter, 'i');
    const planetMatches = nameRegex.test(planet.name);

    return planetMatches;
  });

  let filteredPlanetsByColumns = filteredPlanetsByName;

  numericFilters.forEach(({ column, comparison, value }) => {
    filteredPlanetsByColumns = filteredPlanetsByColumns.filter((planet) => (
      compareColumns(planet[column], comparison, value)
    ));
  });

  return filteredPlanetsByColumns;
}
