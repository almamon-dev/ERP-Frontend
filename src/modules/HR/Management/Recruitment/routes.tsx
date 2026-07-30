import React from 'react';
import { RouteObject } from 'react-router-dom';
import RecruitmentPage from './pages/RecruitmentPage';

export const recruitmentRoutes: RouteObject[] = [
    {
        path: 'recruitment',
        element: <RecruitmentPage />,
    }
];
