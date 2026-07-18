import React from 'react';
import { RouteObject } from 'react-router-dom';
import PurchaseRequestsPage from './pages/PurchaseRequestsPage';

export const purchaseRequestsRoutes: RouteObject[] = [
    {
        path: 'purchase-requests',
        element: <PurchaseRequestsPage />,
    }
];
