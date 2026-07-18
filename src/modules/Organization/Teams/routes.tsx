import React from 'react';
import { RouteObject } from 'react-router-dom';
import TeamsPage from './pages/TeamsPage';

export const teamsRoutes: RouteObject[] = [
    {
        path: 'teams',
        element: <TeamsPage />,
    }
];
