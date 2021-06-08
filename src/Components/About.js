import React from "react";
import { Typography, Grid, makeStyles, Container } from "@material-ui/core";
import TurboIcon from "../Assets/turboIcon.svg";
import DevicesIcon from "../Assets/devicesIcon.svg";
import BulbIcon from "../Assets/bulbIcon.svg";
import RocketIcon from "../Assets/rocketIcon.svg";
import Ali from "../Assets/Ali.png";

function About() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root} id= "about">
      {/* {ABOUT TITLE} */}
      <Container>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          style={{ padding: "100px", textDecoration: "underline", fontFamily: "Oxygen", fontWeight: "bold" }}
        >
          About
        </Typography>

        {/* {Four Photos Grid} */}
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          //   spacing={3}
        >
          {/* {FAST} */}
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.paper}
            style={{ maxWidth: "180px" }}
            item
            md={3}
            sm={6}
            xs={12}
          >
            <img alt="turbo icon" src={TurboIcon} />

            <Typography
              align="center"
              color="textPrimary"
              component="h4"
              variant="h4"
              style= {{fontFamily: "Anton", fontWeight: "bold", margin: "20px"}}
            >
              Fast
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              component="h5"
              variant="h5"
            >
              Speed is my number one priority.
            </Typography>
          </Grid>

          {/* {RESPONSIVE} */}

          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.paper}
            style={{ maxWidth: "180px" }}
            item
            md={3}
            sm={6}
            xs={12}
          >
            <img alt="turbo icon" src={DevicesIcon} />

            <Typography
              align="center"
              color="textPrimary"
              component="h4"
              variant="h4"
              style= {{fontFamily: "Anton", fontWeight: "bold", margin: "20px"}}
            >
              Responsive
            </Typography>

            <Typography
              align="center"
              color="textSecondary"
              component="h5"
              variant="h5"
            >
              One website that works on all the devices
            </Typography>
          </Grid>

          {/* {INTUITIVE} */}

          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.paper}
            style={{ maxWidth: "180px" }}
            item
            md={3}
            sm={6}
            xs={12}
          >
            <img alt="bulb icon" src={BulbIcon} />
            <Typography
              align="center"
              color="textPrimary"
              component="h4"
              variant="h4"
              style= {{fontFamily: "Anton", fontWeight: "bold", margin: "20px"}}
            >
              Intuitive
            </Typography>

            <Typography
              align="center"
              color="textSecondary"
              component="h5"
              variant="h5"
            >
              Good looking and easy to use UI/UX.
            </Typography>
          </Grid>

          {/* {DYNAMIC} */}

          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.paper}
            style={{ maxWidth: "180px" }}
            item
            md={3}
            sm={6}
            xs={12}
          >
            <img alt="rocket icon" src={RocketIcon} />
            <Typography
              align="center"
              color="textPrimary"
              component="h4"
              variant="h4"
              style= {{fontFamily: "Anton", fontWeight: "bold", margin: "20px"}}
            >
              Dynamic
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              component="h5"
              variant="h5"
            >
              Websites can be dynamic too.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* {My Info} */}
      <Container>
      <Grid
        style={{ margin: "80px 0" }}
        container
        direction="row"
        alignItems="center"
        justify="space-evenly"
        
      >
        <Grid  item md={5} xs={12} className= {classes.paper}>
          <img style= {{maxWidth: "100%"}} src={Ali} alt="ali"/>
        </Grid>
        <Grid   item md={6} xs={12} className= {classes.paper}>
          <Typography  color= "textPrimary"  variant="h4" component="h4" style={{ fontFamily: "Oxygen", fontStyle:"sansSerif"}}>
            I'm a full-stack web developer from Cairo, Egypt who loves to work on exciting and
            diverse projects. I graduated as an engineer and I work now as a freelance web developer.
          </Typography>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default About;
