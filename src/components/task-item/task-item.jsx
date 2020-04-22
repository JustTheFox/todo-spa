import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import Button from '../button/button';
import {
  deleteTaskAction,
  likeTaskAction,
  toggleTaskAction,
} from '../../store/actions';
import { parseDate } from '../../services/utils';
import './task-item.scss';
import {
  IconCheck,
  IconCheckAll,
  IconFavorite,
  IconTrash,
} from '../icons/icons';
import TaskSubList from '../task-sub-list/task-sub-list';
import TaskSubItem from '../task-sub-item/task-sub-item';

const TaskItem = ({
  id,
  title,
  description,
  list = [],
  timestamp,
  done,
  liked,
}) => {
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
    <li className="task-item">
      <h2
        className={cn('task-item__title', {
          'task-item__title--done': done,
        })}
      >
        {title}
      </h2>
      {description && <p className="task-item__description">{description}</p>}
      {list.length > 0 && (
        <TaskSubList>
          {list.map(({ id: itemId, title: itemTitle, done: itemDone }) => (
            <TaskSubItem
              key={itemId}
              taskId={id}
              itemId={itemId}
              itemTitle={itemTitle}
              itemDone={itemDone}
              className="task-item__list-item"
            />
          ))}
        </TaskSubList>
      )}
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
