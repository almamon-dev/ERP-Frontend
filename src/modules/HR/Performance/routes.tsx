import React from 'react';
import { RouteObject } from 'react-router-dom';
import PerformancePage from './pages/PerformancePage';

export const performanceRoutes: RouteObject[] = [
    {
        path: 'performance',
        element: <PerformancePage />,
    }
];
