import React from 'react';
import './task-list.scss';

const TaskList = ({ children }) => {
  return <ul className="task-list">{children}</ul>;
};

export default TaskList;
