import React, { Children, useState, useCallback } from 'react';
// import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { createTaskAction } from '../../../store/actions/lists';
import { Button } from '../../button';
import { Input } from '../../field';
import { IconPensil, IconTrash, IconCheck, IconClose } from '../../icons';
import './card-item.scss';

export const CardItem = ({
  id,
  boardId,
  title,
  onEdit,
  onDelete,
  children,
}) => {
  const [newTask, setNewTask] = useState('');
  const [editTitle, setEditTitle] = useState(title);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = () => setIsEdit(true);
  const handleCanselEdit = () => {
    setIsEdit(false);
    setEditTitle(title);
  };

  const handleEditInput = ({ target }) => setEditTitle(target.value);

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    if (editTitle.trim() === title) {
      handleCanselEdit();
    } else {
      onEdit(id, {
        boardId: Number(boardId),
        title: editTitle,
      });
      setIsEdit(false);
      setEditTitle(editTitle);
    }
  };

  const createTask = useCallback(
    (item) => {
      dispatch(createTaskAction(item));
    },
    [dispatch],
  );

  const handleTaskInput = ({ target }) => setNewTask(target.value);

  const handleCreateTask = () => setShowCreateTask(true);
  const handleCanselCreateTask = () => {
    setShowCreateTask(false);
    setNewTask('');
  };
  const handleSubmitTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) {
      handleCanselCreateTask();
    } else {
      createTask({
        listId: id,
        title: newTask,
      });
      handleCanselCreateTask();
    }
  };

  const handleDelete = () => onDelete(id);

  const renderHead = () => {
    if (!isEdit) {
      return (
        <div className="card-item__head">
          <h2 className="card-item__title">{title}</h2>
          <div className="card-item__buttons">
            <Button type="button" title="Edit" icon onClick={handleEdit}>
              <IconPensil />
            </Button>
            <Button type="button" title="Delete" icon onClick={handleDelete}>
              <IconTrash />
            </Button>
          </div>
        </div>
      );
    }
    return (
      <form className="card-item__head" onSubmit={handleSubmitEdit}>
        <Input value={editTitle} onChange={handleEditInput} className="mb-0" />
        <div className="card-item__buttons">
          <Button title="Submit" icon>
            <IconCheck />
          </Button>
          <Button type="button" title="Cancel" icon onClick={handleCanselEdit}>
            <IconClose />
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div className="card-item">
      {renderHead()}
      <div className="card-item__body">
        {children && Children.count(children) > 0 && (
          <ul className="card-item__list">{children}</ul>
        )}
        {!showCreateTask && (
          <Button
            type="button"
            className="card-item__add"
            onClick={handleCreateTask}
          >
            Add task
          </Button>
        )}
        {showCreateTask && (
          <form onSubmit={handleSubmitTask}>
            <Input
              type="text"
              name="task"
              value={newTask}
              onChange={handleTaskInput}
            />
            <Button>Submit</Button>
            <Button type="button" onClick={handleCanselCreateTask}>
              Cancel
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
