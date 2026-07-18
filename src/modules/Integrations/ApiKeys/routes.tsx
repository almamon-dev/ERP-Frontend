import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApiKeysPage from './pages/ApiKeysPage';

export const apiKeysRoutes: RouteObject[] = [
    {
        path: 'api-keys',
        element: <ApiKeysPage />,
    }
];
