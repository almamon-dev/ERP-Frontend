import React from 'react';
import { RouteObject } from 'react-router-dom';
import GeneralPage from './pages/GeneralPage';

export const generalRoutes: RouteObject[] = [
    {
        path: 'general',
        element: <GeneralPage />,
    }
];
