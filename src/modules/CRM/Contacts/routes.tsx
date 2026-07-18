import React from 'react';
import { RouteObject } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';

export const contactsRoutes: RouteObject[] = [
    {
        path: 'contacts',
        element: <ContactsPage />,
    }
];
