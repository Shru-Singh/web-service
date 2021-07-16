import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
          position="static"
          style={{
            backgroundColor: "black",
            padding: "10px 0",
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Web Service
            </Typography>
            <Button color="inherit" className="navbarbtn">
              About Us
            </Button>
            <Button
              color="inherit"
              className="navbarbtn"
              style={{ margin: "0 50px" }}
            >
              Services
            </Button>
            <Button
              className="navbarbtn"
              style={{ marginRight: "70px" }}
              color="inherit"
            >
              Contact
            </Button>
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
        <img className="carouselimage" src="Images/c1.jpg" alt="" />
        <img className="carouselimage" src="Images/c2.jpg" alt="" />
        <img className="carouselimage" src="Images/c3.jpg" alt="" />
      </Carousel>
      <h1 className="homeh1">Our Services</h1>
      <div className="services">
        <div className="serve">
          <img src="Images/s1.png" alt="" />
          <h1>Development</h1>
          <p>
            Partner with our experienced team and develop robust software
            application, whether you’re a start-up or an established business
            looking to outshine with innovative ideas!
          </p>
          <h3>Learn more</h3>
        </div>
        <div className="serve">
          <img src="Images/s2.png" alt="" />
          <h1>Website</h1>
          <p>
            Looking to build a new website or transform an existing one that
            isn’t performing? We create engaging websites that offer the very
            best in user experience and drive enquiries.
          </p>
          <h3>Learn more</h3>
        </div>
        <div className="serve">
          <img src="Images/s3.png" alt="" />
          <h1>Ecommerce</h1>
          <p>
            Feature-rich and conversion-optimised, our eCommerce websites along
            with our industry leading experience give you the control needed to
            grow your business.
          </p>
          <h3>Learn more</h3>
        </div>
      </div>
      <div className="lineup">
        <div className="line"></div>
      </div>
      <h1 className="homeh1">Featured Projects</h1>
      <div className="feature">
        <div className="feat">
          <div className="featimg">
            <img src="Images/f1.jpg" alt="" />
          </div>
          <p>Development</p>
          <h2>Business Plaza</h2>
          <p>A versatile club-management solution.</p>
        </div>
        <div className="feat">
          <div className="featimg">
            <img src="Images/f2.jpg" alt="" />
          </div>
          <p>Ecommerce</p>
          <h2>Guitar Paradise</h2>
          <p>
            A modern, highly visual website for a prominent <br />
            musical instrument seller.
          </p>
        </div>
        <div className="feat">
          <div className="featimg">
            <img src="Images/f3.jpg" alt="" />
          </div>
          <p>Web Design</p>
          <h2>Premier Panting</h2>
          <p>The leading painting company of Sydney gets a new site.</p>
        </div>
        <div className="feat">
          <div className="featimg">
            <img src="Images/f4.jpg" alt="" />
          </div>
          <p>Web Design</p>
          <h2>littil</h2>
          <p>A compelling website for an Australian led light supplier.</p>
        </div>
      </div>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <div className="btnview">
          <Button className="btn">
            View all projects{" "}
            {/* <span
              style={{
                fontSize: "30px",
                marginLeft: "5px",
                paddingBottom: "8px",
              }}
            >
              &rarr;
            </span> */}
          </Button>
        </div>
      </div>
      <div className="custom">
        <div className="customerlove">
          <div className="customtext">
            <div className="text">
              <p>
                We love our customers and they love our work. Over the years,
                we’ve received overwhelming support, love and inspiration from
                our clients.
              </p>
              <div className="linemid">
                <div className="linewhite"></div>
              </div>
              <h4>Check out what our customers have to say</h4>
            </div>
          </div>
          <div className="customimg">
            <img src="Images/f5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="leading">
        <div className="leadingdiv1">
          <h1>Australia’s leading website design and development company</h1>
          <img src="Images/f6.jpg" alt="" />
        </div>
        <div className="leadingdiv2">
          <div className="div2sub">
            <p>
              WebAlive is a full-service web design and development company in
              Australia with our head-office situated in Melbourne. We are a
              team of experienced website designers, developers and digital
              strategists. Through our bespoke result-driven solutions we
              deliver measurable outcomes that empower our clients. Since 2003,
              we have worked with thousands of clients and established ourselves
              as one of the most trusted online solution providers for
              businesses in Australia.
            </p>
            <h2>An experienced and trusted digital agency</h2>
            <p>
              Our ability to build on any platform willingness to adapt to the
              client’s needs make us the ideal web solutions provider. Working
              with WebAlive means you can be as hands-on as you wish! While we
              do have our own growth in mind, our main focus is always to add
              value to our customers by refining their ideas and realising their
              goals through our decade-long expertise and experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
