import React from 'react';
import { RouteObject } from 'react-router-dom';
import PurchaseReportsPage from './pages/PurchaseReportsPage';

export const purchaseReportsRoutes: RouteObject[] = [
    {
        path: 'purchase-reports',
        element: <PurchaseReportsPage />,
    }
];
