import { RouteObject } from 'react-router-dom';
import SystemLogsList from './pages/List';

export const systemlogsRoutes: RouteObject[] = [
    {
        index: true,
        element: <SystemLogsList />
    }
];
