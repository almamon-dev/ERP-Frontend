import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';
import PrivateRoute from './guards/PrivateRoute';
import PublicRoute from './guards/PublicRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <h1 className="text-4xl font-bold">Enterprise ERP Dashboard</h1>
      </div>
    ),
  },
  {
    element: <PublicRoute />,
    children: publicRoutes,
  },
  {
    element: <PrivateRoute />,
    children: privateRoutes,
  },
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
      </div>
    ),
  },
]);
