import React from 'react';
import { RouteObject } from 'react-router-dom';
import BranchesPage from './pages/BranchesPage';

export const branchesRoutes: RouteObject[] = [
    {
        path: 'branches',
        element: <BranchesPage />,
    }
];
