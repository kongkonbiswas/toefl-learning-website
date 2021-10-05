import React from 'react';
import { Link } from 'react-router-dom';

const Services2 = (props) => {
    const { name, age, img, duration, price } = props.user;
    return (
      <div className="col-md-6 mx-4">
        <div id="cart-div" className="cart mb-5 ms-5 mt-5 ms-5">
          <div>
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="text-area">
            <h4>Course Name: {name}</h4>
            <h5>Required Age: {age}</h5>
            <p>Duration: {duration}</p>
            <h6>Price: ${price}</h6>
            <Link to="/service">Visite Site</Link>
          </div>
        </div>
      </div>
    );
};

export default Services2;