import React from 'react';
import { RouteObject } from 'react-router-dom';
import TaxPage from './pages/TaxPage';

export const taxRoutes: RouteObject[] = [
    {
        path: 'tax',
        element: <TaxPage />,
    }
];
