import React from 'react';
import { RouteObject } from 'react-router-dom';
import DashboardAnalyticsPage from './pages/DashboardAnalyticsPage';

export const dashboardAnalyticsRoutes: RouteObject[] = [
    {
        path: 'dashboard-analytics',
        element: <DashboardAnalyticsPage />,
    }
];
