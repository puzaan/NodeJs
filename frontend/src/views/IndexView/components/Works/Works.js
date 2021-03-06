import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography,Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  // btn: {
  //   background: '#013220',
  //   borderRadius: 3,
  //   border: 0,
  //   color: 'white',
  //   height: 48,
  //   padding: '0 30px',
  //   '&:hover': {
  //     background: 'black',
  //     color: 'white'

  //   }
    
  // },
  reviewAuthor: {
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
  },
  authorPhoto: {
    width: '100%',
    
  },
  image: {
    objectFit: 'cover',
    
  },
  swiperContainer: {
    position: 'relative',
  },
  swiperWrapper: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(7),
    },
  },
  swiperNav: {
    '& .swiper-button-prev, & .swiper-button-next': {
      width: theme.spacing(6),
      height: theme.spacing(6),
      padding: theme.spacing(3),
      background: theme.palette.primary.main,
      borderRadius: '100%',
      boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      '&:after': {
        fontSize: 'initial',
        color: theme.palette.background.paper,
      },
    },
  },
}));

const Works = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  React.useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: isXs ? 16 : 0,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
      },
    });
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our work does the talking"
    
      />
      <div className={clsx('swiper-container', classes.swiperContainer)}>
        <div className={clsx('swiper-wrapper', classes.swiperWrapper)}>
          {data.map((item, index) => (
            <div
              className="swiper-slide"
              key={index}
            >
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  justify={!isMd ? 'center' : 'flex-start'}
                  alignItems="center"
                >
                  <div className={classes.authorPhoto}>
                    <Image
                      {...item.authorPhoto}
                      className={classes.image}
                      lazyProps={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  justify={!isMd ? 'center' : 'flex-start'}
                  alignItems="center"
                  xs={12}
                  md={6}
                >
                  <div>
                    <Typography
                      variant="h5"
                      color="textPrimary"
                      align={!isMd ? 'center' : 'left'}
                    >
                      {item.feedback}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      gutterBottom
                      className={classes.reviewAuthor}
                      align={!isMd ? 'center' : 'left'}
                    >
                      {item.authorName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      align={!isMd ? 'center' : 'left'}
                    >
                      {item.authorOccupation}
                    </Typography>
                    
                  </div>
                  <Button
              variant="contained"
              color="primary"
              component="a"
              href="/signup-simple"
              size="medium"
            >
              Contact us
            </Button>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
        {!isXs ? null : <div className="swiper-pagination" />}
        {isXs ? null : (
          <div className={classes.swiperNav}>
            <div className={clsx('swiper-button-prev')} />
            <div className={clsx('swiper-button-next')} />
          </div>
        )}
      </div>
    </div>
  );
};

Works.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Works;
