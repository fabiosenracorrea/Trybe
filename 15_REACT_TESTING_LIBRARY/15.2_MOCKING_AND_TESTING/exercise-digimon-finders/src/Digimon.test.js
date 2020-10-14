import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

const fakeDigimon = {
  name: 'Agumon',
  level: 'Starter',
  img: 'this is an img',
}

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const { getByText } = render(<Digimon digimon={fakeDigimon}/>)

    const digimonName = getByText('Agumon');
    expect(digimonName).toBeInTheDocument();

    const digimonLevel = getByText('level: Starter');
    expect(digimonLevel).toBeInTheDocument();
  });
});
