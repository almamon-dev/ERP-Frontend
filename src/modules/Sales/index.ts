import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import { customersRoutes } from './Customers';
import { quotationsRoutes } from './Quotations';
import { ordersRoutes } from './Orders';
import { invoicesRoutes } from './Invoices';
import { paymentsRoutes } from './Payments';
import { returnsRoutes } from './Returns';

export const salesRoutes: RouteObject[] = [
    {
        path: 'sales',
        element: React.createElement(AdminLayout),
        children: [
            ...customersRoutes,
            ...quotationsRoutes,
            ...ordersRoutes,
            ...invoicesRoutes,
            ...paymentsRoutes,
            ...returnsRoutes,
        ]
    }
];
