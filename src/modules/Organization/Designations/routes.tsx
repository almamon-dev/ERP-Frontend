import React from 'react';
import { RouteObject } from 'react-router-dom';
import DesignationsPage from './pages/DesignationsPage';

export const designationsRoutes: RouteObject[] = [
    {
        path: 'designations',
        element: <DesignationsPage />,
    }
];
