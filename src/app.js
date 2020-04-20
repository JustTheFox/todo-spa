import React, { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Page from './layout/Page/Page';
import TaskForm from './components/TaskForm/TaskForm';
import FilterList from './components/Filter/FilterList';
import List from './components/List/List';
import Item from './components/Item/Item';
import { toggleThemeAction } from './store/actions';
import { getFilteredTasks } from './store/selectors';

const App = () => {
  const theme = useSelector((store) => store.theme, shallowEqual);
  const filter = useSelector((store) => store.filter);
  const tasks = useSelector(
    (store) => getFilteredTasks(store.tasks, filter),
    shallowEqual,
  );

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
      <FilterList />
      <List>
        {tasks.map(({ id, ...props }) => (
          <Item key={id} id={id} {...props} />
        ))}
      </List>
    </Page>
  );
};

export default App;
