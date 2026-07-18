import React from 'react';
import { RouteObject } from 'react-router-dom';
import FollowUpsPage from './pages/FollowUpsPage';

export const followUpsRoutes: RouteObject[] = [
    {
        path: 'follow-ups',
        element: <FollowUpsPage />,
    }
];
