import React from 'react';
import { RouteObject } from 'react-router-dom';
import BackupPage from './pages/BackupPage';

export const backupRoutes: RouteObject[] = [
    {
        path: 'backup',
        element: <BackupPage />,
    }
];
