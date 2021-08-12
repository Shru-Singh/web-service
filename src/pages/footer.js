import React from "react";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <h2>Got a project that you would like to discuss? <span onClick={() => (window.location.href = "/contact")}>Contact Us&#8594;</span></h2>
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
            <h3>Kolkata</h3>
            <p>Godrej waterside building tower 2</p>
            <p>saltlake sector v 700091</p>
            {/* <p>+91 7439543939</p> */}
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
