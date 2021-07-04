import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';
import { Box, colors, Grid } from '@material-ui/core';
import { CardCategory } from 'components/organisms';
import { IconAlternate } from 'components/molecules';
import { CardJobMinimal } from 'components/organisms';
const SidePage = () => {
    
    return (
        <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container >
      <CardJobMinimal
        title={'Front-end developer'}
        titleProps={{
            variant: 'h6',
        }}
        subtitleProps={{
            variant: 'subtitle1',
        }}
      />
      </Grid>
    </Box>
    )
}

export default SidePage
