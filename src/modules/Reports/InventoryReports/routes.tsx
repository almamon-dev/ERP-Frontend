import React from 'react';
import { RouteObject } from 'react-router-dom';
import InventoryReportsPage from './pages/InventoryReportsPage';

export const inventoryReportsRoutes: RouteObject[] = [
    {
        path: 'inventory-reports',
        element: <InventoryReportsPage />,
    }
];
