import React from 'react';
import { RouteObject } from 'react-router-dom';
import SMTPPage from './pages/SMTPPage';

export const sMTPRoutes: RouteObject[] = [
    {
        path: 's-m-t-p',
        element: <SMTPPage />,
    }
];
