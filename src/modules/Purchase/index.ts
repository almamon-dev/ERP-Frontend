import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import { vendorsRoutes } from './Vendors';
import { purchaseRequestsRoutes } from './PurchaseRequests';
import { purchaseOrdersRoutes } from './PurchaseOrders';
import { goodsReceiveRoutes } from './GoodsReceive';
import { billsRoutes } from './Bills';
import { returnsRoutes } from './Returns';

export const purchaseRoutes: RouteObject[] = [
    {
        path: 'purchase',
        element: React.createElement(AdminLayout),
        children: [
            ...vendorsRoutes,
            ...purchaseRequestsRoutes,
            ...purchaseOrdersRoutes,
            ...goodsReceiveRoutes,
            ...billsRoutes,
            ...returnsRoutes,
        ]
    }
];
