import { RouteObject, Navigate } from 'react-router-dom';
import { userManagementRoutes } from './UserManagement/routes';
import { organizationRoutes } from './Organization/routes';
import AdminLayout from '@/layouts/AdminLayout';

export const administrationRoutes: RouteObject[] = [
  {
    path: 'administration',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="organization/companies" replace />,
      },
      {
        path: 'user-management',
        children: userManagementRoutes,
      },
      {
        path: 'organization',
        children: organizationRoutes,
      },
    ]
  }
];
