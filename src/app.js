import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Item from './components/Item/Item';
import Page from './layout/Page/Page';
import TaskForm from './components/TaskForm/TaskForm';
import List from './components/List/List';

const App = () => {
  const tasks = useSelector((store) => store.tasks, shallowEqual);

  return (
    <Page>
      <TaskForm />
      <List>
        {tasks.map(({ id, ...props }) => (
          <Item key={id} id={id} {...props} />
        ))}
      </List>
    </Page>
  );
};

export default App;
