import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
      <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>TOEFL Test Club</h1>

                  <p className="mt-4 ">
                    <small>
                      Both the TOEFL Essentials test and the TOEFL iBT® test can
                      help you get where you want to go. The test you choose
                      depends on your testing style and preferences.
                    </small>
                  </p>

                  <p className="mt-5">
                    <small>
                      Copyright © 2021 by ETS. All rights reserved. All
                      trademarks are the property of their respective owners..
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">Sports</li>
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> About us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the Registation</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div>
                      <h5>+1 8 800 555 35 35</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                      {/* location */}
                    <div>
                      <p>
                        160 Broadway, New York, NY 10038,
                        <br /> 102 1st Avenue, New York, NY 100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;