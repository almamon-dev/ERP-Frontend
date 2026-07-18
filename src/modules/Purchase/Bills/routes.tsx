import React from 'react';
import { RouteObject } from 'react-router-dom';
import BillsPage from './pages/BillsPage';

export const billsRoutes: RouteObject[] = [
    {
        path: 'bills',
        element: <BillsPage />,
    }
];
