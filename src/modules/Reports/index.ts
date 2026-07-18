import { salesReportsRoutes } from './SalesReports';
import { purchaseReportsRoutes } from './PurchaseReports';
import { inventoryReportsRoutes } from './InventoryReports';
import { accountingReportsRoutes } from './AccountingReports';
import { hrReportsRoutes } from './HrReports';
import { dashboardAnalyticsRoutes } from './DashboardAnalytics';
import { RouteObject } from 'react-router-dom';

export const reportsRoutes: RouteObject[] = [
    {
        path: 'reports',
        children: [
            ...salesReportsRoutes,
            ...purchaseReportsRoutes,
            ...inventoryReportsRoutes,
            ...accountingReportsRoutes,
            ...hrReportsRoutes,
            ...dashboardAnalyticsRoutes,
        ]
    }
];
