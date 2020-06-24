import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
// import { Button } from '../../button';
import './board-item.scss';

export const BoardItem = ({ id, color, children, isCreate, onClick }) => {
  const handleDelete = () => onClick(id);
  const renderComponent = () => {
    if (!isCreate) {
      return (
        <Link
          to={`/boards/${id}`}
          className="board-item__wrapper board-item__link"
        >
          <h2 className="board-item__title">{children}</h2>
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
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
  };
  return (
    <li
      className={cn('board-item', {
        color: color,
      })}
    >
      {renderComponent()}
    </li>
  );
};
