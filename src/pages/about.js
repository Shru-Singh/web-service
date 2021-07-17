import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/services.css";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="servicescard">
        <h1>A digital agency of innovation and creativity</h1>
      </div>
      <div className="about">
        <h1>
          Online success made simple.
          <br /> That has been our slogan and vision since 2003
        </h1>
        <div className="aboutpara">
          <p>
            Born in Melbourne’s Docklands, WebAlive is one of the pioneers in
            providing end-to-end web solutions for businesses in Australia. Over
            the last 15 years, we have transformed businesses by combining our
            strong technical ability with our deep understanding of the digital
            landscape.
          </p>
          <p>
            Over time, the digital landscape has transformed, and the way
            businesses use online technology has changed. WebAlive has also
            evolved, mastering new skills, developing new products and
            continuing to provide cutting-edge web design, application
            development, and ecommerce solutions to our clients.
          </p>
          <p>
            Our customer-oriented approach has been a staple of the company over
            the years, and we’ll continue to measure our success by the
            accomplishments of our clients.
          </p>
        </div>
      </div>
      <img src="Images/a1.jpg" className="aboutimg" alt="" />
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

export default About;
