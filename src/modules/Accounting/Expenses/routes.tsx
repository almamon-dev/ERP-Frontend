import React from 'react';
import { RouteObject } from 'react-router-dom';
import ExpensesPage from './pages/ExpensesPage';

export const expensesRoutes: RouteObject[] = [
    {
        path: 'expenses',
        element: <ExpensesPage />,
    }
];
