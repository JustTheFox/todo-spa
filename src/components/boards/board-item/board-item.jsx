import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Button } from '../../button';
import './board-item.scss';
import { IconFavorite, IconTrash } from '../../icons';

export const BoardItem = ({
  id,
  color,
  children,
  favorite,
  isCreate,
  onToggle,
  onDelete,
  onCreate,
}) => {
  const handleToggle = () => onToggle(id, favorite);
  const handleDelete = () => onDelete(id);
  const renderComponent = () => {
    if (!isCreate) {
      return (
        <>
          <Link
            to={`/boards/${id}`}
            className="board-item__wrapper board-item__link"
          >
            <h2 className="board-item__title">{children}</h2>
          </Link>
          <div className="board-item__buttons">
            <Button
              type="button"
              onClick={handleToggle}
              title="Add to favorites"
            >
              <IconFavorite />
            </Button>
            <Button type="button" onClick={handleDelete} title="Delete">
              <IconTrash />
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <button
          type="button"
          className="board-item__wrapper board-item__button"
          onClick={onCreate}
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
