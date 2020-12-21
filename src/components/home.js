import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Particles from "react-particles-js";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  title: {
    color: "#6C63FF",
    fontWeight: "1000",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  subtitle: {
    marginBottom: "3rem",
  },
  text: {
    marginBottom: "1rem",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Particles
          params={{
            polygon: {
              enable: true,
              type: "inside",
              move: {
                radius: 10,
              },
              url: "../images/maple-leaf.svg",
            },
          }}
        ></Particles>
        <Typography variant="h1" className={classes.title}>
          Welcome
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Home;
