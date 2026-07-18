import React from 'react';
import { RouteObject } from 'react-router-dom';
import KnowledgeBasePage from './pages/KnowledgeBasePage';

export const knowledgeBaseRoutes: RouteObject[] = [
    {
        path: 'knowledge-base',
        element: <KnowledgeBasePage />,
    }
];
