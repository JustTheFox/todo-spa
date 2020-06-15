import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BoardPage } from '../pages/board-page';
import { ROUTES } from './const';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} component={BoardPage} exact />
      </Switch>
    </BrowserRouter>
  );
};
