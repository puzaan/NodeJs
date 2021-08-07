import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formDetails } from '../action/FormDetailAction';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBars from './appBar';
import Alerts from './Alert';
import Loder from "./Loder";

const useStyles = makeStyles((theme) => ({
    root: {

      minWidth: 275,
      width: '90%',
      
      // margin: "50px",
      borderRadius: '10px',
      padding:"50px"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    btn: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));
const FormById = ({history, match}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const formById = useSelector((state) => state.formById);
    const {form} = formById;
    useEffect(() => {
        dispatch(formDetails(match.params.id));
       
    }, [dispatch, match.params.id]);

    const goBack = (e) => {
      history.push("/form");
    };
    return (
        <div >
          <AppBars />
          <div className={classes.root}>
          <Typography variant="h4"> User Form Details</Typography>
            <Card >
      <CardContent>
        <Typography  variant="h5" component="h2">
          Name: {form.fullName}
        </Typography>
        
        <Typography variant="h5" component="h2">
          Email : {form.email}
        </Typography>
        <Typography variant="h5" component="h2">
          Contact No : {form.phone}
        </Typography>
        <Typography variant="h5" component="h2">
          Education : {form.education}
        </Typography>
        <Typography variant="h5" component="h2">
          College : {form.college}
        </Typography>
        <Typography variant="h5" component="h2">
          Course to Enroll : {form.course}
        </Typography>
        
        <Typography variant="h5" component="h2">
         Form Filled Date : {form.createdAt}
        </Typography>
        <Typography variant="h5" component="h2">
          Message : {form.message}
        </Typography>
      </CardContent>
      <div className= {classes.btn}>
      <CardActions>
        <Button size="small" onClick={goBack}>Go Back</Button>
      </CardActions>
      <CardActions>
        <Button size="small" >delete</Button>
      </CardActions>
      </div>
    </Card>
    </div>
            
        </div>
    )
}

export default FormById
