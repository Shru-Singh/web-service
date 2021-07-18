import React from "react";
import Button from "@material-ui/core/Button";
import Footer from "./footercontactus";


const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contactform">
          <h1>Web Service</h1>
          <div className="align">
            <div className="">
              <h2>Contact Us</h2>
              <p>Fill out the form below and we’ll be in touch soon.</p>
              <form>
                <div className="column">
                  <label htmlFor="Name" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="title" />
                </div>
                <div className="column">
                  <label htmlFor="Name" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="title" />
                </div>
                <div className="column">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="column">
                  <label htmlFor="Name" className="form-label">
                    Company Name
                  </label>
                  <input type="text" className="form-control" id="title" />
                </div>
                <div className="column">
                  <label htmlFor="desc" className="form-label">
                    Message
                  </label>
                  <input type="text" className="form-message" id="message" />
                </div>
                <div className="btnview">
                  <Button className="btn">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contactcity">
          <h1 onClick={() => (window.location.href = "/")}>Back to home</h1>
          <div className="callus">
            <div className="">
              <div className="emaildetail">
                <div className="number">
                  <h3>Call Us</h3>
                  <p>1300 797 471</p>
                </div>
                <div className="emailus">
                  <h3>Email Us</h3>
                  <p>info@webservice.com</p>
                </div>
              </div>
              <div className="contactdisplay">
                <div className="city">
                  <h3>Melbourne</h3>
                  <p>Suite 910, 9 Yarra St</p>
                  <p>South Yarra, VIC 3141</p>
                  <p>Australia</p>
                  <h4>Get direction</h4>
                </div>
                <img src="Images/m1.jpg" alt="" />
              </div>
              <div className="lineblack"></div>
              <div className="contactdisplay">
                <div className="city">
                  <h3>Sydney</h3>
                  <p>Suite 11, 1401 Botany Road</p>
                  <p>Botany, NSW 2019</p>
                  <p>Australia</p>
                  <h4>Get direction</h4>
                </div>
                <img src="Images/m2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
