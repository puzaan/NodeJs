import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Typography,
  Card,
  Divider,
} from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AlarmIcon from '@material-ui/icons/Alarm';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles(theme => ({
  coverContent: {
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      top: '50%',
      //  transform: 'translateY(-50%)',
      padding: theme.spacing(2),
    },
  },
  line: {
    display: 'flex',
  },
  space: {
    margin: '20px',
  },
  divider: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SidePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.coverContent}>
      <Box
        marginBottom={2}
        justifyContent="space-evenly"
        alignItems="centere"
        padding={2}
        border="1px solid #ccc"
        borderRadius="4px"
        width="350px"
        height="100%"
      >
        <Typography variant="h5" gutterBottom>
          Upcoming Class Schedule
        </Typography>
        <Card className={classes.space}>
          <Grid className={classes.line}>
            <DateRangeIcon />
            <Typography variant="h5" gutterBottom>
              11 th jul, 2021 Sunday
            </Typography>
          </Grid>
          <Grid className={classes.line}>
            <AlarmIcon />
            <Typography variant="subtitle" gutterBottom>
              09:30 Am - 11:00 AM Sunday
            </Typography>
          </Grid>
        </Card>
        <Card className={classes.space}>
          <Grid className={classes.line}>
            <DateRangeIcon />
            <Typography variant="h5" gutterBottom>
              11 th jul, 2021 Sunday
            </Typography>
          </Grid>
          <Grid className={classes.line}>
            <AlarmIcon />
            <Typography variant="subtitle" gutterBottom>
              09:30 Am - 11:00 AM Sunday
            </Typography>
          </Grid>
        </Card>
      </Box>
      <Box
        marginBottom={2}
        justifyContent="space-evenly"
        alignItems="centere"
        padding={2}
        border="1px solid #ccc"
        borderRadius="4px"
        width="350px"
        height="100%"
      >
        <Typography variant="h5" gutterBottom>
          Related Courses
        </Typography>
        <List className={classes.divider}>
          <ListItem>
            <ListItemAvatar>
                <ImageIcon />
              
            </ListItemAvatar>
            <ListItemText primary="Java" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
                <ImageIcon /> 
            </ListItemAvatar>
            <ListItemText primary="PHP" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              
                <ImageIcon />
              
            </ListItemAvatar>
            <ListItemText primary="MERN Stack"/>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default SidePage;
