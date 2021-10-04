import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {name, age, img, duration, adress} = props.user;
    return (
      <div className="border border-success rounded-3 text-center pt-5 bg-secondary text-white ">
        <img src={img} alt="" />
        <h4>Course Name: {name}</h4>
        <h5>Required Age: {age}</h5>
        <p>Duration: {duration}</p>
        <Link to="/service">Visite Site</Link>
      </div>
    );
};

export default Service;