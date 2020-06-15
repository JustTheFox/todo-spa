import React from 'react';
import './title.scss';

export const Title = ({ tagName, children }) => {
  const Tag = tagName || 'h1';

  return <Tag className={cl()}>{children}</Tag>;
};
