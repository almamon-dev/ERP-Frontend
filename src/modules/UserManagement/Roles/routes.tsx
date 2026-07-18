import React from 'react';
import { RouteObject } from 'react-router-dom';
import RolesPage from './pages/RolesPage';

export const rolesRoutes: RouteObject[] = [
    {
        path: 'roles',
        element: <RolesPage />,
    }
];
