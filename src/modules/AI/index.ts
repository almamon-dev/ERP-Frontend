import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import { aiAssistantRoutes } from './AiAssistant';
import { aiChatRoutes } from './AiChat';
import { aiAnalyticsRoutes } from './AiAnalytics';
import { promptTemplatesRoutes } from './PromptTemplates';
import { aiUsageRoutes } from './AiUsage';

export const aIRoutes: RouteObject[] = [
    {
        path: 'ai',
        element: React.createElement(AdminLayout),
        children: [
            ...aiAssistantRoutes,
            ...aiChatRoutes,
            ...aiAnalyticsRoutes,
            ...promptTemplatesRoutes,
            ...aiUsageRoutes,
        ]
    }
];
