import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import {
  // editListAction,
  // deleteListAction,
  createTaskAction,
  // editTaskAction,
  deleteTaskAction,
} from '../../../store/actions/lists';
import { Button } from '../../button';
import { Input } from '../../field';
import './card-item.scss';

export const CardItem = ({ id, title, tasks = [], onDelete }) => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const createTask = useCallback(
    (item) => {
      dispatch(createTaskAction(item));
    },
    [dispatch],
  );

  const handleTaskInput = ({ target }) => setNewTask(target.value);

  const handleCreateTask = () => setShowCreateTask(true);
  const handleCanselCreateTask = () => setShowCreateTask(false);
  const handleSubmitTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    createTask({
      title: newTask,
      id,
    });
    handleCanselCreateTask();
  };

  const handleDelete = () => onDelete(id);

  return (
    <div className="card-item">
      <div className="card-item__head">
        <h2 className="card-item__title">{title}</h2>
        {/* <div className="card-item__buttons">
        <Button>Edit</Button>
        <button onClick={handleDelete}>Delete</button>
      </div> */}
      </div>
      <div className="card-item__body">
        <Button type="button" onClick={handleCreateTask}>
          Add task
        </Button>
        {showCreateTask && (
          <form onSubmit={handleSubmitTask}>
            <Input
              type="text"
              name="task"
              value={newTask}
              onChange={handleTaskInput}
            />
            <Button>Add</Button>
            <Button type="button" onClick={handleCanselCreateTask}>
              Cancel
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
