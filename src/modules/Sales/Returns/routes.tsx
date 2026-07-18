import React from 'react';
import { RouteObject } from 'react-router-dom';
import ReturnsPage from './pages/ReturnsPage';

export const returnsRoutes: RouteObject[] = [
    {
        path: 'returns',
        element: <ReturnsPage />,
    }
];
