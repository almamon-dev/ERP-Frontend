import React from 'react';
import { RouteObject } from 'react-router-dom';
import VendorsPage from './pages/VendorsPage';

export const vendorsRoutes: RouteObject[] = [
    {
        path: 'vendors',
        element: <VendorsPage />,
    }
];
