import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  Card,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '10px',
  },
}));

const Form = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    college: '',
    message: '',
  });
  const inputchange = e => {
    console.log(e.target.name);
    console.log(e.target.value);



    const {value, name} = e.target;
    setData(preValue => {
      if (name === 'fullname') {
        return {
          fullname: value,
          email: preValue.email,
          phone: preValue.phone,
          college: preValue.college,
          message: preValue.message,
        };
      } else if (name === 'email') {
        return {
          fullname: preValue.fullname,
          email: value,
          phone: preValue.phone,
          college: preValue.college,
          message: preValue.message,
        };
      } else if (name === 'phone') {
        return {
          fullname: preValue.fullname,
          email: preValue.email,
          phone: value,
          college: preValue.college,
          message: preValue.message,
        };
      } else if (name === 'college') {
        return {
          fullname: preValue.fullname,
          email: preValue.email,
          phone: preValue.phone,
          college: value,
          message: preValue.message,
        };
      } else if (name === 'message') {
        return {
          fullname: preValue.fullname,
          email: preValue.email,
          phone: preValue.phone,
          college: preValue.college,
          message: value,
        };
      }
    });
  };
  const [value, setValue] = useState('male');

  const handleChanges = event => {
    setValue(event.target.value);
  };

  const [checkbox, setcheckbox] = useState({
    MachineLearning: true,
    Python: false,
    Database: false,
    Flutter : false,
    JavaScriptFundamental: false,
    Wordpress : false,
    QualityAssurance: false,
    ReactDevelopment: false,
    MERN_MEVN : false,
    DoteNet: false,
    UI_UX: false,
    IOT: false,
    DigitalMarketing: false

  });


const handlecheck = (e) => {
  console.log(e.target.name)
  setcheckbox({...checkbox, [e.target.name]: e.target.checked})
}
const {MachineLearning,
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
} = checkbox

  const handleSubmit = event => {
    event.preventDefault();
    if(data.email && data.college && data.fullname && data.message && data.phone){
      alert('form submitted');
    }
    
  };

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              <h3> Full Name * </h3>
            </Typography>
            <TextField
              placeholder="Full name *"
              variant="outlined"
              size="medium"
              name="fullname"
              onChange={inputchange}
              value={data.fullname}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <h3> Email * </h3>
            </Typography>
            <TextField
              placeholder="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              type="email"
              onChange={inputchange}
              value={data.email}
              fullWidth
              autoComplete= 'off'
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <h3> Phone No * </h3>
            </Typography>
            <TextField
              placeholder="Phone No *"
              variant="outlined"
              size="medium"
              name="phone"
              onChange={inputchange}
              value={data.phone}
              fullWidth
              type="number"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography>
                <h3> In which course you want to enroll in? * </h3>
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox  checked={MachineLearning} onChange={handlecheck} name="MachineLearning"/>}
                  label="Machine Learning (Foundation/Intermediate/Advanced)"
                />
                <FormControlLabel
                  control={<Checkbox checked={Python} onChange={handlecheck} name="Python" />}
                  label="Python (Django)"
                />
                <FormControlLabel
                  control={<Checkbox checked={Database} onChange={handlecheck} name="Database" />}
                  label="Database (Beginner to advance complete solution)"
                />
                <FormControlLabel
                  control={<Checkbox checked={Flutter} onChange={handlecheck} name="Flutter" />}
                  label="Flutter (Complete Application Development)"
                />
                <FormControlLabel
                  control={<Checkbox checked={JavaScriptFundamental} onChange={handlecheck} name="JavaScriptFundamental" />}
                  label="JavaScript Fundamental"
                />
                <FormControlLabel
                  control={<Checkbox checked={Wordpress} onChange={handlecheck} name="Wordpress" />}
                  label="Wordpress"
                />
                <FormControlLabel
                  control={<Checkbox checked={QualityAssurance} onChange={handlecheck} name="QualityAssurance" />}
                  label="Quality Assurance QA (Beginner to Advance)"
                />
                <FormControlLabel
                  control={<Checkbox checked={ReactDevelopment} onChange={handlecheck} name="ReactDevelopment" />}
                  label="React Development (In Typescript)"
                />
                <FormControlLabel
                  control={<Checkbox checked={MERN_MEVN} onChange={handlecheck} name="MERN_MEVN" />}
                  label="MERN/MEVN (Full stack development)"
                />
                <FormControlLabel
                  control={<Checkbox checked={DoteNet} onChange={handlecheck} name="DoteNet" />}
                  label=".Net (Enterprise Web Application Development)"
                />
                <FormControlLabel
                  control={<Checkbox checked={UI_UX} onChange={handlecheck} name="UI_UX" />}
                  label="UI/UX Essential Training"
                />
                <FormControlLabel
                  control={<Checkbox checked={IOT} onChange={handlecheck} name="IOT" />}
                  label="IOT Training (complete guide to IOT)"
                />
                <FormControlLabel
                  control={<Checkbox checked={DigitalMarketing} onChange={handlecheck} name="DigitalMarketing" />}
                  label="Digital Marketing"
                />
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography>
                <h3> Gender </h3>
              </Typography>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                onChange={handleChanges}
                value={value}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <h3> Your college/ Institution Name? * </h3>
            </Typography>
            <TextField
              placeholder="Your college/ Institution Name? *"
              variant="outlined"
              size="medium"
              name="college"
              type="text"
              onChange={inputchange}
              value={data.college}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <h3> Do you want to ask anything? </h3>
            </Typography>
            <TextField
              placeholder="Do you want to ask anything? "
              variant="outlined"
              size="medium"
              name="message"
              type="text"
              onChange={inputchange}
              value={data.message}
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
        </Grid>
      </form>
    </div>
  );
};

export default Form;
