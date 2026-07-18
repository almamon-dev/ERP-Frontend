import React from 'react';
import { RouteObject } from 'react-router-dom';
import CommunicationsPage from './pages/CommunicationsPage';

export const communicationsRoutes: RouteObject[] = [
    {
        path: 'communications',
        element: <CommunicationsPage />,
    }
];
