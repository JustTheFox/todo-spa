import React, { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Item from './components/Item/Item';
import Page from './layout/Page/Page';
import TaskForm from './components/TaskForm/TaskForm';
import List from './components/List/List';
import { toggleThemeAction } from './store/actions';

const App = () => {
  const theme = useSelector((store) => store.theme, shallowEqual);
  const tasks = useSelector((store) => store.tasks, shallowEqual);
  const dispatch = useDispatch();

  const onChangeTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Page theme={theme} onChangeTheme={onChangeTheme}>
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
