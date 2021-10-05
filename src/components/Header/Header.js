import React from 'react';
import './Header.css'
import logo from "../..//images/logo/images.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
    fontWeight: "bold",
    color: "red"
  }
    return (
      <div className="MenuBar-container bg-dark">
        <h3 className="text-success fw-bolde pt-3">
          Welcome To TOEFL Learning Website
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo-img">
                <img className="w-75" src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
                  <NavLink
                    className="items"
                    activeStyle={activeStyle}
                    to="/home"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="m-5 items"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "green",
                    }}
                    to="/about"
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    className="items"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "blue",
                    }}
                    to="/services"
                  >
                    Our Services
                  </NavLink>
                  <NavLink
                    className="m-5 items"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "yellow",
                    }}
                    to="/careers"
                  >
                    Careers
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;