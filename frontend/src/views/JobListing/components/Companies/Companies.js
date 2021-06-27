import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { CardJobCompany } from 'components/organisms';

const useStyles = makeStyles(() => ({
  typed: {
    fontWeight: 'bold',
  },
}));

const Companies = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <>
            Job You love {isMd ? null : <br />} you love &nbsp;
            <TypedText
              component="span"
              variant="h4"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: [
                  'Mobile Developer',
                  'Desktop Developer',
                  'Web Developer',
                  'Q/A',
                  
                ],
                typeSpeed: 100,
                loop: true,
              }}
            />
          </>
        }
        subtitle={
          <>
            Find your second home.
          </>
        }
        align="left"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
          >
            <CardJobCompany
              variant="outlined"
              liftUp
              jobTitle={item.jobTitle}
              jobLocation={item.location}
              companyLogo={item.logo}
              companyName={item.title}
              companyInfo={item.type}
              jobsCount="Apply"
              href='/'
              
            />
          </Grid>
        ))}
        <Grid item container justify="center" xs={12} data-aos="fade-up">
          <Button variant="contained" color="secondary" size="large">
            See all jobs
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Companies.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Companies;
