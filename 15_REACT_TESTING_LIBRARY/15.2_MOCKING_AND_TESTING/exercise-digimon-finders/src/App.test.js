import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

const fakeDigimons = [
  {
  name: 'Agumon',
  level: 'Starter',
  img: 'this is an img',
  },
]

const errorSearch = {
  ErrorMsg: 'Error message!!'
}

afterEach(jest.clearAllMocks);

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('fetches the api and renders digimon correctly', async () => {
    const { getByTestId, findByText} = render(<App />);

    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(fakeDigimons),
    })

    const input = getByTestId('input');
    const button = getByTestId('buttonSearch');

    fireEvent.change(input, { target: { value: 'Agumon' } })
    fireEvent.click(button);

    expect(global.fetch).toHaveBeenCalled();

    const digimonName = await findByText('Agumon', {}, { timeout: 3000 });
    expect(digimonName).toBeInTheDocument();

    const digimonLevel = await findByText('level: Starter', {}, { timeout: 3000 });
    expect(digimonLevel).toBeInTheDocument();
  })

  it('shows error msg if bad search', async () => {
    const { getByTestId, findByText} = render(<App />);

    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(errorSearch),
    })

    const input = getByTestId('input');
    const button = getByTestId('buttonSearch');

    fireEvent.change(input, { target: { value: 'bad search' } })
    fireEvent.click(button);

    expect(global.fetch).toHaveBeenCalled();

    const ERROR_SHOWN = 'Error message!!';

    const errorMesage = await findByText(ERROR_SHOWN, {}, { timeout: 3000 });
    expect(errorMesage).toBeInTheDocument();
  })
});
