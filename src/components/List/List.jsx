import React from 'react';
import './list.scss';

const List = ({ children }) => {
  return <ul className="list">{children}</ul>;
};

export default List;
