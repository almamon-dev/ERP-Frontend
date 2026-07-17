import { RouteObject } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

export const authRoutes: RouteObject = {
  path: 'web/login',
  element: <LoginPage />,
};
