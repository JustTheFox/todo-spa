import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
// import { Button } from '../../button';
import './card-task.scss';

export const CardTask = ({ id, title, isCreate, onClick }) => {
  const handleDelete = () => onClick(id);

  return (
    <div className="board-item">
      <h2 className="board-item__title">{title}</h2>

      {/* <div className="board-item__buttons">
        <Button>Edit</Button>
        <button onClick={handleDelete}>Delete</button>
      </div> */}
    </div>
  );
};
