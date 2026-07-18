import React from 'react';
import { RouteObject } from 'react-router-dom';
import StockAdjustmentPage from './pages/StockAdjustmentPage';

export const stockAdjustmentRoutes: RouteObject[] = [
    {
        path: 'stock-adjustment',
        element: <StockAdjustmentPage />,
    }
];
