import React from 'react';
import { RouteObject } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';

export const customersRoutes: RouteObject[] = [
    {
        path: 'customers',
        element: <CustomersPage />,
    }
];
