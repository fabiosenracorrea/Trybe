import React, {
  useCallback, useRef, useState, useMemo,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { BsHouseFill } from 'react-icons/bs';

import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/search';

import userIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

import './styles.css';

const searchOptions = [
  {
    name: 'Ingredientes',
    test: 'ingredient',
    value: 'ingredients',
  },
  {
    name: 'Nome',
    test: 'name',
    value: 'name',
  },
  {
    name: 'Primeira Letra',
    test: 'first-letter',
    value: 'first_letter',
  },
];

function Header({ pageType = 'comidas', pageTitle, showSearch = false }) {
  const searchInputRef = useRef();

  const [searchBarShowing, setSearchBarShowing] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const { userToken } = useAuth();
  const { appSearch } = useSearch();
  const { push } = useHistory();

  const handleSearchIconClick = useCallback(() => {
    setSearchBarShowing((oldSearchBarShowingValue) => !oldSearchBarShowingValue);
  }, []);

  const handleRadioChange = useCallback(({ target }) => {
    setRadioValue(target.value);
  }, []);

  const handleRecipeSearch = useCallback(async (formEvent) => {
    formEvent.preventDefault();

    const search = searchInputRef.current.value;
    const option = radioValue;

    if (!search || !option) {
      return;
    }

    if (option === 'first_letter' && search.length !== 1) {
      // eslint-disable-next-line
      alert('Sua busca deve conter somente 1 (um) caracter');

      return;
    }

    const infoToSearch = { option, value: search, token: userToken };

    const singleResponseID = await appSearch(pageType, infoToSearch);

    if (singleResponseID) {
      push(`${pageType}/${singleResponseID}`);
    }
  }, [push, appSearch, searchInputRef, radioValue, userToken, pageType]);

  const parsedTitle = useMemo(() => {
    const headerWords = pageTitle.split(' ');

    const namesCapitalized = headerWords.map((word) => (
      word.charAt(1 - 1).toUpperCase() + word.slice(1)
    ));

    const wordsCapitalized = namesCapitalized.join(' ');

    return wordsCapitalized;
  }, [pageTitle]);

  return (
    <div className="header-container">
      <header className="app-header">
        <Link className="profile-link" to="/perfil">
          <img data-testid="profile-top-btn" src={ userIcon } alt="user info" />
        </Link>

        <span data-testid="page-title">{ parsedTitle }</span>

        {showSearch
          ? (
            <button type="button" onClick={ handleSearchIconClick }>
              <img data-testid="search-top-btn" src={ searchIcon } alt="search icon" />
            </button>
          ) : (
            <Link to={ `/${pageType}` }>
              <BsHouseFill size={ 24 } color="white" />
            </Link>
          )}
      </header>

      {searchBarShowing && (
        <div className="search-bar-container">
          <form onSubmit={ handleRecipeSearch }>

            <div className="search-input-container">

              <input
                type="text"
                data-testid="search-input"
                placeholder="Palavra-chave"
                ref={ searchInputRef }
              />

              <button
                type="submit"
                data-testid="exec-search-btn"
              >
                <FiSearch />
              </button>

            </div>

            <div className="radio-type-container">

              {searchOptions.map(({ name, test, value }) => (
                <div key={ `${name}-${test}` } className="radio-container">
                  <label data-testid={ `${test}-search-radio` } htmlFor={ value }>
                    <input
                      type="radio"
                      onChange={ handleRadioChange }
                      name="searchOption"
                      id={ value }
                      value={ value }
                    />
                    <span className="checkmark" />
                    { name }
                  </label>
                </div>
              ))}

            </div>

          </form>
        </div>
      )}
    </div>
  );
}

Header.defaultProps = {
  showSearch: false,
  pageType: 'comidas',
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageType: PropTypes.string,
  showSearch: PropTypes.bool,
};

export default Header;
