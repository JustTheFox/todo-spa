import React from 'react';
import cn from 'classnames';
import './title.scss';

export const Title = ({ tagName, size = 'large', className, children }) => {
  const Tag = tagName || 'h1';

  return (
    <Tag
      className={cn(
        'title',
        {
          'title--small': size === 'small',
          'title--medium': size === 'medium',
          'title--large': size === 'large',
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
};
