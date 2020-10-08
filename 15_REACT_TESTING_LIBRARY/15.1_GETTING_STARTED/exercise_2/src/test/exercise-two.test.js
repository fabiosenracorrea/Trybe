import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    const { getByLabelText, getByText, queryAllByRole } = render(<App />)

    const exitingTodosWhenLoading = queryAllByRole('li');
    expect(exitingTodosWhenLoading.length).toBe(0);

    const input = getByLabelText('Tarefa:');
    const btn = getByText('Adicionar');

    const todosAdded = listTodo.map(todo => {
      fireEvent.change(input, { target: { value: todo } });
      fireEvent.click(btn);

      return getByText(todo);
    });

    expect(todosAdded.length).toBe(3);

    todosAdded.forEach((todo, index) => {
      expect(todo).toHaveTextContent(listTodo[index])
    });

  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const TEXT_ON_SCREEN = 'this is a test'
    const{ getByText } = render(<Item content={TEXT_ON_SCREEN} />);

    const textRendered = getByText(TEXT_ON_SCREEN);
    expect(textRendered).toBeInTheDocument();

  })
})
