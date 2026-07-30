import React from 'react';
import { RouteObject } from 'react-router-dom';
import AttendancePage from './pages/AttendancePage';

export const attendanceRoutes: RouteObject[] = [
    {
        path: 'attendance',
        element: <AttendancePage />,
    }
];
