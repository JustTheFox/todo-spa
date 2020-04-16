import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import Form from '../Form/Form';
import Field from '../Field/Field';
import Button from '../Button/Button';
import { addTaskAction } from '../../store/actions';
import './task-form.scss';

const TaskForm = () => {
  const initialState = {
    id: null,
    date: null,
    title: '',
    description: '',
    completed: false,
    postponed: false,
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
    addTask({
      ...task,
      id: uuid(),
      date: new Date(),
    });
    setTask(initialState);
  };

  return (
    <div className="task-form">
      <Form onSubmit={onSubmit}>
        <Field
          type="text"
          name="title"
          value={task.title}
          onChange={onChange}
        />
        <Field
          type="text"
          name="description"
          value={task.description}
          onChange={onChange}
        />
        <Button className="mt-3">Add</Button>
      </Form>
    </div>
  );
};

export default TaskForm;
