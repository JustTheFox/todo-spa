import React, { useState } from 'react';
import cn from 'classnames';
import { ColorFieldItem } from './color-field-item';
import './color-field.scss';

export const ColorField = ({ items = [], active, onChange, className }) => {
  const [activeColor, setActiveColor] = useState(active || 1);

  const onColorChange = (id) => {
    setActiveColor(id);
    onChange(id);
  };

  return (
    <div className={cn('color-field', className)}>
      {items.map(({ id, hex }) => (
        <ColorFieldItem
          key={id}
          id={id}
          name="color"
          color={hex}
          active={activeColor}
          onChange={onColorChange}
        />
      ))}
    </div>
  );
};
