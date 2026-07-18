import React from 'react';
import { RouteObject } from 'react-router-dom';
import SessionsPage from './pages/SessionsPage';

export const sessionsRoutes: RouteObject[] = [
    {
        path: 'sessions',
        element: <SessionsPage />,
    }
];
