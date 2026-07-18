import React from 'react';
import { RouteObject } from 'react-router-dom';
import AccountingReportsPage from './pages/AccountingReportsPage';

export const accountingReportsRoutes: RouteObject[] = [
    {
        path: 'accounting-reports',
        element: <AccountingReportsPage />,
    }
];
