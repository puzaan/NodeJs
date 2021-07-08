import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  color:{
    
color: '#013220'
  },
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
    
  },
  videoIframe: {
    boxShadow: `0 5px 12px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
  },
  listGrid: {
    overflow: 'hidden',
  },
  partnerImage: {
    maxWidth: 120,
  },
}));

const VideoSection = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        className={classes.listGrid}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title="We proactively consult, design, develop & scale robust web, mobile & custom software solutions, that fuel innovation & deliver digital success!"
                subtitle="At Unified we believe that every project is an important milestone in our journey. So we position ourselves as a boutique digital agency, custom tailoring impactful digital solutions with industry best practices across the board, for Fortune 500's, SMEs, and Start-up’s around the globe."
                ctaGroup={[
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                    className={classes.btn}
                  >
                    Contact Us
                  </Button>,
                  
                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} data-aos="fade-up">
                <Grid item xs={12}>
                  <Typography
                  className={classes.color}
                    variant="h6"
                    color="primary"
                    align={isMd ? 'left' : 'center'}
                  >
                    Our sponsors and partners
                  </Typography>
                </Grid>
                <Grid item container justify="space-between" xs={12}>
                  {data.map((partner, index) => (
                    <Grid
                      item
                      container
                      justify="center"
                      xs={6}
                      sm={2}
                      key={index}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className={classes.partnerImage}
                        lazy={false}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container justify="center">
            
            <ReactPlayer url='https://www.youtube.com/watch?v=UNCq01LNNrg'
            controls 
          
            className={classes.videoIframe}
            
            />
          </Grid>
        </Grid>
      
      </Grid>
    </div>
  );
};

VideoSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default VideoSection;
