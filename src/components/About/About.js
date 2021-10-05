import React, { useEffect, useState } from 'react';
import AboutOptional from './AboutOptional';

// json file convart
const About = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
      fetch("./aboutTools.JSON")
        .then((res) => res.json())
        .then((data) => setAbouts(data))
    }, []);
    return (
      <div>
        {abouts.map((about) => (
          <AboutOptional key={about.key} about={about}></AboutOptional>
        ))}
      </div>
    );
};

export default About;