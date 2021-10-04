import React from 'react';

const aboutOptional = (props) => {
    const{title, adress, email, avaiable} =props.about;
    return (
      <div className="bg-secondary bg-opacity-75 text-white">
        <h4>Course Title: {title}</h4>
        <h5>Adress: {adress}</h5>
        <p>Email: {email}</p>
        <p>Elegible For: {avaiable}</p>
      </div>
    );
};

export default aboutOptional;