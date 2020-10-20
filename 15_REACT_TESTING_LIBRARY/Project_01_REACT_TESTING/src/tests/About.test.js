import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('About.jsx testing', () => {
  it('should have a h2 heading with specific text', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    const aboutTitle = queryByText(/about\spokédex/i);
    expect(aboutTitle).toBeInTheDocument();
    expect(aboutTitle.tagName).toBe('H2');
  });

  it('should have 2 paragraphs of information', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    const descriptionText = new RegExp('^this application simulates a pokédex.*', 'i');
    const description = queryByText(descriptionText);
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');

    const secondDescriptionText = new RegExp('^One can filter Pokémons by type.*', 'i');
    const secondDescription = queryByText(secondDescriptionText);
    expect(secondDescription).toBeInTheDocument();
    expect(secondDescription.tagName).toBe('P');
  });

  it('should have a specific image on screen', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    const pokedexImg = getByAltText(/pokédex/i);

    const expectedImageSRC = 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(pokedexImg.src).toBe(expectedImageSRC);
  });
});
