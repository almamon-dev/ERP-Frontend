import React from 'react';
import { RouteObject } from 'react-router-dom';
import AiUsagePage from './pages/AiUsagePage';

export const aiUsageRoutes: RouteObject[] = [
    {
        path: 'ai-usage',
        element: <AiUsagePage />,
    }
];
