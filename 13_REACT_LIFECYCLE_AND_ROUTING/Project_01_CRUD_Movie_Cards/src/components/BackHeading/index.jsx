import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

class BackHeading extends React.Component {
  render() {
    return (
      <Link to="/" className="back-link">
        <FiArrowLeft size={40} />
      </Link>
    );
  }
}

export default BackHeading;
