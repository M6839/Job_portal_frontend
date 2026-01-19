import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import axios from 'axios';
import { API_URI } from '../data'
export const JobContextData = createContext();
const JobContext = ({ children }) => {
    const [user,setUser]=useState(null);
    useEffect(() => {
  axios
    .get(`${API_URI}/api/v1/user/me`, {
      withCredentials: true
    })
    .then(res => setUser(res.data.user))
    .catch(() => setUser(null));
}, []);

  return (
    <JobContextData.Provider value={{user, setUser}}>
        {children}
    </JobContextData.Provider>
  )
}

export default JobContext