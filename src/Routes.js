/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  IndexView,
  Exchange as Exchange
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/exchange"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={Exchange}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
