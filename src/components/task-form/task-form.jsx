import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../form/form';
import { Input, Textarea } from '../field';
import Button from '../button/button';
import { IconText } from '../icons/icons';
import { addTaskAction } from '../../store/actions/tasks';
import './task-form.scss';

const TaskForm = () => {
  const initialStateTask = {
    id: null,
    title: '',
    description: '',
    list: [],
    timestamp: null,
    done: false,
    liked: false,
  };

  const [task, setTask] = useState(initialStateTask);
  const [addComment, setAddComment] = useState(false);
  const dispatch = useDispatch();

  const addTask = useCallback(
    (item) => {
      dispatch(addTaskAction(item));
    },
    [dispatch],
  );

  const handleAddComment = () => {
    setAddComment(!addComment);
    if (task.description !== '') {
      setTask({
        ...task,
        description: '',
      });
    }
  };

  const onChange = ({ target }) => {
    setTask((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (task.title.trim()) {
      addTask({
        ...task,
        timestamp: Date.now(),
      });
      setTask(initialStateTask);
    }
  };

  return (
    <div className="task-form">
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Заголовок"
          value={task.title}
          onChange={onChange}
          maxLength={150}
        />
        {addComment && (
          <Textarea
            type="text"
            name="description"
            placeholder="Заметка"
            value={task.description}
            onChange={onChange}
            maxLength={500}
          />
        )}
        <div className="task-form__buttons mt-3">
          <Button
            type="button"
            title="Добавить заметку"
            className="mr-2"
            theme="primary"
            icon
            onClick={handleAddComment}
          >
            <IconText />
          </Button>
          <Button theme="primary">Создать</Button>
        </div>
      </Form>
    </div>
  );
};

export default TaskForm;
