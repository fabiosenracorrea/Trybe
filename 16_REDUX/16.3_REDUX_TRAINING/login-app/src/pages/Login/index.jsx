import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/loginAction';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleInputChange({ value, name }) {
    this.setState({
      [name]: value,
    })
  }

  handleLogin(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;

    if (!email || !password) return;

    login(email);

    history.push('/dashboard');
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input
            onChange={({ target }) => this.handleInputChange( target )}
            type="text"
            name="email"
            value={email}
            placeholder="E-mail"
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={({ target }) => this.handleInputChange( target )}
          />
          <button type="submit">Entrar!</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email) => dispatch(loginAction(email)),
  }
}

export default connect(null, mapDispatchToProps)(Login);
