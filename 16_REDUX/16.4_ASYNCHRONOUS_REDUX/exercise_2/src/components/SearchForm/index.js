import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiCallAction } from '../../redux/actions';

import './styles.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      characterSearched: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    })
  }

  submitName(e) {
    e.preventDefault();
    const { inputText } = this.state;

    if (!inputText) return;

    const { search } = this.props;

    search(inputText);

    this.setState({
      inputText: '',
      characterSearched: inputText,
    });
  }

  render() {
    const { inputText } = this.state;

    return (
      <div>
        <form onSubmit={this.submitName}>
          <h1>Type a character below:</h1>
          <input
            onChange={this.handleChange}
            placeholder="Enter Character"
            value={inputText}
          />
          <div className="buttonSection">
            <button className="submitButton" type="submit" >Search!</button>
          </div>
        </form>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    search: (character) => dispatch(apiCallAction(character)),
  }
}

export default connect(null, mapDispatchToProps)(SearchForm)

SearchForm.propTypes = {
  search: PropTypes.func.isRequired,
}

