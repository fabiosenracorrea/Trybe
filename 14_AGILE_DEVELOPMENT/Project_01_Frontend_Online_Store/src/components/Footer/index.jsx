import React from 'react';

import './styles.css';
import './responsive.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="app-footer">
        <div className="footer-header">
          <span className="fas fa-pencil-ruler footer-icon" />
          <p className="footer-title">Creators</p>
        </div>
        <div className="footer-content">
          <p className="creator">Fabi Philipi</p>
          <p className="creator">Fábio S. Corrêa</p>
          <p className="creator">Rebeca Cerqueira</p>
          <p className="creator">Thiago Alcântra</p>
        </div>
      </footer>
    );
  }
}


export default Footer;
