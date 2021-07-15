import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import "../styles/home.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="absolute"
          style={{ backgroundColor: "black" }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Web Service
            </Typography>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        dots="false"
        autoPlay="true"
        autoStart="true"
        infiniteLoop="true"
        dynamicHeight="false"
      >
        <img className="carouselimage" src={c1} alt="" />
        <img className="carouselimage" src={c2} alt="" />
        <img className="carouselimage" src={c3} alt="" />
      </Carousel>
    </>
  );
};

export default Home;
