import React from 'react';
import { RouteObject } from 'react-router-dom';
import AiChatPage from './pages/AiChatPage';

export const aiChatRoutes: RouteObject[] = [
    {
        path: 'ai-chat',
        element: <AiChatPage />,
    }
];
