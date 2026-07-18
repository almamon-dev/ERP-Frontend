import React from 'react';
import { RouteObject } from 'react-router-dom';
import AuditLogsPage from './pages/AuditLogsPage';

export const auditLogsRoutes: RouteObject[] = [
    {
        path: 'audit-logs',
        element: <AuditLogsPage />,
    }
];
