import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts({severity, children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="outlined" severity={severity}>{children}</Alert>
    </div>
  );
}