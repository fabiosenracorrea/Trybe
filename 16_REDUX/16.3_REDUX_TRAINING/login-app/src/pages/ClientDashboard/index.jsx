import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerClientAction } from '../../redux/actions/registerAction';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.handleClientOrdering = this.handleClientOrdering.bind(this);
    this.handleClientRemoval = this.handleClientRemoval.bind(this);

    const { clients } = this.props;

    this.state = {
      clients,
      ordered: false,
    }
  }

  handleClientOrdering(ordered) {
    const { clients } = this.props;

    let modifiableClients = [...clients];

    if (ordered) {
      modifiableClients.sort((a, b) => (a.name).localeCompare(b.name));
    }

    this.setState({
      clients: modifiableClients,
      ordered,
    })
  }

  handleClientRemoval(email) {
    const { remove } = this.props;
    const { clients } = this.state;

    remove(email)

    const newClients = clients.filter(client => client.email !== email)

    this.setState({
      clients: newClients,
    })
  }

  render() {
    const { logged } = this.props;
    const { clients, ordered } = this.state;

    if (!logged) {
      return (
        <div className="no-login">
          <h2>Login não efetuado</h2>
        </div>
      )
    }

    return (
      <div>
        <h1>Cliente Cadastrados</h1>
        <button onClick={() => this.handleClientOrdering(!ordered)} type="button">Ordenar/Desordenar</button>
        <div className="clients">
          {clients[0]
            ? (clients.map(client => (
              <div className="client-info" key={client.email}>
                <strong>{client.name}</strong>
                <span>{client.age}</span>
                <span>{client.email}</span>
                <button onClick={() => this.handleClientRemoval(client.email)} type="button">X</button>
              </div>
            )))
            : (
              <p>Nenhum cliente cadastrado.</p>
            )
          }
        </div>
        <div className="register-container">
          <Link to="register-clients">Registrar Cliente</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    logged: state.loginReducer.login.logged,
    clients: state.registerClientReducer.register.clients,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (email) => dispatch(registerClientAction({ email }, true)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
