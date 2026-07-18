import React from 'react';
import { RouteObject } from 'react-router-dom';
import AiAnalyticsPage from './pages/AiAnalyticsPage';

export const aiAnalyticsRoutes: RouteObject[] = [
    {
        path: 'ai-analytics',
        element: <AiAnalyticsPage />,
    }
];
