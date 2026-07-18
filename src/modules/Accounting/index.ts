import { chartOfAccountsRoutes } from './ChartOfAccounts';
import { journalEntriesRoutes } from './JournalEntries';
import { incomeRoutes } from './Income';
import { expensesRoutes } from './Expenses';
import { transactionsRoutes } from './Transactions';
import { taxRoutes } from './Tax';
import { financialReportsRoutes } from './FinancialReports';
import { RouteObject } from 'react-router-dom';

export const accountingRoutes: RouteObject[] = [
    {
        path: 'accounting',
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
