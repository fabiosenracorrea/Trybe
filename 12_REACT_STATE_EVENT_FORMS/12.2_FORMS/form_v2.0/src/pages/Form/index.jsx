import React from 'react';

import './styles.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleInfo = this.handleInfo.bind(this);
    this.clearInfos = this.clearInfos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkCity = this.checkCity.bind(this);
    this.alertUser = this.alertUser.bind(this);

    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      resume: "",
      position: "",
      jobDescription: "",
      house: "",
      errorMsg: "",
      allGood: false,
      alerted: false,
    }
  }

  alertUser() {
    if (!this.state.alerted) {
      alert('Preencha com cuidado essa informação!');
      this.setState({
        alerted: true,
      });
    }
  }

  checkCity() {
    if (this.state.city.match(/^[0-9].*/)) {
      this.setState({
        city: ''
      });
    }
  }

  handleInfo(input) {
    const { name, value, id } = input;

    switch (name) {
      case 'name':
        this.setState({
          [name]: value.toUpperCase(),
        });
        break;
      case 'address':
        this.setState({
          [name]: value.replace(/[\W]/g, ' ')
        });
        break;
      case 'house':
        this.setState({
          [name]: id
        });
        break;
      default:
        this.setState({
          [name]: value,
        });
        break;
    }
  }

  handleSubmit() {
    if (!this.state.email.match(/^[\w]+@[\w]+\.com$/)) {
      this.setState({
        errorMsg: 'Email no formato inválido'
      });
      return;
    }

    this.setState({
      allGood: true,
      errorMsg: '',
    });
  }

  clearInfos() {
    this.setState({
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      resume: "",
      position: "",
      jobDescription: "",
      house: "",
      errorMsg: "",
      allGood: false,
    });
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <h1>This is a form!</h1>
          <fieldset className="info">
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="name">Nome</label>
                <input name="name" id="name" maxLength="40" required value={this.state.name} onChange={e => this.handleInfo(e.target)} />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input name="email" id="email" maxLength="50" required value={this.state.email} onChange={e => this.handleInfo(e.target)}/>
              </div>
            </div>
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="cpf">CPF</label>
                <input name="cpf" id="cpf" maxLength="11" required value={this.state.cpf} onChange={e => this.handleInfo(e.target)}/>
              </div>
              <div className="input-container">
                <label htmlFor="address">Endereço</label>
                <input name="address" id="address" maxLength="200" required value={this.state.address} onChange={e => this.handleInfo(e.target)}/>
              </div>
            </div>
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="city">Cidade</label>
                <input name="city" id="city" maxLength="28" required value={this.state.city} onBlur={this.checkCity} onChange={e => this.handleInfo(e.target)}/>
              </div>
              <div className="input-container">
                <label htmlFor="state">Estado</label>
                <select name="state" id="state" required value={this.state.state} onChange={e => this.handleInfo(e.target)}>
                  <option value="" disabled hidden>Selecione um estado</option>
                  <option value="AC">Acre</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="SP">São Paulo</option>
                </select>
              </div>
            </div>

            <div className="radio-container">
              <label htmlFor="house">Casa</label>
              <input type="radio" name="house" id="Casa" value={this.state.house} required onChange={e => this.handleInfo(e.target)}/>
              <label htmlFor="house">Apartamento</label>
              <input type="radio" name="house" id="Apartamento" required value={this.state.house} onChange={e => this.handleInfo(e.target)}/>
            </div>
          </fieldset>

          <fieldset className="carrer">
            <div className="input-container">
              <label htmlFor="resume">Resumo do Currículo</label>
              <textarea name="resume" id="resume" maxLength="1000" required value={this.state.resume} onChange={e => this.handleInfo(e.target)}/>
            </div>
            <div className="input-container">
              <label htmlFor="position">Cargo</label>
              <textarea name="position" id="position" maxLength="40" required onMouseEnter={this.alertUser} value={this.state.position} onChange={e => this.handleInfo(e.target)}/>
            </div>
            <div className="input-container">
              <label htmlFor="jobDescription">Descrição do Cargo</label>
              <textarea name="jobDescription" id="jobDescription" maxLength="500" required value={this.state.jobDescription} onChange={e => this.handleInfo(e.target)}/>
            </div>
          </fieldset>
        </form>

        {this.state.errorMsg && (
          <p className="error-msg">{this.state.errorMsg}</p>
        )}

        <div className="btn-container">
          <button type="button" onClick={this.handleSubmit}>Mostrar Consolidado</button>
          <button type="button" onClick={this.clearInfos}>Limpar Infos</button>
        </div>

        {this.state.allGood && (
          <div className="info-inserted">
            <h6>Name:</h6>
            <p>{this.state.name}</p>
            <h6>CPF:</h6>
            <p>{this.state.cpf}</p>
            <h6>Email:</h6>
            <p>{this.state.email}</p>
            <h6>Endereço:</h6>
            <p>{this.state.address}</p>
            <h6>CIdade:</h6>
            <p>{this.state.city}</p>
            <h6>Estado:</h6>
            <p>{this.state.state}</p>
            <h6>Casa ou Apartamento:</h6>
            <p>{this.state.house}</p>
            <h6>Resumo do Currículo:</h6>
            <p>{this.state.resume}</p>
            <h6>Cargo:</h6>
            <p>{this.state.position}</p>
            <h6>Descrição do Cargo:</h6>
            <p>{this.state.jobDescription}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Form;