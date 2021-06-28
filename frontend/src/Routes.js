/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  
} from './layouts';

import {
  IndexView,
  CareerOpening as CareerOpeningView,
  Service as ServiceView,
  JobListing as JobListingView,
  About as AboutView,
  SignupSimple as SignupSimpleView,
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
        path={`/career-opening/:id`}
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CareerOpeningView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/service"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ServiceView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/job-listing"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={JobListingView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/about"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        )}
      />

<Route
        exact
        path="/signup-simple"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={SignupSimpleView}
            layout={MinimalLayout}
          />
        )}
      />

      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
