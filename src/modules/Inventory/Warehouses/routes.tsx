import React from 'react';
import { RouteObject } from 'react-router-dom';
import WarehousesPage from './pages/WarehousesPage';

export const warehousesRoutes: RouteObject[] = [
    {
        path: 'warehouses',
        element: <WarehousesPage />,
    }
];
