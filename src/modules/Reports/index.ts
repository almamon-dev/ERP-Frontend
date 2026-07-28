import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import { salesReportsRoutes } from './SalesReports';
import { purchaseReportsRoutes } from './PurchaseReports';
import { inventoryReportsRoutes } from './InventoryReports';
import { accountingReportsRoutes } from './AccountingReports';
import { hrReportsRoutes } from './HrReports';
import { dashboardAnalyticsRoutes } from './DashboardAnalytics';

export const reportsRoutes: RouteObject[] = [
    {
        path: 'reports',
        element: React.createElement(AdminLayout),
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
