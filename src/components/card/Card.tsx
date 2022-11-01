import {
  Avatar,
  Card as MuiCard,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  Box,
  Typography,
} from '@mui/material'
import { AiFillCheckCircle } from 'react-icons/ai'

interface Props {
  id: number
  image: string
  title: string
  channelName: string
  videoId: string
  avatar: string
}

const Card: React.FC<Props> = ({
  id,
  image,
  title,
  channelName,
  videoId,
  avatar,
}) => {
  return (
    <MuiCard sx={{ boxShadow: 0, cursor: 'pointer' }} key={id}>
      <Link href={`https://youtube.com/watch?v=${videoId}`}>
        <CardMedia component='img' height='240' image={image} alt={title} />
      </Link>
      <CardContent sx={{ m: 0, p: 0 }}>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            p: 0,
            m: 0,
            maxWidth: '100%',
          }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt='Channel avatar' src={avatar} />
            </ListItemAvatar>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Typography
                sx={{ fontWeight: 'bold', mb: 1 }}
                gutterBottom
                variant='h5'
                component='div'>
                {title.substring(0, 75)}
              </Typography>
              <Box display='flex' alignItems='cener'>
                <Typography
                  sx={{ mr: 1, mb: 0, p: 0 }}
                  gutterBottom
                  variant='h5'
                  component='div'>
                  {channelName}
                </Typography>
                <AiFillCheckCircle />
              </Box>
            </Box>
          </ListItem>
        </List>
      </CardContent>
    </MuiCard>
  )
}

export default Card
