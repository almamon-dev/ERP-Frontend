import React from 'react';
import { RouteObject } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';

export const categoriesRoutes: RouteObject[] = [
    {
        path: 'categories',
        element: <CategoriesPage />,
    }
];
