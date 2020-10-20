import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('App.jsx tests', () => {
  it('renders a heading with the text `Pokédex`', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  it('loads the main page on correct path', () => {
    const history = createMemoryHistory();

    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  it('has 3 fixed working navigation links', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const homeLink = getByText(/home/i);
    const aboutLink = getByText(/about/i);
    const favoriteLink = getByText(/favorite\spokémons/i);

    const homeLinkRef = homeLink.href.replace('http://localhost', '');
    const aboutLinkRef = aboutLink.href.replace('http://localhost', '');
    const favoriteLinkRef = favoriteLink.href.replace('http://localhost', '');

    expect(homeLinkRef).toBe('/');
    expect(aboutLinkRef).toBe('/about');
    expect(favoriteLinkRef).toBe('/favorites');
  });

  it('has a home link redirecting to / path', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const homeLink = getByText(/home/i);
    fireEvent.click(homeLink);

    const { pathname: homePath } = history.location;
    expect(homePath).toBe('/');
  });

  it('has a about link redirecting to /about path', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const aboutLink = getByText(/about/i);
    fireEvent.click(aboutLink);

    const { pathname: aboutPath } = history.location;
    expect(aboutPath).toBe('/about');
  });

  it('has a favorites link redirecting to /favorites path', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const favoriteLink = getByText(/favorite\spokémons/i);
    fireEvent.click(favoriteLink);

    const { pathname: favoritesPath } = history.location;
    expect(favoritesPath).toBe('/favorites');
  });

  it('redirects to Not Found page when unknown URL is given', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    history.push('/nsifjsdijfiosdjfo');

    const notFoundPage = getByText(/page\srequested\snot\sfound/i);

    expect(notFoundPage).toBeInTheDocument();
  });
});
