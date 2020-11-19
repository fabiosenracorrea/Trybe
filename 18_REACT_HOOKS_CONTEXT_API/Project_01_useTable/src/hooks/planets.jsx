import
React,
{ createContext,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  availableColumnFilters,
  availableNumericComparisons,
  compareColumns,
} from './utils/numericComparison';
import fetchPlanets from '../services/api';
import sortPlanetsByColumn from './utils/sortPlanets';
import reApplyPlanetsFilters from './utils/applyFilters';

const planetContext = createContext();

const filterStructure = {
  filterByName: {
    name: '',
  },

  filterByNumericValues: [],

  order: {
    column: 'name',
    sort: 'ASC',
  },
};

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(filterStructure);

  useEffect(() => {
    fetchPlanets().then((data) => {
      const apiPlanetsData = [...data];
      apiPlanetsData.sort((a, b) => (a.name).localeCompare(b.name));

      setPlanets(apiPlanetsData);
      setPlanetsData(apiPlanetsData);
      setLoading(false);
    });
  }, []);

  const planetInfo = useMemo(() => {
    const examplePlanet = planetsData[0];
    let headers;

    const toExcludeHeaders = [
      'residents',
      'url',
      'created',
      'edited',
      'films',
    ];

    if (examplePlanet) {
      headers = (
        Object
          .keys(examplePlanet)
          .filter((header) => !toExcludeHeaders.includes(header))
      );
    }

    return headers;
  }, [planetsData]);

  const planetsSortOptions = useMemo(() => {
    const toExcludeOptions = [
      'created',
      'edited',
      'films',
      'url',
    ];

    let sortOptions;

    if (planetInfo) {
      sortOptions = planetInfo.filter((info) => !toExcludeOptions.includes(info));
    }

    return sortOptions;
  }, [planetInfo]);

  const nameFiltered = useMemo(() => {
    const { filterByName: { name } } = filters;

    return name;
  }, [filters]);

  const sortSelected = useMemo(() => {
    const { order } = filters;

    return order;
  }, [filters]);

  const availableFilters = useMemo(() => {
    const { filterByNumericValues } = filters;

    const usedFilters = filterByNumericValues.map((filter) => filter.column);

    const unusedFilters = availableColumnFilters.filter((filter) => (
      !usedFilters.includes(filter)
    ));

    return unusedFilters;
  }, [filters]);

  const usedFilters = useMemo(() => {
    const filtersInUse = availableColumnFilters.filter((filter) => (
      !availableFilters.includes(filter)
    ));

    return filtersInUse;
  }, [availableFilters]);

  const filterPlanetsByName = useCallback((nameLike) => {
    const filteredPlanets = planetsData.filter((planet) => {
      const nameRegex = new RegExp(nameLike, 'i');
      const planetMatches = nameRegex.test(planet.name);

      return planetMatches;
    });

    setPlanets(filteredPlanets);

    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByName: { name: nameLike },
    }));
  }, [planetsData]);

  const filterByNumerics = useCallback(({ column, value, comparison }) => {
    const validOptions = (
      availableColumnFilters.includes(column)
      && availableNumericComparisons.includes(comparison)
    );

    if (!validOptions) {
      return;
    }

    const filteredPlanetsByNumericComparison = planets.filter((planet) => (
      compareColumns(planet[column], comparison, value)
    ));

    setPlanets(filteredPlanetsByNumericComparison);

    setFilters((oldFilters) => {
      const oldNumericFilters = oldFilters.filterByNumericValues;
      const newFilterAdded = {
        column,
        comparison,
        value,
      };

      return ({
        ...oldFilters,
        filterByNumericValues: [...oldNumericFilters, newFilterAdded],
      });
    });
  }, [planets]);

  const removeFilter = useCallback((toRemoveColumn) => {
    const newNumericFilters = filters
      .filterByNumericValues
      .filter((oldFilter) => oldFilter.column !== toRemoveColumn);

    const { filterByName: { name } } = filters;

    const filtersToApply = {
      nameFilter: name,
      numericFilters: newNumericFilters,
    };

    const reFilteredPlanets = reApplyPlanetsFilters(planetsData, filtersToApply);

    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByNumericValues: newNumericFilters,
    }));

    setPlanets(reFilteredPlanets);
  }, [filters, planetsData]);

  const sortPlanets = useCallback((column, direction) => {
    const sortedPlanets = sortPlanetsByColumn(planets, column, direction);

    setPlanets(sortedPlanets);

    const newSorting = { column, direction };

    setFilters((oldFilters) => ({
      ...oldFilters,
      sort: newSorting,
    }));
  }, [planets]);

  return (
    <planetContext.Provider
      value={ {
        loading,
        planets,
        planetInfo,
        planetsSortOptions,
        nameFiltered,
        sortSelected,
        availableFilters,
        usedFilters,
        filterPlanetsByName,
        filterByNumerics,
        removeFilter,
        sortPlanets,
      } }
    >
      {children}
    </planetContext.Provider>
  );
}

function usePlanets() {
  const context = useContext(planetContext);

  if (!context) {
    throw new Error('You must use this hook within its provider');
  }

  return context;
}

export { PlanetProvider, usePlanets };
