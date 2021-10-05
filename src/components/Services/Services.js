import React, { useEffect, useState } from 'react';
import Services2 from './Services2';

const Services = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
    return (
      <div className="container-home pt-2">
        {users.map((user) => (
          <Services2 key={user.key} user={user}></Services2>
        ))}
      </div>
    );
};

export default Services;