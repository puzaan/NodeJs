import React from 'react';
import PropTypes from 'prop-types';
import { useTheme} from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';


const data = [{
  title:'Investing made easy',
  subtitle:'Three simple options- cautions, balanced, adventurous. Expert will take care of rest!',
  icon: "fas fa-comment-dollar"
},
{
  title:'Schedule a meeting',
  subtitle:'Expert will give you the best advice. Schedule a meeting with the expert to know mutual funds better.',
  icon: "far fa-calendar-alt"
}
]

const AskExpert = props => {
  const { className, ...rest } = props;
  

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 0}>
        <Grid item container alignItems="center" xs={12} md={6}>
          <div>
            <SectionHeader
              title="Ask the Expert"
              subtitle="You can schedule a meeting with an expense manager"
              align="left"
              data-aos="fade-up"
            />
            <Grid container spacing={2}>
              {data.map((data)=> (
                <Grid item container xs={12} sm={6} data-aos="fade-up">
                <DescriptionListIcon
                  icon={
                    <IconAlternate
                    
                      fontIconClass={data.icon}
                      color='colors.green'
                    />
                  }
                  title={data.title}
                  subtitle={data.subtitle}
                  align="left"
                />
                <div style={{ flexGrow: 1 }} />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  
                >
                  Contact us
                </Button>
              </Grid>
              
              ))}
              
          </Grid>
          </div>
        </Grid>
        {isMd ? (
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Image
              src="https://assets.maccarianagency.com/the-front/photos/rental/expert-cover.png"
              srcSet="https://assets.maccarianagency.com/the-front/photos/rental/expert-cover@2x.png 2x"
              alt="..."
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

AskExpert.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AskExpert;
