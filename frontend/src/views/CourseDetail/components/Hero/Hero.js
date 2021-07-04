import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button, ListItem , List} from '@material-ui/core';
import { HeroBackground } from 'components/organisms';
import TimerIcon from '@material-ui/icons/Timer';
import { IconAlternate } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { SectionHeader} from 'components/molecules';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
}));

const Hero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <HeroBackground backgroundImg="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <List>
              <ListItem> 
          
                <IconAlternate
                  fontIconClass={data.icon}
                  size="large"
                  color={data.color}
                  
                />
              
            <Typography
            
              variant="h3"
              className={clsx(classes.textWhite, classes.title)}
            >
              {data.course}
            </Typography>
            </ListItem>
              </List>
          </Grid>
          <Grid item xs={12} >
            <Typography variant="h5" className={classes.textWhite} gutterBottom>
              {data.location}
            </Typography>
            <Typography variant="h5" className={classes.textWhite}>
            <TimerIcon />
              {data.duration}
            </Typography> 
            <Button size={isMd ? 'large' : 'medium'} variant="contained"  disableGuteer>
            We also offer online classes for trainees who cannot attend the classes physically
            </Button>
          </Grid>
          
        </Grid>
      </HeroBackground>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
