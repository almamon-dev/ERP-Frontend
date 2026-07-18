import React from 'react';
import { RouteObject } from 'react-router-dom';
import StockTransferPage from './pages/StockTransferPage';

export const stockTransferRoutes: RouteObject[] = [
    {
        path: 'stock-transfer',
        element: <StockTransferPage />,
    }
];
