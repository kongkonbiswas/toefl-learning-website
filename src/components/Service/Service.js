import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {name, age, img, duration, price, key} = props.user;
    return (
      <div className="border border-success rounded-3 text-center pt-5 bg-secondary text-white ">
        <img src={img} alt="" />
        <h4>Course Name: {name}</h4>
        <h5>Required Age: {age}</h5>
        <p>Duration: {duration}</p>
        <h6>Price: ${price}</h6>
        <p><small>Id: {key}</small></p>
        <Link to="/service">Visite Site</Link>
      </div>
    );
};

export default Service;