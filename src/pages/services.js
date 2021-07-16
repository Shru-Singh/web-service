import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/services.css";
import Button from "@material-ui/core/Button";
import "../styles/home.css";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="servicescard">
        <h1>End-to-end services to help you find success online</h1>
      </div>
      <div className="servedev">
        <div className="">
          <h1>Development</h1>
          <p>
            Whether it be a simple document sharing app or a comprehensive
            automation system, we work to deliver UX-optimised mobile and
            web-based applications that fit your requirement to a tee.
          </p>
          <h3>Web App, Mobile App, Web Portal</h3>
          <div className="btnview">
            <Button className="btn">
              Learn More
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
        <img src="Images/s4.jpg" alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Services;
