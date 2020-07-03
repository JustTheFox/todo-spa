import React from 'react';
import cn from 'classnames';
import './color-field.scss';

export const ColorFieldItem = ({
  className,
  id,
  name,
  color = '',
  active,
  onChange,
}) => {
  const changeHandler = () => onChange(id);

  return (
    <div className={cn('color-field-item', className)}>
      <input
        type="radio"
        className="color-field-item__input"
        id={`${name}-${id}`}
        name={name}
        checked={id === active}
        value={id}
        onChange={changeHandler}
      />
      <label
        htmlFor={`${name}-${id}`}
        className="color-field-item__label"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};
