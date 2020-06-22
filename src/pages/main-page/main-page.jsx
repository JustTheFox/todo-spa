import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBoardAction } from '../../store/actions/boards';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
import { fetchBoards } from '../../store/actions/boards';
import { Button } from '../../components/button';
import { BoardList, BoardItem } from '../../components/boards';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);

  const deleteBoard = useCallback(
    (id) => {
      dispatch(deleteBoardAction(id));
    },
    [dispatch],
  );

  const isFetching = useSelector((store) => store.boards.isFetching);
  const boards = useSelector((store) => store.boards.items) || [];

  console.log(boards);

  return (
    <Page>
      <Title>Boards</Title>
      {isFetching && <p>Loading...</p>}
      <BoardList>
        {boards.map(({ id, title, color = '' }) => (
          <BoardItem
            key={id}
            id={id}
            color={color}
            onDelete={() => deleteBoard(id)}
          >
            {title}
          </BoardItem>
        ))}
      </BoardList>
    </Page>
  );
};
