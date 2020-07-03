import React from 'react';
import cn from 'classnames';
import './color-indicator.scss';

export const ColorIndicator = ({
  color,
  type = 'button' || 'indicator',
  size = 's' || 'm',
  className,
  onClick,
}) => {
  const renderComponent = '';

  return (
    <button
      className={cn(
        'color-indicator',
        { [`color-indicator--${color}`]: color },
        { [`color-indicator--${size}`]: size },
        className,
      )}
      onClick={onClick}
    />
  );
};
