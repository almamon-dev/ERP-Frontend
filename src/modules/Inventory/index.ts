import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import { productsRoutes } from './Products';
import { categoriesRoutes } from './Categories';
import { brandsRoutes } from './Brands';
import { unitsRoutes } from './Units';
import { warehousesRoutes } from './Warehouses';
import { stockRoutes } from './Stock';
import { stockTransferRoutes } from './StockTransfer';
import { stockAdjustmentRoutes } from './StockAdjustment';

export const inventoryRoutes: RouteObject[] = [
    {
        path: 'inventory',
        element: React.createElement(AdminLayout),
        children: [
            ...productsRoutes,
            ...categoriesRoutes,
            ...brandsRoutes,
            ...unitsRoutes,
            ...warehousesRoutes,
            ...stockRoutes,
            ...stockTransferRoutes,
            ...stockAdjustmentRoutes,
        ]
    }
];
