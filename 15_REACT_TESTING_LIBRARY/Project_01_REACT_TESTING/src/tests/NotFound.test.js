import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

let screen;

describe('NotFound.jsx tests', () => {
  beforeEach(() => {
    screen = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
  })

  it('should contain an H2 heading with specific text', () => {
    const aboutTitle = screen.getByText(/page\srequested\snot\sfound/i);
    expect(aboutTitle).toBeInTheDocument();
    expect(aboutTitle.tagName).toBe('H2');

    const cryingEmoji = screen.getByText('😭');
    expect(cryingEmoji).toBeInTheDocument();
  });

  it('should contain specific image', () => {
    const pokedexImg = screen.getByAltText(
      /pikachu\scrying\sbecause\sthe\spage\srequested\swas\snot\sfound/i,
    );

    const expectedImageSRC = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(pokedexImg.src).toBe(expectedImageSRC);
  });
});
