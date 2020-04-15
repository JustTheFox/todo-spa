import React from 'react';
import bem from 'config/bem';
import './Title.scss';

const Title = ({ tagName, children }) => {
  const cl = bem('title');
  const Tag = tagName || 'h1';

  return <Tag className={cl()}>{children}</Tag>;
};

export default Title;
