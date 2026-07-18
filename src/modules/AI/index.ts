import { aiAssistantRoutes } from './AiAssistant';
import { aiChatRoutes } from './AiChat';
import { aiAnalyticsRoutes } from './AiAnalytics';
import { promptTemplatesRoutes } from './PromptTemplates';
import { aiUsageRoutes } from './AiUsage';
import { RouteObject } from 'react-router-dom';

export const aIRoutes: RouteObject[] = [
    {
        path: 'a-i',
        children: [
            ...aiAssistantRoutes,
            ...aiChatRoutes,
            ...aiAnalyticsRoutes,
            ...promptTemplatesRoutes,
            ...aiUsageRoutes,
        ]
    }
];
