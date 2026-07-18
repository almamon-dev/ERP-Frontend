import React from 'react';
import { RouteObject } from 'react-router-dom';
import QuotationsPage from './pages/QuotationsPage';

export const quotationsRoutes: RouteObject[] = [
    {
        path: 'quotations',
        element: <QuotationsPage />,
    }
];
