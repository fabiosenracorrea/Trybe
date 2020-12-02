import React, { useMemo, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GiPerspectiveDiceSixFacesRandom, GiJigsawPiece } from 'react-icons/gi';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { useSingleRecipe } from '../../hooks/singleRecipe';

import './styles.css';

function ExploreRecipes({ pageType }) {
  const isFoodPage = useMemo(() => (pageType === 'comidas'), [pageType]);

  const { loadRandomRecipe } = useSingleRecipe();
  const { push } = useHistory();

  const handleRandomClick = useCallback(async () => {
    const randomRecipeID = await loadRandomRecipe(pageType);

    if (!randomRecipeID) {
      alert('Ocorreu um erro na busca aleatória, tente novamente.');

      return;
    }

    const randomRecipeUrl = `/${pageType}/${randomRecipeID}`;

    push(randomRecipeUrl);
  }, [pageType, loadRandomRecipe, push]);

  return (
    <div className="explore-recipes-page">
      <Header pageType={ pageType } pageTitle={ `Explorar ${pageType}` } />
      <Navbar />

      <h1>Qual vai ser?</h1>

      <div className={ `explore-recipes-content ${!isFoodPage ? 'explore-drinks' : ''}` }>
        <Link
          to={ `/explorar/${pageType}/ingredientes` }
          data-testid="explore-by-ingredient"
        >
          <GiJigsawPiece />
          Por
          <br />
          Ingredientes

        </Link>

        {isFoodPage && (
          <Link
            to={ `/explorar/${pageType}/area` }
            data-testid="explore-by-area"
          >
            <FaGlobeAmericas />
            Por
            <br />
            Local de Origem

          </Link>
        )}

        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleRandomClick }
        >
          <GiPerspectiveDiceSixFacesRandom />
          Me
          <br />

          Surpreenda!

        </button>
      </div>

    </div>
  );
}

ExploreRecipes.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default ExploreRecipes;
