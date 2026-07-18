import React from 'react';
import { RouteObject } from 'react-router-dom';
import LocalizationPage from './pages/LocalizationPage';

export const localizationRoutes: RouteObject[] = [
    {
        path: 'localization',
        element: <LocalizationPage />,
    }
];
