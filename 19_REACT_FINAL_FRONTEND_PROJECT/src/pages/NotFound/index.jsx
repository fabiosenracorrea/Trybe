import React from 'react';
import { useLocation, Redirect, Link } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';

import './styles.css';

function NotFound() {
  const { pathname } = useLocation();

  if (pathname === '/Bebidas') {
    return (
      <Redirect to="/bebidas" />
    );
  }

  return (
    <div className="not-found-page">
      <div className="not-found-header">
        <h2>Not found</h2>
      </div>

      <div className="not-found-body">
        <FaSadTear />

        <h3>404</h3>

        <Link to="/comidas">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
