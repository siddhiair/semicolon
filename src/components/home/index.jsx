import React from 'react'
import "./index.css";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Index() {
  return (
    <Container fixed>
      <div className="home-page-container">

        <Grid container spacing={3}>
          <Grid item xs>
            <div>
              <Card style={{ backgroundColor: "#001a23", color: "#D5D5D5" }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Get Started
                  </Typography>
                  <Typography variant="body2" style={{ color: "#71717A" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button sx={{ marginLeft: "auto", color: '#2DD4BF' }} style={{textTransform: 'none'}} size="small">Explore Now</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid item xs>
            <div>  <Card style={{ backgroundColor: "#001a23", color: "#D5D5D5" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  User Guide
                </Typography>
                <Typography variant="body2" style={{ color: "#71717A" }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>

                <Button sx={{ marginLeft: "auto", color: '#2DD4BF' }} style={{textTransform: 'none'}} size="small">Explore Now
                </Button>
              </CardActions>
            </Card></div>
          </Grid>
          <Grid item xs={6}>
            <div>
              orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Index
