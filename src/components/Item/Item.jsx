import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import Button from '../Button/Button';
import {
  deleteTaskAction,
  likeTaskAction,
  toggleTaskAction,
} from '../../store/actions';
import { parseDate } from '../../services/utils';
import './item.scss';
import { IconFavorite, IconTrash } from '../Icons/Icons';

const Item = ({ id, title, description, timestamp, done, liked }) => {
  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    dispatch(deleteTaskAction(id));
  }, [dispatch, id]);
  const onToggle = useCallback(() => {
    dispatch(toggleTaskAction(id));
  }, [dispatch, id]);
  const onLike = useCallback(() => {
    dispatch(likeTaskAction(id));
  }, [dispatch, id]);

  const doneStyle = done ? 'success' : 'primary';
  const likeStyle = liked ? 'danger' : 'primary';

  const { date, time } = parseDate(timestamp);

  return (
    <li className="item">
      <h2
        className={cn('item__title', {
          'item__title--done': done,
        })}
      >
        {title}
      </h2>
      {description && <p className="item__description">{description}</p>}
      <div className="item__footer">
        {date && time && (
          <span className="item__date">{`${date} ${time}`}</span>
        )}
        <div className="item__buttons">
          <Button
            type="button"
            theme={doneStyle}
            className="mr-2"
            onClick={onToggle}
          >
            {done ? 'Не сделано' : 'Сделано'}
          </Button>
          <Button
            type="button"
            theme={likeStyle}
            className="mr-2"
            onClick={onLike}
          >
            <IconFavorite />
          </Button>
          <Button type="button" className="mr-2" onClick={onDelete}>
            <IconTrash />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Item;
