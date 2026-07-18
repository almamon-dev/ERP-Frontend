import React from 'react';
import { RouteObject } from 'react-router-dom';
import WebhooksPage from './pages/WebhooksPage';

export const webhooksRoutes: RouteObject[] = [
    {
        path: 'webhooks',
        element: <WebhooksPage />,
    }
];
