import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);

    const btn = getByText('Adicionar');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');

  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    const { getByLabelText,queryByText } = render(<App />);

    const TO_DO = 'Tarefa_1'

    const input = getByLabelText('Tarefa:');
    const btn = queryByText('Adicionar');

    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: TO_DO } });
    fireEvent.click(btn);

    const addedToDo = queryByText(TO_DO);
    expect(addedToDo).not.toBeNull();
  });
});
