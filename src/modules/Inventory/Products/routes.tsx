import React from 'react';
import { RouteObject } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';

export const productsRoutes: RouteObject[] = [
    {
        path: 'products',
        element: <ProductsPage />,
    }
];
