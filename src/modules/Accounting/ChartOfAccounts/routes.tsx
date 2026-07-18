import React from 'react';
import { RouteObject } from 'react-router-dom';
import ChartOfAccountsPage from './pages/ChartOfAccountsPage';

export const chartOfAccountsRoutes: RouteObject[] = [
    {
        path: 'chart-of-accounts',
        element: <ChartOfAccountsPage />,
    }
];
