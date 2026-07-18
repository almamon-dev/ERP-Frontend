import React from 'react';
import { RouteObject } from 'react-router-dom';
import StoragePage from './pages/StoragePage';

export const storageRoutes: RouteObject[] = [
    {
        path: 'storage',
        element: <StoragePage />,
    }
];
