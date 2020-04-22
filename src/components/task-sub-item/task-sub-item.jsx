import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleListItemAction } from '../../store/actions';
import './task-sub-item.scss';

const TaskSubItem = ({ taskId, itemId, itemTitle, itemDone }) => {
  const dispatch = useDispatch();
  const onListItemChange = useCallback(() => {
    dispatch(toggleListItemAction(taskId, itemId));
  }, [dispatch, taskId, itemId]);

  return (
    <li className="task-sub-item">
      <input
        type="checkbox"
        name={`_item${itemId.toString()}`}
        checked={itemDone}
        className="mr-3"
        onChange={onListItemChange}
      />
      {itemTitle}
    </li>
  );
};

export default TaskSubItem;
