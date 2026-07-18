import React from 'react';
import { RouteObject } from 'react-router-dom';
import HrReportsPage from './pages/HrReportsPage';

export const hrReportsRoutes: RouteObject[] = [
    {
        path: 'hr-reports',
        element: <HrReportsPage />,
    }
];
