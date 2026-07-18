import React from 'react';
import { RouteObject } from 'react-router-dom';
import PermissionsPage from './pages/PermissionsPage';

export const permissionsRoutes: RouteObject[] = [
    {
        path: 'permissions',
        element: <PermissionsPage />,
    }
];
