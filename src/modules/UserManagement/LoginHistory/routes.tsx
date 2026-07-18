import React from 'react';
import { RouteObject } from 'react-router-dom';
import LoginHistoryPage from './pages/LoginHistoryPage';

export const loginHistoryRoutes: RouteObject[] = [
    {
        path: 'login-history',
        element: <LoginHistoryPage />,
    }
];
