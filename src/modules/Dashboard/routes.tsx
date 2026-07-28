import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import DashboardPage from './pages/DashboardPage';

export const dashboardRoutes: RouteObject[] = [
    {
        path: 'dashboard',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            }
        ]
    }
];
