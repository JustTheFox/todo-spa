import React from 'react';
import './content.scss';

const Content = ({ children }) => {
  return <main className="content">{children}</main>;
};

export default Content;
