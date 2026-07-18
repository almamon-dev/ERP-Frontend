import React from 'react';
import { RouteObject } from 'react-router-dom';
import MicrosoftPage from './pages/MicrosoftPage';

export const microsoftRoutes: RouteObject[] = [
    {
        path: 'microsoft',
        element: <MicrosoftPage />,
    }
];
