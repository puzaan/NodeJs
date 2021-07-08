import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import { makeStyles,} from '@material-ui/core/styles';

const useStyles = makeStyles (()=> ({
  btn: {
    background: '#013220',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: 'black',
      color: 'white'

    }
    
  },color:{
    color:'#013220'
  }
}));
const Process = props => {
  const classes = useStyles();
  const { data, className, ...rest } = props;

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Our process"
        subtitle="We are a small agency of talented designers & developers. Unlike teams from big agencies, we will treat your project as ours. We will walk you through our smooth and simple process."
        fadeUp
      />
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined">
              <DescriptionListIcon
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    color='colors.green'
                    className={classes.color}
                  />
                }
                title={item.title}
                subtitle={item.description}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <Button variant="contained" size="large" color="primary" className={classes.btn}>
            Contact us
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Process.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Process;
