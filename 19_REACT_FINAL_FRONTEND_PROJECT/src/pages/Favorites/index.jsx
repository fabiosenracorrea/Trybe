import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import FoodDrinkFilter from '../../components/FoodDrinkFilter';

import { useRecipes } from '../../hooks/recipes';

import { shareWhenMultipleRecipesPresent } from '../../utils/shareRecipe';

import shareIcon from '../../images/shareIcon.svg';
import heartIcon from '../../images/blackHeartIcon.svg';

import './styles.css';

function Favorites() {
  const { favoriteRecipes, updateFavoriteRecipes } = useRecipes();

  const [copyLink, setCopyLink] = useState({});

  const [filter, setFilter] = useState('All');

  const filteredItems = useMemo(() => {
    switch (filter) {
    case 'Foods':
      return favoriteRecipes.filter((recipe) => recipe.type === 'comida');
    case 'Drinks':
      return favoriteRecipes.filter((recipe) => recipe.type === 'bebida');
    default:
      return favoriteRecipes;
    }
  }, [favoriteRecipes, filter]);

  const handleFilterChange = useCallback(({ target }) => {
    const { value: filterClicked } = target;

    setFilter(filterClicked);
  }, []);

  const handleRecipeUnfavorite = useCallback((id) => {
    const dataToUnfavorite = { id };

    updateFavoriteRecipes(dataToUnfavorite, true);
  }, [updateFavoriteRecipes]);

  return (
    <div className="favorite-recipes-page">
      <Header pageTitle="Receitas Favoritas" />

      <FoodDrinkFilter
        handleFilterChange={ handleFilterChange }
        currentFilter={ filter }
      />

      <div className="favorite-recipes-container">
        {filteredItems.map((recipe, index) => (
          <div className="favorite-recipe-card" key={ `${recipe.type}-${recipe.name}` }>
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

            <div className="favorite-btn-container">

              <div className="done-recipe-share-container">
                <button
                  type="button"
                  onClick={ () => shareWhenMultipleRecipesPresent(
                    recipe.id, recipe.type, setCopyLink,
                  ) }
                >
                  <img
                    src={ shareIcon }
                    alt="share this recipe"
                    data-testid={ `${index}-horizontal-share-btn` }
                  />

                  {copyLink[recipe.id] && (
                    <p>Link copiado!</p>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={ () => handleRecipeUnfavorite(recipe.id, recipe.type) }
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ heartIcon }
                  alt="unfavorite this recipe"
                />
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
