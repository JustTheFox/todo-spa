import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu-item.scss';

export const MenuItem = ({ href, icon, children }) => {
  return (
    <li className="menu-item">
      <span className="menu-item__icon">{icon}</span>
      <NavLink to={href} className="menu-item__link" activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
};
