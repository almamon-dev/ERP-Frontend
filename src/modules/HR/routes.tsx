import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import HRLayout from '@/layouts/HRLayout';
import { HRModuleSelectorPage } from './pages/HRModuleSelectorPage';
import { workspaceRoutes } from './Workspace/routes';
import { managementRoutes } from './Management/routes';

export const hrRoutes: RouteObject[] = [
  {
    path: 'hr',
    element: <HRLayout />,
    children: [
      {
        index: true,
        element: <HRModuleSelectorPage />,
      },
      {
        path: 'dashboard',
        element: <HRModuleSelectorPage />,
      },
      {
        path: 'workspace',
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          ...workspaceRoutes,
        ],
      },
      {
        path: 'management',
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          ...managementRoutes,
        ],
      },
      {
        path: 'portal/*',
        element: <Navigate to="/hr/workspace/dashboard" replace />,
      },
    ],
  },
  {
    path: 'hr-portal/*',
    element: <Navigate to="/hr/workspace/dashboard" replace />,
  },
];
