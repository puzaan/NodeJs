import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, ContactForm } from 'components/organisms';
import {
  About,
  Features,
  Integrations,
} from './components';
import {Reviews} from '../IndexView/components/index'
import {
  partners,
  reviews,
  integrations,
  customizations,
} from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: '#024b42',
    width: 55,
    height: 55,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:hover': {
      background: '#003333',
    },
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
    
  },
}));

const Service = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

 

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
        <About data={partners}  className={classes.pagePaddingTop}/>
        <Section>
          <Divider />
          <Divider />
          <Divider />
        </Section>
        <Features data={customizations} />
        <Section>
          <Divider />
        </Section>
        <Integrations data={integrations} />
        <Section>
          <Divider />
        </Section>
        <Reviews data={reviews} />
        </>
      </Section>
      <Divider />
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
            
          >
            <div className={classes.contactForm}>
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Service;
