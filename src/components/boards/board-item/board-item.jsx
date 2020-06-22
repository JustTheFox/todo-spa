import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
// import { Button } from '../../button';
import './board-item.scss';

export const BoardItem = ({ id, color, children, isCreate, onDelete }) => {
  const handleDelete = () => onDelete(id);
  const renderComponent = () => {
    if (!isCreate) {
      return (
        <Link
          to={`/boards/${id}`}
          className="board-item__wrapper board-item__link"
        >
          <span className="board-item__title">{children}</span>
          <div className="board-item__buttons">
            {/* <Button>Add to favorites</Button> */}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </Link>
      );
    } else {
      return (
        <button
          type="button"
          className="board-item__wrapper board-item__button"
        >
          {children}
        </button>
      );
    }
  };
  return (
    <li
      className={cn('board-item', {
        [color]: color,
      })}
    >
      {renderComponent()}
    </li>
  );
};
