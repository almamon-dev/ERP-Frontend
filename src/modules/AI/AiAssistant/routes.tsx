import React from 'react';
import { RouteObject } from 'react-router-dom';
import AiAssistantPage from './pages/AiAssistantPage';

export const aiAssistantRoutes: RouteObject[] = [
    {
        path: 'ai-assistant',
        element: <AiAssistantPage />,
    }
];
