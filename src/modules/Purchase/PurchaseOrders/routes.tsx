import React from 'react';
import { RouteObject } from 'react-router-dom';
import PurchaseOrdersPage from './pages/PurchaseOrdersPage';

export const purchaseOrdersRoutes: RouteObject[] = [
    {
        path: 'purchase-orders',
        element: <PurchaseOrdersPage />,
    }
];
