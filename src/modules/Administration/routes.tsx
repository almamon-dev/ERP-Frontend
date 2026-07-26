import { RouteObject, Navigate } from 'react-router-dom';
import { accessManagementRoutes } from './AccessManagement';
import { organizationRoutes } from './Organization';
import { securityRoutes } from './Security';
import { settingsRoutes } from './Settings';
import { integrationsRoutes } from './Integrations';
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
        path: 'access',
        children: accessManagementRoutes,
      },
      {
        path: 'organization',
        children: organizationRoutes,
      },
      {
        path: 'security',
        children: securityRoutes,
      },
      {
        path: 'settings',
        children: settingsRoutes,
      },
      {
        path: 'integrations',
        children: integrationsRoutes,
      },
    ]
  }
];

