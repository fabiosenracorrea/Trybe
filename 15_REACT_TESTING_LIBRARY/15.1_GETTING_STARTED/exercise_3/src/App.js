import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selected: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  handleRemove() {
    const { listTodo, selected } = this.state;

    const newTodos = [...listTodo];

    const selectedIndex = newTodos.findIndex(todo => todo === selected);

    newTodos.splice(selectedIndex, 1);

    this.setState({
      listTodo: newTodos,
      selected: '',
    })
  }

  handleClick(todo) {
    this.setState({
      selected: todo,
    })
  }

  render() {
    const { listTodo, selected } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <input
          type='button'
          value="Remover"
          onClick={this.handleRemove}
          disabled={!selected}
          data-testid="id-remove"
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} onClick={() => this.handleClick(todo)}>
                  <Item content={todo}  />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
