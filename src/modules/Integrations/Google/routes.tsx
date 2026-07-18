import React from 'react';
import { RouteObject } from 'react-router-dom';
import GooglePage from './pages/GooglePage';

export const googleRoutes: RouteObject[] = [
    {
        path: 'google',
        element: <GooglePage />,
    }
];
