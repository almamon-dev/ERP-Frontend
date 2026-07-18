import { customersRoutes } from './Customers';
import { quotationsRoutes } from './Quotations';
import { ordersRoutes } from './Orders';
import { invoicesRoutes } from './Invoices';
import { paymentsRoutes } from './Payments';
import { returnsRoutes } from './Returns';
import { RouteObject } from 'react-router-dom';

export const salesRoutes: RouteObject[] = [
    {
        path: 'sales',
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
