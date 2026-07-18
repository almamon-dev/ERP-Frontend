import React from 'react';
import { RouteObject } from 'react-router-dom';
import FinancialReportsPage from './pages/FinancialReportsPage';

export const financialReportsRoutes: RouteObject[] = [
    {
        path: 'financial-reports',
        element: <FinancialReportsPage />,
    }
];
