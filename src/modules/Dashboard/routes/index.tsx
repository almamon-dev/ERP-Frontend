import { RouteObject } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';

export const dashboardRoutes: RouteObject = {
  path: '/web/s/:sessionId',
  element: <DashboardPage />,
};
