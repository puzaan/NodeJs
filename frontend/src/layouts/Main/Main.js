import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    landings: {
      title: 'Services',
      id: 'landing-pages',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Coworking',
              href: '/coworking',
            },
            {
              title: 'Rental',
              href: '/rental',
            },
            {
              title: 'Job Listing',
              href: '/job-listing',
            },
            {
              title: 'E-Learning',
              href: '/e-learning',
            },
            {
              title: 'E-commerce',
              href: '/e-commerce',
            },
            {
              title: 'Expo',
              href: '/expo',
            },
          ],
        },
        apps: {
          groupTitle: 'Apps',
          pages: [
            {
              title: 'Desktop App',
              href: '/desktop-app',
            },
            {
              title: 'Mobile App',
              href: '/mobile-app',
            },
          ],
        },
        web: {
          groupTitle: 'Web',
          pages: [
            {
              title: 'Marketing',
              href: '/',
            },
            {
              title: 'Overview',
              href: '/home',
            },
            {
              title: 'Basic',
              href: '/web-basic',
            },
            {
              title: 'Service',
              href: '/service',
            },
            {
              title: 'Startup',
              href: '/startup',
            },
            {
              title: 'Enterprise',
              href: '/enterprise',
            },
            {
              title: 'Cloud Hosting',
              href: '/cloud-hosting',
            },
            {
              title: 'Agency',
              href: '/agency',
            },
            {
              title: 'Design Company',
              href: '/design-company',
            },
            {
              title: 'Logistics',
              href: '/logistics',
            },
          ],
        },
      },
    },




    pages: {
      title: 'Careers',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [
            {
              title: 'Lising',
              href: '/career-listing',
            },
            {
              title: 'Lising Minimal',
              href: '/career-listing-minimal',
            },
            {
              title: 'Opening',
              href: '/career-opening',
            },
          ],
        },
      },
    },



    account: {
      title: 'Blog',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/account/?pid=general',
            },
            {
              title: 'Security',
              href: '/account/?pid=security',
            },
            {
              title: 'Notifications',
              href: '/account/?pid=notifications',
            },
            {
              title: 'Billing',
              href: '/account/?pid=billing',
            },
          ],
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [
            {
              title: 'Simple',
              href: '/signup-simple',
            },
            {
              title: 'Cover',
              href: '/signup-cover',
            },
          ],
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [
            {
              title: 'Simple',
              href: '/signin-simple',
            },
            {
              title: 'Cover',
              href: '/signin-cover',
            },
          ],
        },
        password: {
          groupTitle: 'Password reset',
          pages: [
            {
              title: 'Simple',
              href: '/password-reset-simple',
            },
            {
              title: 'Cover',
              href: '/password-reset-cover',
            },
          ],
        },
        error: {
          groupTitle: 'Error',
          pages: [
            {
              title: 'Simple',
              href: '/not-found',
            },
            {
              title: 'Cover',
              href: '/not-found-cover',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
