import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AvatarPic from "./Componeneties/Avatar";
import { flexbox } from "@material-ui/system";
import Video from "../../MainContent/Video"
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Box marginTop={5}>
              <AvatarPic />
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
               Market Test
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Welcome to test market
              </Typography>
            </Box>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                      Contact me
                    </Button>
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRGKcqUCmkzSpk_9i7fgAIJ9IbETt4wtGpDAs9bVJ-k2m_oG46"
                    title="Image title"
                  /> */}
                        {/* <video muted="true" playsInline  onclick=loop src="https://v16-webapp.tiktok.com/7256d82ca3b50da46095991a18c9d823/623057b7/video/tos/useast2a/tos-useast2a-ve-0068c002/45e90f55aac14c3c9ece37b59f9f58df/?a=1988&br=1006&bt=503&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThPemiDXq&l=2022031503085301024500200227866F29&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amQ7Zjw6ZmQ0OTMzNzczM0ApZ2Y1ZGg0Njw8N2U3ZWk0aGczZnMucjRvMDVgLS1kMTZzczU1YGE1Y2FfYzAxYTReXzU6Yw%3D%3D&vl=&vr=" ></video> */}
<Video isDisplayOnProfile="true" url="https://v16-webapp.tiktok.com/256543ef44908bd0a6894006128a14f7/623056ac/video/tos/alisg/tos-alisg-pve-0037c001/0829e6f7def546c49aebffa9bea19099/?a=1988&br=1996&bt=998&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThjjmiDXq&l=202203150304360102450020692285DD4D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amRlNDY6ZjxnOjMzODczNEApNzQ6ZWk0OTw1NzRmNGc7PGduNWBlcjRvam9gLS1kMS1zc14yM2JeYWEyNWBfMC82MDQ6Yw%3D%3D&vl=&vr="/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Product name
                    </Typography>
                    <Typography>Project Address</Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="medium" color="primary">
                        Add to cart
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
