import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { EnrollForm } from '../../../../action/enrollAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Message } from 'components/message.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '10px',
  },
}));

const Form = () => {
  const classes = useStyles();

  const [checkbox, setcheckbox] = useState({
    MachineLearning: true,
    Python: false,
    Database: false,
    Flutter: false,
    JavaScriptFundamental: false,
    Wordpress: false,
    QualityAssurance: false,
    ReactDevelopment: false,
    MERN_MEVN: false,
    DoteNet: false,
    UI_UX: false,
    IOT: false,
    DigitalMarketing: false,
  });

  const handlecheck = e => {
    setcheckbox({ ...checkbox, [e.target.name]: e.target.checked });
    console.log(e.target.name);
  };
  const {
    MachineLearning,
    Python,
    Database,
    Flutter,
    JavaScriptFundamental,
    Wordpress,
    QualityAssurance,
    ReactDevelopment,
    MERN_MEVN,
    DoteNet,
    UI_UX,
    IOT,
    DigitalMarketing,
  } = checkbox;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [message, setMessage] = useState('');
  const [education, setEducation] = useState('Bachlores');

  const dispatch = useDispatch();
const enrollList = useSelector((state)=> state.enrollList)
const {loading, error, FormData} = enrollList;
const history = useHistory();

useEffect(() => {
  if (FormData) {
    history.push('/')
    }
  
});
  const handleSubmit = event => {
    event.preventDefault();
      dispatch(EnrollForm(fullName, email, phone, education, college, message));
  };

  return (
    <div className={classes.root}>
      
      <form name="password-reset-form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Full Name *</Typography>
            <TextField
              placeholder="Full name *"
              variant="outlined"
              size="medium"
              name="fullname"
              onChange={e => setFullName(e.target.value)}
              value={fullName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Email *</Typography>
            <TextField
              placeholder="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              fullWidth
              autoComplete="off"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">Phone No *</Typography>
            <TextField
              placeholder="Phone No *"
              variant="outlined"
              size="medium"
              name="phone"
              onChange={e => setPhone(e.target.value)}
              value={phone}
              fullWidth
              type="number"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography variant="h5">
                In which course you want to enroll in? *
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={MachineLearning}
                      onChange={handlecheck}
                      name="MachineLearning"
                    />
                  }
                  label="Machine Learning (Foundation/Intermediate/Advanced)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Python}
                      onChange={handlecheck}
                      name="Python"
                    />
                  }
                  label="Python (Django)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Database}
                      onChange={handlecheck}
                      name="Database"
                    />
                  }
                  label="Database (Beginner to advance complete solution)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Flutter}
                      onChange={handlecheck}
                      name="Flutter"
                    />
                  }
                  label="Flutter (Complete Application Development)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={JavaScriptFundamental}
                      onChange={handlecheck}
                      name="JavaScriptFundamental"
                    />
                  }
                  label="JavaScript Fundamental"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Wordpress}
                      onChange={handlecheck}
                      name="Wordpress"
                    />
                  }
                  label="Wordpress"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={QualityAssurance}
                      onChange={handlecheck}
                      name="QualityAssurance"
                    />
                  }
                  label="Quality Assurance QA (Beginner to Advance)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ReactDevelopment}
                      onChange={handlecheck}
                      name="ReactDevelopment"
                    />
                  }
                  label="React Development (In Typescript)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={MERN_MEVN}
                      onChange={handlecheck}
                      name="MERN_MEVN"
                    />
                  }
                  label="MERN/MEVN (Full stack development)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={DoteNet}
                      onChange={handlecheck}
                      name="DoteNet"
                    />
                  }
                  label=".Net (Enterprise Web Application Development)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={UI_UX}
                      onChange={handlecheck}
                      name="UI_UX"
                    />
                  }
                  label="UI/UX Essential Training"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={IOT} onChange={handlecheck} name="IOT" />
                  }
                  label="IOT Training (complete guide to IOT)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={DigitalMarketing}
                      onChange={handlecheck}
                      name="DigitalMarketing"
                    />
                  }
                  label="Digital Marketing"
                />
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography variant="h5">Your Qualification?</Typography>
              <RadioGroup
                aria-label="Qualification"
                name="Qualification"
                onChange={e => setEducation(e.target.value)}
                value={education}
              >
                <FormControlLabel
                  value="Masters"
                  control={<Radio />}
                  label="Masters Running/ Completed"
                />
                <FormControlLabel
                  value="Bachlores"
                  control={<Radio />}
                  label="Bachlores Running/ Completed"
                />
                <FormControlLabel
                  value="college"
                  control={<Radio />}
                  label="+2 Running/ Completed"
                />
                <FormControlLabel
                  value="SEE"
                  control={<Radio />}
                  label="SEE Completed"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">
              Your college/ Institution Name? *
            </Typography>
            <TextField
              placeholder="Your college/ Institution Name? *"
              variant="outlined"
              size="medium"
              name="college"
              type="text"
              onChange={e => setCollege(e.target.value)}
              value={college}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Do you want to ask anything?</Typography>
            <TextField
              placeholder="Do you want to ask anything? "
              variant="outlined"
              size="medium"
              name="message"
              type="text"
              onChange={e => setMessage(e.target.value)}
              value={message}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
              
            </Button>
          </Grid>
          <Grid item xs={12}>
          {error && <Message severity = 'error'>{error}</Message>}
          </Grid>
        </Grid>
      </form>
      
    </div>
  );
};

export default Form;
