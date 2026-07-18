import React from 'react';
import { RouteObject } from 'react-router-dom';
import CompaniesPage from './pages/CompaniesPage';

export const companiesRoutes: RouteObject[] = [
    {
        path: 'companies',
        element: <CompaniesPage />,
    }
];
