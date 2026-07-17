import { 
    LayoutDashboard, Users, ShoppingCart, Package, 
    FileText, Settings, Briefcase, Calculator, PieChart,
    FolderKanban, Receipt, Truck, Building2, Brain,
    Calendar, FileBarChart, HandCoins, UserCircle,
    UserPlus, Boxes, FileSpreadsheet, Map, ClipboardList, ShieldCheck,
    Network, Globe, Mail, Webhook, HardDrive, Lock, RefreshCcw, CreditCard,
    Bell, Headphones, Key, Activity, Clock, Shield, Database, Phone, CheckCircle,
    RotateCcw, Tags, Layers, Home, Target, Share2
} from 'lucide-react';

export const navigationMap: Record<string, any[]> = {
    'dashboard': [
        { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Analytics', path: '/dashboard/analytics', icon: FileBarChart },
    ],
    'administration': [
        {
            group: 'User Management',
            items: [
                { name: 'Users', path: '/settings/users', icon: Users },
                { name: 'Roles', path: '/settings/roles', icon: ShieldCheck },
                { name: 'Permissions', path: '/settings/permissions', icon: Key },
                { name: 'Login History', path: '/settings/login-history', icon: Clock },
                { name: 'Activity Logs', path: '/settings/activity-logs', icon: Activity },
            ]
        },
        {
            group: 'Organization',
            items: [
                { name: 'Companies', path: '/settings/companies', icon: Building2 },
                { name: 'Branches', path: '/settings/branches', icon: Map },
                { name: 'Departments', path: '/settings/departments', icon: Network },
                { name: 'Designations', path: '/settings/designations', icon: Briefcase },
                { name: 'Teams', path: '/settings/teams', icon: Users },
            ]
        },
        {
            group: 'Security',
            items: [
                { name: 'Password Policy', path: '/settings/password-policy', icon: Lock },
                { name: 'Two Factor', path: '/settings/two-factor', icon: Shield },
                { name: 'Sessions', path: '/settings/sessions', icon: Activity },
                { name: 'Audit Logs', path: '/settings/audit-logs', icon: ClipboardList },
            ]
        },
        {
            group: 'Settings',
            items: [
                { name: 'General', path: '/settings/general', icon: Settings },
                { name: 'Localization', path: '/settings/localization', icon: Globe },
                { name: 'SMTP', path: '/settings/smtp', icon: Mail },
                { name: 'Notification', path: '/settings/notification', icon: Bell },
                { name: 'Storage', path: '/settings/storage', icon: HardDrive },
                { name: 'Backup', path: '/settings/backup', icon: Database },
                { name: 'Maintenance', path: '/settings/maintenance', icon: Settings },
            ]
        },
        {
            group: 'Integrations',
            items: [
                { name: 'API Keys', path: '/settings/api-keys', icon: Key },
                { name: 'Webhooks', path: '/settings/webhooks', icon: Webhook },
                { name: 'Google', path: '/settings/google', icon: Globe },
                { name: 'Microsoft', path: '/settings/microsoft', icon: LayoutDashboard },
                { name: 'Payment Gateway', path: '/settings/payment-gateway', icon: CreditCard },
            ]
        }
    ],
    'crm': [
        { name: 'Leads', path: '/crm/leads', icon: UserPlus },
        { name: 'Customers', path: '/crm/customers', icon: Users },
        { name: 'Contacts', path: '/crm/contacts', icon: UserCircle },
        { name: 'Opportunities', path: '/crm/opportunities', icon: Target },
        { name: 'Follow Ups', path: '/crm/follow-ups', icon: Calendar },
        { name: 'Communications', path: '/crm/communications', icon: Phone },
    ],
    'sales': [
        { name: 'Customers', path: '/sales/customers', icon: Users },
        { name: 'Quotations', path: '/sales/quotations', icon: FileText },
        { name: 'Orders', path: '/sales/orders', icon: ShoppingCart },
        { name: 'Invoices', path: '/sales/invoices', icon: Receipt },
        { name: 'Payments', path: '/sales/payments', icon: CreditCard },
        { name: 'Returns', path: '/sales/returns', icon: RotateCcw },
    ],
    'purchase': [
        { name: 'Vendors', path: '/purchase/vendors', icon: Users },
        { name: 'Purchase Requests', path: '/purchase/requests', icon: FileText },
        { name: 'Purchase Orders', path: '/purchase/orders', icon: ShoppingCart },
        { name: 'Goods Receive', path: '/purchase/goods-receive', icon: Package },
        { name: 'Bills', path: '/purchase/bills', icon: Receipt },
        { name: 'Returns', path: '/purchase/returns', icon: RotateCcw },
    ],
    'inventory': [
        { name: 'Products', path: '/inventory/products', icon: Package },
        { name: 'Categories', path: '/inventory/categories', icon: Layers },
        { name: 'Brands', path: '/inventory/brands', icon: Tags },
        { name: 'Units', path: '/inventory/units', icon: Calculator },
        { name: 'Warehouses', path: '/inventory/warehouses', icon: Building2 },
        { name: 'Stock', path: '/inventory/stock', icon: Boxes },
        { name: 'Stock Transfer', path: '/inventory/stock-transfer', icon: Truck },
        { name: 'Stock Adjustment', path: '/inventory/stock-adjustment', icon: Settings },
    ],
    'hr': [
        { name: 'Employees', path: '/hr/employees', icon: Users },
        { name: 'Attendance', path: '/hr/attendance', icon: Calendar },
        { name: 'Leave', path: '/hr/leave', icon: Home },
        { name: 'Payroll', path: '/hr/payroll', icon: HandCoins },
        { name: 'Recruitment', path: '/hr/recruitment', icon: UserPlus },
        { name: 'Performance', path: '/hr/performance', icon: Target },
        { name: 'Documents', path: '/hr/documents', icon: FileText },
    ],
    'accounting': [
        { name: 'Chart Of Accounts', path: '/accounting/chart-of-accounts', icon: FileSpreadsheet },
        { name: 'Journal Entries', path: '/accounting/journal-entries', icon: FileText },
        { name: 'Income', path: '/accounting/income', icon: HandCoins },
        { name: 'Expenses', path: '/accounting/expenses', icon: Receipt },
        { name: 'Transactions', path: '/accounting/transactions', icon: Activity },
        { name: 'Tax', path: '/accounting/tax', icon: Calculator },
        { name: 'Financial Reports', path: '/accounting/financial-reports', icon: PieChart },
    ],
    'reports': [
        { name: 'Sales Reports', path: '/reports/sales', icon: FileText },
        { name: 'Purchase Reports', path: '/reports/purchase', icon: FileText },
        { name: 'Inventory Reports', path: '/reports/inventory', icon: Package },
        { name: 'Accounting Reports', path: '/reports/accounting', icon: FileSpreadsheet },
        { name: 'HR Reports', path: '/reports/hr', icon: Users },
        { name: 'Dashboard Analytics', path: '/reports/dashboard-analytics', icon: PieChart },
    ],
    'ai': [
        { name: 'AI Assistant', path: '/ai/assistant', icon: Brain },
        { name: 'AI Chat', path: '/ai/chat', icon: Phone },
        { name: 'AI Analytics', path: '/ai/analytics', icon: PieChart },
        { name: 'Prompt Templates', path: '/ai/prompt-templates', icon: FileText },
        { name: 'AI Usage', path: '/ai/usage', icon: Activity },
    ],
    'support': [
        { name: 'Tickets', path: '/support/tickets', icon: FileText },
        { name: 'Knowledge Base', path: '/support/knowledge-base', icon: Database },
        { name: 'FAQ', path: '/support/faq', icon: CheckCircle },
    ],
};
