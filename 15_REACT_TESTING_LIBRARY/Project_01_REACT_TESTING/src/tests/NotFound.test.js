import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('NotFound.jsx tests', () => {
  it('should contain an H2 heading with specific text', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    const aboutTitle = queryByText(/page\srequested\snot\sfound/i);
    expect(aboutTitle).toBeInTheDocument();
    expect(aboutTitle.tagName).toBe('H2');

    const cryingEmoji = queryByText('😭');
    expect(cryingEmoji).toBeInTheDocument();
  });

  it('should contain specific image', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    const pokedexImg = getByAltText(
      /pikachu\scrying\sbecause\sthe\spage\srequested\swas\snot\sfound/i,
    );

    const expectedImageSRC = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(pokedexImg.src).toBe(expectedImageSRC);
  });
});
