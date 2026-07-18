import React from 'react';
import { RouteObject } from 'react-router-dom';
import OpportunitiesPage from './pages/OpportunitiesPage';

export const opportunitiesRoutes: RouteObject[] = [
    {
        path: 'opportunities',
        element: <OpportunitiesPage />,
    }
];
