import { Box, Grid } from '@mui/material'
import { youtubeResponse } from '../../data'
import Card from './Card'

const CardList: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {youtubeResponse.map(data => (
          <Grid item xs={4}>
            <Card {...data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CardList
