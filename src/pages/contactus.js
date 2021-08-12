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
          <div className="center">
            <div className="callus">
              <div className="">
                {/* <div className="emaildetail">
                  <div className="number">
                    <h3>Call Us</h3>
                    <p>+91 7439543939</p>
                    <h3>Email Us</h3>
                    <div className="" style={{ display: "flex" }}>
                      <p style={{ marginRight: "70px" }}>
                        website.godaddysites.com
                      </p>
                      <p>jhasubh09@gmail.com</p>
                    </div>
                  </div>
                  <div className="emailus">
                    <h3>Email Us</h3>
                    <p>jhasubh09@gmail.com</p>
                  </div>
                </div> */}
                <div className="contactdisplay">
                  <div className="city">
                    <h3>Kolkata</h3>
                    <p>Godrej waterside building tower 2</p>
                    <p>saltlake sector v 700091</p>
                    <p>India</p>
                    <h4
                      onClick={() =>
                        (window.location.href =
                          "https://maps.google.com/maps?q=22.5739112%2C88.4384212&z=17&hl=en")
                      }
                    >
                      Get direction
                    </h4>
                  </div>
                  <img src="Images/m1.jpg" alt="" />
                </div>
                {/* <div className="lineblack"></div>
              <div className="contactdisplay">
                <div className="city">
                  <h3>Sydney</h3>
                  <p>Suite 11, 1401 Botany Road</p>
                  <p>Botany, NSW 2019</p>
                  <p>Australia</p>
                  <h4>Get direction</h4>
                </div>
                <img src="Images/m2.jpg" alt="" />
              </div> */}
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
