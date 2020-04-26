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
    <li className="form-check task-sub-item">
      <label className="form-check-label">
        <input
          type="checkbox"
          name={`_item${itemId.toString()}`}
          checked={itemDone}
          className="form-check-input mr-3"
          onChange={onListItemChange}
        />
        {itemTitle}
      </label>
    </li>
  );
};

export default TaskSubItem;
