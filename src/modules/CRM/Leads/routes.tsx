import React from 'react';
import { RouteObject } from 'react-router-dom';
import LeadsPage from './pages/LeadsPage';

export const leadsRoutes: RouteObject[] = [
    {
        path: 'leads',
        element: <LeadsPage />,
    }
];
