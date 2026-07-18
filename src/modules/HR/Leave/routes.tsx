import React from 'react';
import { RouteObject } from 'react-router-dom';
import LeavePage from './pages/LeavePage';

export const leaveRoutes: RouteObject[] = [
    {
        path: 'leave',
        element: <LeavePage />,
    }
];
