import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import { chartOfAccountsRoutes } from './ChartOfAccounts';
import { journalEntriesRoutes } from './JournalEntries';
import { incomeRoutes } from './Income';
import { expensesRoutes } from './Expenses';
import { transactionsRoutes } from './Transactions';
import { taxRoutes } from './Tax';
import { financialReportsRoutes } from './FinancialReports';

export const accountingRoutes: RouteObject[] = [
    {
        path: 'accounting',
        element: React.createElement(AdminLayout),
        children: [
            ...chartOfAccountsRoutes,
            ...journalEntriesRoutes,
            ...incomeRoutes,
            ...expensesRoutes,
            ...transactionsRoutes,
            ...taxRoutes,
            ...financialReportsRoutes,
        ]
    }
];
