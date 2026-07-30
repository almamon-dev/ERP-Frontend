import React from 'react';
import { RouteObject } from 'react-router-dom';
import DocumentsPage from './pages/DocumentsPage';

export const documentsRoutes: RouteObject[] = [
    {
        path: 'documents',
        element: <DocumentsPage />,
    }
];
