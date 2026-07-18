import React from 'react';
import { RouteObject } from 'react-router-dom';
import BrandsPage from './pages/BrandsPage';

export const brandsRoutes: RouteObject[] = [
    {
        path: 'brands',
        element: <BrandsPage />,
    }
];
