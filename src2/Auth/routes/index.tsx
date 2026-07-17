import { RouteObject } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';

export const authRoutes: RouteObject = {
  path: '/web',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <LoginPage />,
    },
  ],
};
