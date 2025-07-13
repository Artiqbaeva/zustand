import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from '../../zustand/store';

const Auth = () => {
  const { token } = useStore();
  console.log("Auth token:", token); 
  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default React.memo(Auth);
