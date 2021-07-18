import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      <div className="History">
        <div className="historypara">
          <h1>History</h1>
          <h4>
            The WebAlive brand was born in 2003. With its headquarters in
            Melbourne
          </h4>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          dots="false"
          autoPlay="true"
          autoStart="true"
          infiniteLoop="true"
          dynamicHeight="false"
          className="Carousel"
        >
          <div className="historytext">
            <h2>2003</h2>
            <p>
              The WebAlive brand was born in 2003. With its headquarters in
              Melbourne, the company rapidly expanded throughout Australia, the
              UK, Canada, the Middle East and China.
            </p>
          </div>
          <div className="historytext">
            <h2>2009</h2>
            <p>
              WebAlive was acquired by Web Mascot in 2009, which lead to its
              emerging as a full service agency with expertise in web and
              application development, online marketing and digital Strategy.
            </p>
          </div>
          <div className="historytext">
            <h2>2015</h2>
            <p>
              The robust ecommerce platform WebCommander was launched soon after
              to support decade-old customers using WebConsole. This offered
              them an easy upgrade path to a modern, feature-rich System.
            </p>
          </div>
          <div className="historytext">
            <h2>2019</h2>
            <p>
              Today WebAlive is renowned in the industry for delivering a
              cost-effective, reliable service. With 100+ professionals across
              various locations, we are able to deliver projects of all sizes.
            </p>
          </div>
        </Carousel>
      </div>
      <div className="lineup">
        <div className="line"></div>
      </div>
      <div className="vision">
        <img src="Images/a2.jpg" alt="" />
        <div className="visiontext">
          <div className="visionborder">
            <h1>Vision</h1>
            <p>
              Our vision is to be the most sought after digital agency in
              Australia, facilitating sustainable growth and prosperity for our
              local and international clients. We are continuously evolving to
              become an industry leader in the vibrant field of web
              technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="mission">
        <div className="missiontext">
          <div className="missionborder">
            <h1>Mission</h1>
            <p>
              Our mission is to transform our clients’ businesses, allowing them
              to utilise powerful technologies and improve their processes. We
              want to be consistently bringing out world-class products and
              services, that benefit businesses of all sizes, making them more
              efficient and effective.
            </p>
          </div>
        </div>
        <img src="Images/a3.jpg" alt="" />
      </div>
      <div className="lineup">
        <div className="line"></div>
      </div>
      <div className="delivery">
        <div className="years">
          <h1>15+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="years">
          <h1>1000+</h1>
          <p>Successful Projects</p>
        </div>
        <div className="years">
          <h1>100%</h1>
          <p>On Time Delivery</p>
        </div>
      </div>
      <div className="values">
        <h1>Our Values</h1>
        <div className="valuesdiv">
          <div className="respect">
            <div className="linenum">
              <p>01</p>
              <div className="whiteline"></div>
            </div>
            <img src="Images/a4.png" alt="" />
            <h2>Respect</h2>
            <p>
              The way we view our client relationships is one of WebAlive’s
              defining characteristics. We partner up with our clients to
              overcome the problems together.
            </p>
          </div>
          <div className="respect">
            <div className="linenum">
              <p>02</p>
              <div className="whiteline"></div>
            </div>
            <img src="Images/a5.png" alt="" />
            <h2>Integrity</h2>
            <p>
              Developing close, honest relationships with our clients means we
              are genuinely driven to see them find success. This is what brings
              out our best work.
            </p>
          </div>
          <div className="respect">
            <div className="linenum">
              <p>03</p>
              <div className="whiteline"></div>
            </div>
            <img src="Images/a6.png" alt="" />
            <h2>Innovation</h2>
            <p>
              We offer solutions to our clients’ problems by applying the latest
              technologies available. This allows us to solve business problems
              more effectively.
            </p>
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

export default About;
