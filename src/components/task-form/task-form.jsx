import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import Form from '../form/Form';
import { Input, Textarea } from '../field';
import Button from '../button/button';
import { addTaskAction } from '../../store/actions';
import './task-form.scss';

const TaskForm = () => {
  const initialState = {
    id: null,
    title: '',
    description: '',
    timestamp: null,
    done: false,
    liked: false,
  };
  const [task, setTask] = useState(initialState);
  const dispatch = useDispatch();

  const addTask = useCallback(
    (task) => {
      dispatch(addTaskAction(task));
    },
    [dispatch],
  );

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
        id: v4(),
        timestamp: Date.now(),
      });
      setTask(initialState);
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
        />
        <Textarea
          type="text"
          name="description"
          placeholder="Описание"
          value={task.description}
          onChange={onChange}
        />
        <div className="task-form__buttons mt-3">
          <Button theme="primary">Создать</Button>
        </div>
      </Form>
    </div>
  );
};

export default TaskForm;
