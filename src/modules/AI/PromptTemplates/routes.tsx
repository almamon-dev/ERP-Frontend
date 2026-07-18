import React from 'react';
import { RouteObject } from 'react-router-dom';
import PromptTemplatesPage from './pages/PromptTemplatesPage';

export const promptTemplatesRoutes: RouteObject[] = [
    {
        path: 'prompt-templates',
        element: <PromptTemplatesPage />,
    }
];
