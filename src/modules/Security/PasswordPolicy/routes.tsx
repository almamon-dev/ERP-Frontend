import React from 'react';
import { RouteObject } from 'react-router-dom';
import PasswordPolicyPage from './pages/PasswordPolicyPage';

export const passwordPolicyRoutes: RouteObject[] = [
    {
        path: 'password-policy',
        element: <PasswordPolicyPage />,
    }
];
