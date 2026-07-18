import React from 'react';
import { RouteObject } from 'react-router-dom';
import JournalEntriesPage from './pages/JournalEntriesPage';

export const journalEntriesRoutes: RouteObject[] = [
    {
        path: 'journal-entries',
        element: <JournalEntriesPage />,
    }
];
