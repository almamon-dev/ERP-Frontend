import React from 'react';
import { RouteObject } from 'react-router-dom';
import UnitsPage from './pages/UnitsPage';

export const unitsRoutes: RouteObject[] = [
    {
        path: 'units',
        element: <UnitsPage />,
    }
];
