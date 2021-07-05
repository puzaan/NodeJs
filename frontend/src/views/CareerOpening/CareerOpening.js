import React from 'react';
import { makeStyles,} from '@material-ui/core/styles';

import {Divider,} from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Application, Main, Newsletter } from './components';
import { jobs } from '../CareerListingMinimal/data/index';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));
const CareerOpening = ({ match }) => {
  const jobData = jobs.find(p => p.id === match.params.id);
  const classes = useStyles();
  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <Main data={jobData} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Application />
      </SectionAlternate>
      <Section>
        <Newsletter />
      </Section>
      <Divider />
      
    </div>
  );
};

export default CareerOpening;
