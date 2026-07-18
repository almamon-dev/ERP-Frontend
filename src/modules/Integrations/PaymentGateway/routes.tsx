import React from 'react';
import { RouteObject } from 'react-router-dom';
import PaymentGatewayPage from './pages/PaymentGatewayPage';

export const paymentGatewayRoutes: RouteObject[] = [
    {
        path: 'payment-gateway',
        element: <PaymentGatewayPage />,
    }
];
