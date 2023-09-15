import './portfolio.css';
import apps from './apps.js';
import { Box, Card, CardActionArea, CardMedia, Typography, CardContent, CardHeader } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

const Portfolio = () => {

  return (
    <div className='apps'>
      <Carousel
  
      >
      {
        apps.map(({key,name,desc,pic,website,github}) => 
          <Card key={key} component="div">
            {/* <CardActionArea onClick={() => handleOpen()}> */}
            <CardActionArea>
              <CardHeader
                title={name}
                subheader={desc}
              />
              <CardMedia
                sx={{ height: 140, paddingTop: "56.2%" }}
                image={pic}
              />
              <CardContent component="div">
                <Typography component="span" gutterBottom variant="h5">
                  Testing
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.secondary"
                >
                  Testing
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      }
      </Carousel>
    </div>
  )
}

export default Portfolio
