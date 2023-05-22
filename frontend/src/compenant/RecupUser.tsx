
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';



type User = {
email: string;
name: string;
}

function RecupUser() {
  const [user, setUser] = useState<User>();
  const token = typeof localStorage !== "undefined" ? localStorage.getItem("token") : "";
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<User>('http://localhost:8000/api/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
      setUser(response.data);
    };
    fetchData();
  }, [token]);

  return (
    <>
    <h1>bonjour {user?.email}</h1>
    <h1>bonjour {user?.name}</h1>
</>
  );
}

export default RecupUser;
