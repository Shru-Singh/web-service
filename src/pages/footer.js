import React from "react";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <h2>Got a project that you would like to discuss? Contact Us</h2>
        <div className="linefooter">
          <div className="linefoot"></div>
        </div>
        <div className="footerdiv">
          <div className="foot">
            <h1>Web Service</h1>
            <p>copyright &copy; 2021 Web Service</p>
          </div>
          <div className="foot">
            <h3>Services</h3>
            <p>Web Development</p>
            <p>Website Design</p>
            <p>Ecommerce Website</p>
            <p>Mobile App Development</p>
            <p>WordPress Development</p>
            <p>Online Marketing</p>
          </div>
          <div className="foot">
            <h3>Solution</h3>
            <p>Medical Website</p>
            <p>Live Chat Software</p>
            <p>DIY Websites</p>
          </div>
          <div className="foot">
            <h3>Melbourne</h3>
            <p>Suite 910, 9 Yarra St</p>
            <p>South Yarra, VIC 3141, Australia</p>
            <p>(03) 8669 0640</p>
          </div>
          <div className="foot">
            <h3>Sydney</h3>
            <p>Suite 11, 1401 Botany Road</p>
            <p>Botany, NSW 2019, Australia</p>
            <p>(02) 8004 3410</p>
          </div>
        </div>
        <div className="footlogos">
          <img src="Images/facebook.jpg" alt="" />
          <img src="Images/insta.png" alt="" />
          <img src="Images/LinkedIn.jpg" alt="" />
          <img src="Images/twitter.jpg" alt="" />
          <img src="Images/youtube.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
