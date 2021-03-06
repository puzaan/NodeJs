
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import {
  Main as MainLayout,
} from './layouts';

import {
  IndexView,
  CareerOpening as CareerOpeningView,
  Service as ServiceView,
  About as AboutView,
  SignupSimple as SignupSimpleView,
  CareerListingMinimal as CareerListingMinimalView,
  CourseDetail as CourseDetails,
  EnrollForm as EnrollForm,
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
        path={`/enroll`}
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={EnrollForm}
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
            layout={MainLayout}
          />
        )}
      />

<Route
        exact
        path="/career-list"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CareerListingMinimalView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/course-detail/:id"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CourseDetails}
            layout={MainLayout}
          />
        )}
      />
      

      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
