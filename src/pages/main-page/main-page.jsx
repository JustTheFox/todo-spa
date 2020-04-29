import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createFilter } from 'react-search-input';
import Page from '../../layout/page/page';
import TaskForm from '../../components/task-form/task-form';
import FilterList from '../../components/filter/filter-list';
import TaskList from '../../components/task-list/task-list';
import TaskItem from '../../components/task-item/task-item';
import { getFilteredTasks } from '../../store/selectors';
import { fetchTasks } from '../../store/actions/tasks';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    // eslint-disable-next-line
  }, []);

  const loading = useSelector((store) => store.tasks.loading);
  const search = useSelector((store) => store.search);
  const filter = useSelector((store) => store.filter) || [];
  const tasks =
    useSelector(
      (store) => getFilteredTasks(store.tasks.taskList, filter),
      shallowEqual,
    ) || [];

  const filteredList = tasks
    .filter(createFilter(search, ['title', 'description']))
    .map(({ id, ...props }) => <TaskItem key={id} id={id} {...props} />);

  const renderTaskList = () =>
    filteredList.length === 0 ? (
      <p>Задачи не найдены</p>
    ) : (
      <TaskList>{filteredList}</TaskList>
    );

  return (
    <Page>
      <TaskForm />
      <FilterList />
      {loading && <p>Загрузка...</p>}
      {!loading && renderTaskList()}
    </Page>
  );
};

export default MainPage;
