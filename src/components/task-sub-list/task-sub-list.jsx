import React from 'react';
import './task-sub-list.scss';

const TaskSubList = ({ children }) => {
  return <ul className="task-sub-list">{children}</ul>;
};

export default TaskSubList;
