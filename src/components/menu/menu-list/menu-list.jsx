import React from 'react';
import { MenuItem } from '../menu-item';
import './menu-list.scss';

export const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list">
      {list.map(({ id, colorId, href, title }) => (
        <MenuItem key={id} color={colorId} href={href}>
          {title}
        </MenuItem>
      ))}
    </ul>
  );
};
