import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
    fontWeight: "bold",
    color: "red"
  }
    return (
      <div className="header bg-dark text-white p-5">
        <NavLink activeStyle={activeStyle} to="/home">
          Home
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "yellow",
          }}
          to="/category"
        >
          Category
        </NavLink>
      </div>
    );
};

export default Header;