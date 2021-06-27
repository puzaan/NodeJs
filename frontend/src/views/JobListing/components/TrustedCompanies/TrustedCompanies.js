import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  promoLogo: {
    maxWidth: 120,
  },
}));

const TrustedCompanies = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6}>
          <SectionHeader
            title="CAREERS"
            subtitle="We're looking for brilliant minds to join our top-notch team and make it even better. Are you ready?"
            fadeUp
            disableGutter
            align={isMd ? 'left' : 'center'}
          />
        </Grid>
        
      </Grid>
    </div>
  );
};

TrustedCompanies.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default TrustedCompanies;
