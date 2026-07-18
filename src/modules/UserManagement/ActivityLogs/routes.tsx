import React from 'react';
import { RouteObject } from 'react-router-dom';
import ActivityLogsPage from './pages/ActivityLogsPage';

export const activityLogsRoutes: RouteObject[] = [
    {
        path: 'activity-logs',
        element: <ActivityLogsPage />,
    }
];
