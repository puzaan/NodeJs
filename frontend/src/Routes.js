/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout, DocsLayout } from './layouts';

import {
  Home as HomeView,
  IndexView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Service as ServiceView,
  JobListing as JobListingView,
  About as AboutView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  Documentation as DocumentationView,

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
        path="/home"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-listing"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CareerListingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-listing-minimal"
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
        path="/career-opening"
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
        path="/contact-page"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactPageView}
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
        path="/contact-sidebar-map"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactPageSidebarMapView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contact-page-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactPageCoverView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/documentation"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={DocumentationView}
            layout={DocsLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;


