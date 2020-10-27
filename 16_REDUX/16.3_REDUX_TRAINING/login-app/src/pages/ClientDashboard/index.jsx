import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Dashboard({ logged, clients }) {

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
      <div className="clients">
        {clients[0]
          ? (clients.map(client => (
            <div className="client-info">
              <strong>{client.name}</strong>
              <span>{client.age}</span>
              <span>{client.email}</span>
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

function mapStateToProps(state) {
  return {
    logged: state.loginReducer.login.logged,
    clients: state.registerClientReducer.register.clients,
  };
}

export default connect(mapStateToProps, null)(Dashboard);
