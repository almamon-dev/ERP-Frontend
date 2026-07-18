import React from 'react';
import { RouteObject } from 'react-router-dom';
import IncomePage from './pages/IncomePage';

export const incomeRoutes: RouteObject[] = [
    {
        path: 'income',
        element: <IncomePage />,
    }
];
