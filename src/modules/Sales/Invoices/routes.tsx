import React from 'react';
import { RouteObject } from 'react-router-dom';
import InvoicesPage from './pages/InvoicesPage';

export const invoicesRoutes: RouteObject[] = [
    {
        path: 'invoices',
        element: <InvoicesPage />,
    }
];
