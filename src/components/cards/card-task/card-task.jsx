import React, { useState } from 'react';
import cn from 'classnames';
import { Button } from '../../button';
import { Input } from '../../field';
import { IconPensil, IconTrash, IconCheck, IconClose } from '../../icons';
import './card-task.scss';

export const CardTask = ({ id, listId, onEdit, onDelete, children }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(children);

  const handleEdit = () => setIsEdit(true);
  const handleCanselEdit = () => {
    setIsEdit(false);
    setEditTitle(children);
  };

  const handleEditInput = ({ target }) => setEditTitle(target.value);

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    if (editTitle.trim() === children) {
      handleCanselEdit();
    } else {
      onEdit(id, {
        listId,
        title: editTitle,
      });
      setIsEdit(false);
      setEditTitle(editTitle);
    }
  };

  const handleDelete = () => onDelete(listId, id);

  const renderComponent = () => {
    if (!isEdit) {
      return (
        <>
          <p className="card-task__title">{children}</p>
          <div className="card-task__buttons">
            <Button type="button" title="Edit" icon onClick={handleEdit}>
              <IconPensil />
            </Button>
            <Button type="button" title="Delete" icon onClick={handleDelete}>
              <IconTrash />
            </Button>
          </div>
        </>
      );
    }
    return (
      <form className="card-task__form" onSubmit={handleSubmitEdit}>
        <Input value={editTitle} onChange={handleEditInput} className="mb-0" />
        <div className="card-task__buttons">
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
    <li
      className={cn('card-task', {
        'card-task--edit': isEdit,
      })}
    >
      {renderComponent()}
    </li>
  );
};
