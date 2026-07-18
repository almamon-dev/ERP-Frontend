import React from 'react';
import { RouteObject } from 'react-router-dom';
import TransactionsPage from './pages/TransactionsPage';

export const transactionsRoutes: RouteObject[] = [
    {
        path: 'transactions',
        element: <TransactionsPage />,
    }
];
