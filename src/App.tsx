import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { authRoutes } from './modules/Auth';
import { administrationRoutes } from './modules/Administration';
import { supportRoutes } from './modules/Support/routes';
import ModulesSelectorPage from './modules/Dashboard/pages/ModulesSelectorPage';

import AdminLayout from './layouts/AdminLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/web/login" replace />,
  },
  ...authRoutes,
  ...administrationRoutes,
  ...supportRoutes,
  {
    path: '/admin/modules',
    element: <ModulesSelectorPage />,
  },
  {
    element: <AdminLayout />,
    children: [
      // Other admin routes with sidebar will go here
    ]
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

export default function App() {
  return <RouterProvider router={router} />;
}
