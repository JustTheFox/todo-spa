import React from 'react';
import { MenuList } from './menu-list';
import './menu.scss';

export const Menu = ({ menu }) => {
  return (
    <nav className="menu">
      {menu.map((list, index) => (
        <MenuList key={`_${index.toString()}`} items={list} />
      ))}
    </nav>
  );
};
