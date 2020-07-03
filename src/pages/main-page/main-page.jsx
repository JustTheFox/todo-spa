import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBoardAction } from '../../store/actions/boards';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
import { fetchBoardsAction } from '../../store/actions/boards';
import { BoardList, BoardItem } from '../../components/boards';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoardsAction());
  }, []);

  const toggleBoard = useCallback(
    (id) => {
      dispatch(toggleBoardAction(id));
    },
    [dispatch],
  );

  const isFetching = useSelector((store) => store.boards.isFetching);
  const boards = useSelector((store) => store.boards.items) || [];

  return (
    <Page>
      <Title>Boards</Title>
      {isFetching && <p>Loading...</p>}
      <BoardList>
        {boards.map(({ id, title, favorite, color = '' }) => (
          <BoardItem
            key={id}
            id={id}
            favorite={favorite}
            color={color}
            onToggle={toggleBoard}
          >
            {title}
          </BoardItem>
        ))}
      </BoardList>
    </Page>
  );
};
