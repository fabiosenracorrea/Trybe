import React, {
  useCallback, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import FoodDrinkFilter from '../../components/FoodDrinkFilter';

import { useCook } from '../../hooks/cook';

import { shareWhenMultipleRecipesPresent } from '../../utils/shareRecipe';

import shareIcon from '../../images/shareIcon.svg';

import './styles.css';

function DoneRecipes() {
  const { doneRecipes } = useCook();

  const [copyLink, setCopyLink] = useState({});

  const [filter, setFilter] = useState('All');

  const filteredItems = useMemo(() => {
    switch (filter) {
    case 'Foods':
      return doneRecipes.filter((recipe) => recipe.type === 'comida');
    case 'Drinks':
      return doneRecipes.filter((recipe) => recipe.type === 'bebida');
    default:
      return doneRecipes;
    }
  }, [doneRecipes, filter]);

  const handleFilterChange = useCallback(({ target }) => {
    const { value: filterClicked } = target;

    setFilter(filterClicked);
  }, []);

  return (
    <div className="done-recipes-page">
      <Header pageTitle="Receitas Feitas" />

      <FoodDrinkFilter
        currentFilter={ filter }
        handleFilterChange={ handleFilterChange }
      />

      <div className="done-recipes-container">
        {filteredItems.map((recipe, index) => (
          <div className="done-recipe-card" key={ recipe.doneDate.toLocaleString() }>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>

            <Link
              to={ `/${recipe.type}s/${recipe.id}` }
              data-testid={ `${index}-horizontal-name` }
            >
              {recipe.name}
            </Link>

            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.type === 'comida'
                ? `${recipe.area} - ${recipe.category}`
                : `${recipe.alcoholicOrNot}`}
            </p>

            <p
              data-testid={ `${index}-horizontal-done-date` }
            >
              Cooked on:
              {' '}
              {recipe.doneDate}
            </p>

            <div className="done-recipe-share-container">
              <span>Share this recipe:</span>

              <button
                type="button"
                onClick={ () => shareWhenMultipleRecipesPresent(
                  recipe.id, recipe.type, setCopyLink,
                ) }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="share this recipe"
                />

                {copyLink[recipe.id] && (
                  <p>Link copiado!</p>
                )}
              </button>
            </div>

            {recipe.type === 'comida' && (
              <div className="recipe-tag-container">
                {recipe.tags.filter((tag, i) => i < 1 + 1).map((tag) => (
                  <span
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default DoneRecipes;
