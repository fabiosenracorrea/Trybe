import React from 'react';
import { connect } from 'react-redux';
import { registerClientAction } from '../../redux/actions/registerAction';

class RegisterClient extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      email: '',
      name: '',
      age: 0,
    }
  }

  handleInputChange({ value, name }) {
    this.setState({
      [name]: value,
    })
  }

  handleRegister(event) {
    event.preventDefault();
    const { email, name, age } = this.state;
    const { register, history } = this.props;

    if (!email || !name || !age) return;

    register({
      name,
      email,
      age,
    });

    history.push('/dashboard');
  }

  render() {
    const { name, age, email } = this.state;

    return (
      <div>
        <form onSubmit={this.handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={({target}) => this.handleInputChange(target)}
          />
          <input
            type="number"
            name="age"
            placeholder="Idade"
            value={age}
            onChange={({target}) => this.handleInputChange(target)}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={({target}) => this.handleInputChange(target)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: ({name, age, email}) => dispatch(registerClientAction({ name, age, email })),
  }
}

export default connect(null, mapDispatchToProps)(RegisterClient)
