import React from 'react';
import { RouteObject } from 'react-router-dom';
import OrdersPage from './pages/OrdersPage';

export const ordersRoutes: RouteObject[] = [
    {
        path: 'orders',
        element: <OrdersPage />,
    }
];
