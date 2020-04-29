import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { parseDate } from '../../services/utils';
import Button from '../button/button';
import {
  deleteTaskAction,
  likeTaskAction,
  toggleTaskAction,
} from '../../store/actions/tasks';

import {
  IconCheck,
  IconCheckAll,
  IconFavorite,
  IconTrash,
} from '../icons/icons';
import './task-item.scss';

const TaskItem = ({ id, title, description, timestamp, done, liked }) => {
  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    dispatch(deleteTaskAction(id));
  }, [dispatch, id]);
  const onToggle = useCallback(() => {
    dispatch(toggleTaskAction(id, done));
  }, [dispatch, id, done]);
  const onLike = useCallback(() => {
    dispatch(likeTaskAction(id, liked));
  }, [dispatch, id, liked]);

  const doneStyle = done ? 'success' : 'primary';
  const likeStyle = liked ? 'danger' : 'primary';

  const { date, time } = parseDate(timestamp);

  return (
    <li className="task-item">
      <h2
        className={cn('task-item__title', {
          'task-item__title--done': done,
        })}
      >
        {title}
      </h2>
      {description && <p className="task-item__description">{description}</p>}
      <div className="task-item__footer">
        {date && time && (
          <span className="task-item__date">{`${date} ${time}`}</span>
        )}
        <div className="task-item__buttons">
          <Button
            type="button"
            theme={doneStyle}
            className="mr-2"
            onClick={onToggle}
          >
            {done ? <IconCheckAll /> : <IconCheck />}
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

export default TaskItem;
