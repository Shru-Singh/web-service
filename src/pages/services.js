import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Button from "@material-ui/core/Button";


const Services = () => {
  return (
    <>
      <Navbar />
      <div className="servicescard">
        <h1>End-to-end services to help you find success online</h1>
      </div>
      <div className="servedev">
        <div className="dev">
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
        </div>
        <img src="Images/s4.jpg" alt="" />
      </div>
      <div className="lineup">
        <div className="line"></div>
      </div>
      <div className="servedev">
        <img src="Images/s5.jpg" alt="" />
        <div className="design">
          <div className="">
            <h1>Website Design</h1>
            <p>
              We build modern, responsive websites backed by extensive UX
              research. Combining design aesthetics with functionality, we
              develop engaging interfaces that put you above your competitors.
              Custom Design, Mobile Responsive, WordPress Learn More
            </p>
            <h3>Custom Design, Mobile Responsive, WordPress</h3>
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
        </div>
      </div>
      <div className="lineup">
        <div className="line"></div>
      </div>
      <div className="servedev">
        <div className="dev">
          <div className="">
            <h1>Ecommerce</h1>
            <p>
              Our ecommerce sites are highly customisable. We offer plenty of
              innovative ways to add value to your buyers’ shopping experience
              and ensure they keep coming back for more.
            </p>
            <h3>WooCommerce, Magento, Online Marketing</h3>
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
        </div>
        <img src="Images/s6.jpg" alt="" />
      </div>
      <div className="industry">
        <h1>Industry focused solutions</h1>
        <div className="industryicons">
          <div className="threeicon">
            <div className="icons">
              <img src="Images/g1.png" alt="" />
              <h4>Government</h4>
            </div>
            <div className="linevertical"></div>
            <div className="icons">
              <img src="Images/g2.png" alt="" />
              <h4>Healthcare</h4>
            </div>
            <div className="linevertical"></div>
            <div className="icons">
              <img src="Images/g3.png" alt="" />
              <h4>Retail</h4>
            </div>
          </div>
          <div className="linewhite"></div>
          <div className="threeicon">
            <div className="icons">
              <img src="Images/g4.png" alt="" />
              <h4>Local Business</h4>
            </div>
            <div className="linevertical"></div>
            <div className="icons">
              <img src="Images/g5.png" alt="" />
              <h4>Non-Profit</h4>
            </div>
            <div className="linevertical"></div>
            <div className="icons">
              <img src="Images/g6.png" alt="" />
              <h4>Finance</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="technology">
        <h1>Our tools & technologies</h1>
        <p>
          Our multidisciplinary team and industry partners give you access to an
          extensive network of services, tools, and technologies.
        </p>
        <div className="technologyicons">
          <img src="Images/t1.png" alt="" />
          <img src="Images/t2.png" alt="" />
          <img src="Images/t3.png" alt="" />
          <img src="Images/t4.png" alt="" />
          <img src="Images/t5.png" alt="" />
          <img src="Images/t6.png" alt="" />
          <img src="Images/t7.png" alt="" />
          <img src="Images/t8.png" alt="" />
          <img src="Images/t9.png" alt="" />
          <img src="Images/t10.png" alt="" />
          <img src="Images/t11.png" alt="" />
          <img src="Images/t12.png" alt="" />
          <img src="Images/t13.png" alt="" />
          <img src="Images/t14.png" alt="" />
          <img src="Images/t15.png" alt="" />
          <img src="Images/t16.png" alt="" />
          <img src="Images/t17.png" alt="" />
          <img src="Images/t18.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
