import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  title: {
    color: "#7fff00",
    fontWeight: "bold",
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

const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Typography variant="h1" className={classes.title}>
          About
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          A multifaceted software developer, problem solver, leader, educator,
          and designer.
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Half and half, body aroma aged crema, body crema grinder espresso
          americano at instant.
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Café au lait, latte café au lait, white id irish foam that black
          seasonal. Doppio et, in whipped a, affogato brewed instant crema
          robust. Extraction cup in, strong and roast mazagran irish sugar
          crema. So mazagran, pumpkin spice, latte, extraction cup, shop
          percolator chicory espresso aged.
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Half and half dripper est and, foam wings in a, as, sweet robusta
          roast brewed, id cortado, filter americano galão java coffee caffeine.
          Percolator cream, strong extra, froth extraction, ut decaffeinated
          roast lungo carajillo grinder saucer, beans lungo iced and galão. In
          body, con panna, grounds robusta caramelization black seasonal
          affogato, ristretto, mazagran carajillo java, bar decaffeinated,
          filter seasonal organic doppio cortado trifecta. To go, as espresso
          coffee extraction, robusta organic half and half grounds aroma doppio,
          decaffeinated, viennese, shop foam white grinder extra foam.
        </Typography>
        <Typography variant="h2" className={classes.title}>
          Recommendations
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default About;
