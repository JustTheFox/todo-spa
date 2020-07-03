import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      JustTODO
    </Link>
  );
};

export default Logo;
