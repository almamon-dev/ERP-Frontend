import React from 'react';
import { RouteObject } from 'react-router-dom';
import SalesReportsPage from './pages/SalesReportsPage';

export const salesReportsRoutes: RouteObject[] = [
    {
        path: 'sales-reports',
        element: <SalesReportsPage />,
    }
];
