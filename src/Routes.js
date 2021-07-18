/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout } from './layouts';
import {
  Button,
} from '@material-ui/core';

import {
  IndexView,
  Exchange,
  NFT
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
       <Route
        exact
        path="/nft"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NFT}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/whitepaper"
        render={matchProps => (
          <iframe src="/assets/files/GodsUniverseWhitepaper_en.pdf"
            width="100%" height='9500px' style={{
              border: 'none'
            }}></iframe>
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
