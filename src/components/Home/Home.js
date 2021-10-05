import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'

// json convart
const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
      <div className="container-home pt-2">
        {users.map((user) => (
          <Service key={user.key} user={user}></Service>
        ))}
      </div>
    );
};

export default Home;