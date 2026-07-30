import React from 'react';
import { RouteObject } from 'react-router-dom';
import PayrollPage from './pages/PayrollPage';

export const payrollRoutes: RouteObject[] = [
    {
        path: 'payroll',
        element: <PayrollPage />,
    }
];
