import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '../pages/main-page';
import { BoardPage } from '../pages/board-page';
import { ROUTES } from './const';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <MainPage />
        </Route>
        <Route path={ROUTES.BOARDS}>
          <BoardPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
