import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("tokenOfOurApp");
    if (token) {
      const _user = jwt_decode(token);
      console.log("🚀 ~ file: index.jsx:12 ~ useEffect ~ _user", _user);
      setUser(_user);
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("tokenOfOurApp");
      navigate("/login");
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:16 ~ handleLogout ~ error", error);
    }
  };

  return (
    <div className='fixed flex h-full w-full items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold capitalize underline'>{user?._id}</h1>
        <button className='my-4 rounded-full border bg-slate-400 p-2 text-white' onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
