import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    const { loading, error, character } = this.props;

    console.log(this.props)

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

function mapStateToProps(state) {
  return {
    loading: state.charReducer.loading,
    error: state.charReducer.error,
    character: state.charReducer.character,
  }
}

export default connect(mapStateToProps, null)(CharacterInfo)

CharacterInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  character: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}
