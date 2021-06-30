import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {  Features,  QuickStart,  Hero , AskExpert,Works, VideoSection, Categories, Reviews} from './components';
import {
  courseCategories,
  partners,
  reviews


} from './data';
const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />

      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
      </SectionAlternate>
      <SectionAlternate>
        <VideoSection data={partners} />
      </SectionAlternate>
      <Section>
        <Works data={reviews} />
      </Section>
      <SectionAlternate>
        <Features />
      </SectionAlternate>
      <Section>
        <AskExpert />
      </Section>
      
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section className={classes.dividerSection}>
      <Categories data={courseCategories} />
      </Section>
      <Section>
      <Reviews data={reviews} />
      </Section>

    </div>
  );
};

export default IndexView;
