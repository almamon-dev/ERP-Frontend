import React from 'react';
import { RouteObject } from 'react-router-dom';
import StockPage from './pages/StockPage';

export const stockRoutes: RouteObject[] = [
    {
        path: 'stock',
        element: <StockPage />,
    }
];
