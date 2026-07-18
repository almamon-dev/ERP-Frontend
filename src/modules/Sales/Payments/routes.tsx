import React from 'react';
import { RouteObject } from 'react-router-dom';
import PaymentsPage from './pages/PaymentsPage';

export const paymentsRoutes: RouteObject[] = [
    {
        path: 'payments',
        element: <PaymentsPage />,
    }
];
