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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div>
              <Card style={{ backgroundColor: "#001a23", color: "#D5D5D5" ,borderRadius: 15, border: "1px solid #27272A"}}>
                <CardContent>
                  <Typography gutterBottom style={{fontSize :"17px"}} component="div">
                    Get Started
                  </Typography>
                  <Typography variant="body2" style={{ color: "#71717A" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button sx={{ marginLeft: "auto", color: '#2DD4BF' }} style={{ textTransform: 'none' }} size="small">Explore Now</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
            <Card style={{ backgroundColor: "#001a23", color: "#D5D5D5" ,borderRadius: 15, border: "1px solid #27272A"}}>

                <CardContent>
                  <Typography gutterBottom style={{fontSize :"17px"}} component="div">
                    Developer Guide
                  </Typography>
                  <Typography variant="body2" style={{ color: "#71717A" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button sx={{ marginLeft: "auto", color: '#2DD4BF' }} style={{ textTransform: 'none' }} size="small">Explore Now</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
            <Card style={{ backgroundColor: "#001a23", color: "#D5D5D5" ,borderRadius: 15, border: "1px solid #27272A"}}>

                <CardContent>
                  <Typography gutterBottom style={{fontSize :"14px"}} component="div">
                Recent Activity
                  </Typography>
                  <Typography style={{fontSize :"17px"}} style={{ color: "#71717A" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button sx={{ marginLeft: "auto", color: '#2DD4BF' }} style={{ textTransform: 'none' }} size="small">Explore Now</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Card style={{ backgroundColor: "#001a23", color: "#D5D5D5" ,borderRadius: 15, border: "1px solid #27272A"}}>

                <CardContent>
                  <Typography gutterBottom style={{fontSize :"17px"}} component="div">
                  Use Cases
                  </Typography>
                  <Typography variant="body2" style={{ color: "#71717A" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button sx={{ marginLeft: "auto", color: '#2DD4BF' }} style={{ textTransform: 'none' }} size="small">Explore Now</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Card style={{ backgroundColor: "#001a23", color: "#D5D5D5" ,borderRadius: 15, border: "1px solid #27272A"}}>

                <CardContent>
                  <Typography gutterBottom style={{fontSize :"17px"}} component="div">
                  APIs
                  </Typography>
                  <Typography variant="body2" style={{ color: "#71717A" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button sx={{ marginLeft: "auto", color: '#2DD4BF' }} style={{ textTransform: 'none' }} size="small">Explore Now</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
        </Grid>



      </div>
    </Container>
  )
}

export default Index
