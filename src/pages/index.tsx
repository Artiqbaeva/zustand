import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './home/Home';
import Stats from './statistics/Stats';
import Login from './login/Login';
import Auth from './auth/Auth';

const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Auth />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'home',
              element: <Home />,
            },
            {
              path: 'statistics',
              element: <Stats />,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return routes;
};

export default React.memo(MainRoutes);
