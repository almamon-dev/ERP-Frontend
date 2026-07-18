import React from 'react';
import { RouteObject } from 'react-router-dom';
import MaintenancePage from './pages/MaintenancePage';

export const maintenanceRoutes: RouteObject[] = [
    {
        path: 'maintenance',
        element: <MaintenancePage />,
    }
];
