import React from 'react';
import { RouteObject } from 'react-router-dom';
import DepartmentsPage from './pages/DepartmentsPage';

export const departmentsRoutes: RouteObject[] = [
    {
        path: 'departments',
        element: <DepartmentsPage />,
    }
];
