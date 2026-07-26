import { 
    LayoutDashboard, Users, ShoppingCart, Package, 
    FileText, Settings, Briefcase, Calculator, PieChart,
    FolderKanban, Receipt, Truck, Building2, Brain,
    Calendar, FileBarChart, HandCoins, UserCircle,
    UserPlus, Boxes, FileSpreadsheet, Map, ClipboardList, ShieldCheck,
    Network, Globe, Mail, Webhook, HardDrive, Lock, RefreshCcw, CreditCard,
    Bell, Headphones, Key, Activity, Clock, Shield, Database, Phone, CheckCircle,
    RotateCcw, Tags, Layers, Home, Target, Share2, FileCheck, Smartphone, DollarSign,
    Languages, Cloud, MessageSquare, Link, Workflow, ListTree, Zap, TrendingUp,
    ListPlus, TextCursorInput, FileCode, MapPin, FolderOpen, UploadCloud, Image, Printer,
    Bot, TerminalSquare, Gauge, Cpu, Type, Wrench, ListOrdered, Timer, Terminal, Server,
    AlertTriangle, LineChart, ShieldAlert
} from 'lucide-react';

export const navigationMap: Record<string, any[]> = {
    'dashboard': [
        { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Analytics', path: '/dashboard/analytics', icon: FileBarChart },
    ],
    'administration': [
        {
            category: 'Core',
            group: 'Organization',
            icon: Building2,
            items: [
                { name: 'Companies', path: '/administration/organization/companies', icon: Building2 },
                { name: 'Branches', path: '/administration/organization/branches', icon: Map },
                { name: 'Departments', path: '/administration/organization/departments', icon: Network },
                { name: 'Designations', path: '/administration/organization/designations', icon: Briefcase },
                { name: 'Teams', path: '/administration/organization/teams', icon: Users },
                { name: 'Business Units', path: '/administration/organization/business-units', icon: Layers },
            ]
        },
        {
            category: 'Core',
            group: 'Access Management',
            icon: ShieldAlert,
            items: [
                { name: 'Users', path: '/administration/access/users', icon: UserCircle },
                { name: 'Roles', path: '/administration/access/roles', icon: ShieldCheck },
                { name: 'Permissions', path: '/administration/access/permissions', icon: Key },
                { name: 'User Groups', path: '/administration/access/user-groups', icon: Users },
                { name: 'Access Policies', path: '/administration/access/policies', icon: FileCheck },
            ]
        },
        {
            category: 'Core',
            group: 'Security',
            icon: Shield,
            items: [
                { name: 'Password Policy', path: '/administration/security/password-policy', icon: Lock },
                { name: 'Two-Factor Auth', path: '/administration/security/two-factor', icon: Shield },
                { name: 'Active Sessions', path: '/administration/security/sessions', icon: Activity },
                { name: 'Login History', path: '/administration/security/login-history', icon: Clock },
                { name: 'Activity Logs', path: '/administration/security/activity-logs', icon: Activity },
                { name: 'Audit Logs', path: '/administration/security/audit-logs', icon: ClipboardList },
                { name: 'IP Whitelist', path: '/administration/security/ip-whitelist', icon: Globe },
                { name: 'Device Management', path: '/administration/security/devices', icon: Smartphone },
            ]
        },
        {
            category: 'Configuration',
            group: 'System Settings',
            icon: Settings,
            items: [
                { name: 'General', path: '/administration/settings/general', icon: Settings },
                { name: 'Localization', path: '/administration/settings/localization', icon: Globe },
                { name: 'Notifications', path: '/administration/settings/notifications', icon: Bell },
                { name: 'Backup & Restore', path: '/administration/settings/backup', icon: Database },
                { name: 'Maintenance Mode', path: '/administration/settings/maintenance', icon: Wrench },
                { name: 'Security', path: '/administration/settings/security', icon: Shield },
                { name: 'Queue & Scheduler', path: '/administration/settings/queue', icon: Timer },
                { name: 'Cache Management', path: '/administration/settings/cache', icon: RefreshCcw },
                { name: 'System Logs', path: '/administration/settings/logs', icon: Terminal },
                { name: 'License', path: '/administration/settings/license', icon: Key },
            ]
        },
        {
            category: 'Configuration',
            group: 'Integrations',
            icon: Link,
            items: [
                { name: 'API Keys', path: '/administration/integrations/api-keys', icon: Key },
                { name: 'Webhooks', path: '/administration/integrations/webhooks', icon: Webhook },
                { name: 'Google Workspace', path: '/administration/integrations/google', icon: Cloud },
                { name: 'Microsoft 365', path: '/administration/integrations/microsoft', icon: Cloud },
                { name: 'Payment Gateways', path: '/administration/integrations/payments', icon: CreditCard },
                { name: 'SMTP Providers', path: '/administration/settings/email-smtp', icon: Mail },
                { name: 'SMS Providers', path: '/administration/integrations/sms', icon: MessageSquare },
                { name: 'Storage Providers', path: '/administration/settings/storage', icon: HardDrive },
                { name: 'OAuth Providers', path: '/administration/integrations/oauth', icon: Link },
            ]
        },
        {
            category: 'Configuration',
            group: 'Workflow & Approval',
            icon: Workflow,
            items: [
                { name: 'Approval Levels', path: '/administration/workflow/approval-levels', icon: ListTree },
                { name: 'Workflow Rules', path: '/administration/workflow/rules', icon: Workflow },
                { name: 'Escalation Rules', path: '/administration/workflow/escalation', icon: TrendingUp },
                { name: 'Automation', path: '/administration/workflow/automation', icon: Zap },
            ]
        },
        {
            category: 'Configuration',
            group: 'Notifications',
            icon: Bell,
            items: [
                { name: 'Email', path: '/administration/notifications/email', icon: Mail },
                { name: 'SMS', path: '/administration/notifications/sms', icon: MessageSquare },
                { name: 'Push Notifications', path: '/administration/notifications/push', icon: Smartphone },
                { name: 'In-App Notifications', path: '/administration/notifications/in-app', icon: Bell },
                { name: 'Notification Templates', path: '/administration/notifications/templates', icon: FileText },
            ]
        },
        {
            category: 'Configuration',
            group: 'Custom Fields',
            icon: ListPlus,
            items: [
                { name: 'User Fields', path: '/administration/custom-fields/users', icon: TextCursorInput },
                { name: 'Customer Fields', path: '/administration/custom-fields/customers', icon: ListPlus },
                { name: 'Product Fields', path: '/administration/custom-fields/products', icon: Package },
                { name: 'Dynamic Forms', path: '/administration/custom-fields/forms', icon: FileCode },
            ]
        },
        {
            category: 'Data & Tools',
            group: 'Master Data',
            icon: Database,
            items: [
                { name: 'Countries', path: '/administration/master-data/countries', icon: Globe },
                { name: 'States', path: '/administration/master-data/states', icon: MapPin },
                { name: 'Cities', path: '/administration/master-data/cities', icon: Map },
                { name: 'Time Zones', path: '/administration/master-data/timezones', icon: Clock },
                { name: 'Currencies', path: '/administration/master-data/currencies', icon: DollarSign },
            ]
        },
        {
            category: 'Data & Tools',
            group: 'File Management',
            icon: FolderOpen,
            items: [
                { name: 'File Storage', path: '/administration/files/storage', icon: HardDrive },
                { name: 'Upload Rules', path: '/administration/files/rules', icon: UploadCloud },
                { name: 'File Types', path: '/administration/files/types', icon: FileText },
                { name: 'Media Library', path: '/administration/files/media', icon: Image },
            ]
        },
        {
            category: 'Data & Tools',
            group: 'Templates',
            icon: FileText,
            items: [
                { name: 'Email Templates', path: '/administration/templates/email', icon: Mail },
                { name: 'Invoice Templates', path: '/administration/templates/invoice', icon: Receipt },
                { name: 'PDF Templates', path: '/administration/templates/pdf', icon: FileText },
                { name: 'Print Templates', path: '/administration/templates/print', icon: Printer },
            ]
        },
        {
            category: 'Data & Tools',
            group: 'AI Configuration',
            icon: Brain,
            items: [
                { name: 'AI Providers', path: '/administration/ai/providers', icon: Brain },
                { name: 'AI Models', path: '/administration/ai/models', icon: Bot },
                { name: 'Prompt Templates', path: '/administration/ai/prompts', icon: TerminalSquare },
                { name: 'Usage Limits', path: '/administration/ai/limits', icon: Gauge },
                { name: 'API Configuration', path: '/administration/ai/api', icon: Cpu },
            ]
        },
        {
            category: 'Data & Tools',
            group: 'Localization',
            icon: Languages,
            items: [
                { name: 'Languages', path: '/administration/localization/languages', icon: Languages },
                { name: 'Translations', path: '/administration/localization/translations', icon: Type },
                { name: 'Currency', path: '/administration/localization/currency', icon: DollarSign },
                { name: 'Date Formats', path: '/administration/localization/date-formats', icon: Calendar },
                { name: 'Time Zones', path: '/administration/localization/time-zones', icon: Clock },
            ]
        },
        {
            category: 'System',
            group: 'System Tools',
            icon: Wrench,
            items: [
                { name: 'Queue Monitor', path: '/administration/tools/queue', icon: ListOrdered },
                { name: 'Scheduled Jobs', path: '/administration/tools/jobs', icon: Timer },
                { name: 'Cache Manager', path: '/administration/tools/cache', icon: RefreshCcw },
                { name: 'Log Viewer', path: '/administration/tools/logs', icon: Terminal },
                { name: 'System Health', path: '/administration/tools/health', icon: Activity },
                { name: 'Server Information', path: '/administration/tools/server', icon: Server },
            ]
        },
        {
            category: 'System',
            group: 'Monitoring',
            icon: Activity,
            items: [
                { name: 'Dashboard', path: '/administration/monitoring/dashboard', icon: LayoutDashboard },
                { name: 'Error Logs', path: '/administration/monitoring/errors', icon: AlertTriangle },
                { name: 'Performance', path: '/administration/monitoring/performance', icon: LineChart },
                { name: 'API Logs', path: '/administration/monitoring/api', icon: Terminal },
                { name: 'Database Status', path: '/administration/monitoring/database', icon: Database },
                { name: 'Storage Usage', path: '/administration/monitoring/storage', icon: HardDrive },
            ]
        },
    ],
    'crm': [
        {
            category: 'Sales & Prospecting',
            group: 'Lead Management',
            icon: UserPlus,
            items: [
                { name: 'Leads', path: '/crm/leads', icon: UserPlus },
                { name: 'Lead Sources', path: '/crm/lead-sources', icon: Share2 },
                { name: 'Lead Statuses', path: '/crm/lead-statuses', icon: ListTree },
                { name: 'Scoring Rules', path: '/crm/lead-scoring', icon: Zap },
            ]
        },
        {
            category: 'Sales & Prospecting',
            group: 'Customer & Contacts',
            icon: Users,
            items: [
                { name: 'Customers', path: '/crm/customers', icon: Users },
                { name: 'Contacts', path: '/crm/contacts', icon: UserCircle },
                { name: 'Accounts & Companies', path: '/crm/accounts', icon: Building2 },
                { name: 'Customer Segments', path: '/crm/segments', icon: Tags },
            ]
        },
        {
            category: 'Sales & Prospecting',
            group: 'Deals & Pipeline',
            icon: Target,
            items: [
                { name: 'Opportunities & Deals', path: '/crm/opportunities', icon: Target },
                { name: 'Pipeline Kanban', path: '/crm/pipeline', icon: FolderKanban },
                { name: 'Sales Forecasts', path: '/crm/forecasts', icon: TrendingUp },
                { name: 'Quotations & Proposals', path: '/crm/quotations', icon: FileText },
            ]
        },
        {
            category: 'Engagement & Service',
            group: 'Activities & Tasks',
            icon: Calendar,
            items: [
                { name: 'Tasks & Follow-ups', path: '/crm/follow-ups', icon: Calendar },
                { name: 'Call & Log History', path: '/crm/communications', icon: Phone },
                { name: 'Meeting Scheduler', path: '/crm/meetings', icon: Clock },
                { name: 'Email Campaigns', path: '/crm/email-campaigns', icon: Mail },
            ]
        },
        {
            category: 'Engagement & Service',
            group: 'Customer Support',
            icon: Headphones,
            items: [
                { name: 'Support Tickets', path: '/crm/tickets', icon: FileCheck },
                { name: 'SLA Rules', path: '/crm/sla-rules', icon: ShieldCheck },
                { name: 'Feedback & Surveys', path: '/crm/feedback', icon: MessageSquare },
            ]
        },
        {
            category: 'Intelligence & Config',
            group: 'Analytics & Reports',
            icon: FileBarChart,
            items: [
                { name: 'Lead Analytics', path: '/crm/analytics/leads', icon: PieChart },
                { name: 'Sales Performance', path: '/crm/analytics/sales', icon: LineChart },
                { name: 'Campaign ROI', path: '/crm/analytics/campaigns', icon: DollarSign },
            ]
        },
        {
            category: 'Intelligence & Config',
            group: 'CRM Settings',
            icon: Settings,
            items: [
                { name: 'General Settings', path: '/crm/settings/general', icon: Settings },
                { name: 'Integration Setup', path: '/crm/settings/integrations', icon: Link },
                { name: 'Web Forms Widget', path: '/crm/settings/web-forms', icon: Globe },
            ]
        },
    ],
    'sales': [
        { category: 'Main Menu', name: 'Customers', path: '/sales/customers', icon: Users },
        { category: 'Main Menu', name: 'Quotations', path: '/sales/quotations', icon: FileText },
        { category: 'Main Menu', name: 'Orders', path: '/sales/orders', icon: ShoppingCart },
        { category: 'Main Menu', name: 'Invoices', path: '/sales/invoices', icon: Receipt },
        { category: 'Main Menu', name: 'Payments', path: '/sales/payments', icon: CreditCard },
        { category: 'Main Menu', name: 'Returns', path: '/sales/returns', icon: RotateCcw },
    ],
    'purchase': [
        { category: 'Main Menu', name: 'Vendors', path: '/purchase/vendors', icon: Users },
        { category: 'Main Menu', name: 'Purchase Requests', path: '/purchase/requests', icon: FileText },
        { category: 'Main Menu', name: 'Purchase Orders', path: '/purchase/orders', icon: ShoppingCart },
        { category: 'Main Menu', name: 'Goods Receive', path: '/purchase/goods-receive', icon: Package },
        { category: 'Main Menu', name: 'Bills', path: '/purchase/bills', icon: Receipt },
        { category: 'Main Menu', name: 'Returns', path: '/purchase/returns', icon: RotateCcw },
    ],
    'inventory': [
        { category: 'Main Menu', name: 'Products', path: '/inventory/products', icon: Package },
        { category: 'Main Menu', name: 'Categories', path: '/inventory/categories', icon: Layers },
        { category: 'Main Menu', name: 'Brands', path: '/inventory/brands', icon: Tags },
        { category: 'Main Menu', name: 'Units', path: '/inventory/units', icon: Calculator },
        { category: 'Main Menu', name: 'Warehouses', path: '/inventory/warehouses', icon: Building2 },
        { category: 'Main Menu', name: 'Stock', path: '/inventory/stock', icon: Boxes },
        { category: 'Main Menu', name: 'Stock Transfer', path: '/inventory/stock-transfer', icon: Truck },
        { category: 'Main Menu', name: 'Stock Adjustment', path: '/inventory/stock-adjustment', icon: Settings },
    ],
    'hr': [
        {
            category: 'Workforce & Time',
            group: 'Employee Management',
            icon: Users,
            items: [
                { name: 'Staff Self-Service Portal', path: '/hr/portal', icon: UserCheck },
                { name: 'Employee Directory', path: '/hr/employees', icon: Users },
                { name: 'Onboarding & Joining', path: '/hr/onboarding', icon: UserPlus },
                { name: 'Transfers & Promotions', path: '/hr/transfers', icon: Layers },
                { name: 'Exit & Offboarding', path: '/hr/offboarding', icon: UserCircle },
            ]
        },
        {
            category: 'Workforce & Time',
            group: 'Time & Attendance',
            icon: Calendar,
            items: [
                { name: 'Daily Attendance', path: '/hr/attendance', icon: Calendar },
                { name: 'Shifts & Rosters', path: '/hr/shifts', icon: Clock },
                { name: 'Overtime Tracking', path: '/hr/overtime', icon: Activity },
                { name: 'Holidays Calendar', path: '/hr/holidays', icon: CheckCircle },
            ]
        },
        {
            category: 'Workforce & Time',
            group: 'Leave Management',
            icon: Home,
            items: [
                { name: 'Leave Requests', path: '/hr/leave/requests', icon: Home },
                { name: 'Leave Allocations', path: '/hr/leave/allocations', icon: ClipboardList },
                { name: 'Leave Policies', path: '/hr/leave/policies', icon: FileText },
            ]
        },
        {
            category: 'Compensation & Growth',
            group: 'Payroll & Benefits',
            icon: HandCoins,
            items: [
                { name: 'Monthly Payroll', path: '/hr/payroll', icon: HandCoins },
                { name: 'Salary Structures', path: '/hr/salary-structures', icon: Calculator },
                { name: 'Payslips Generator', path: '/hr/payslips', icon: Receipt },
                { name: 'Provident Fund & Gratuity', path: '/hr/benefits', icon: DollarSign },
            ]
        },
        {
            category: 'Compensation & Growth',
            group: 'Recruitment & Talent',
            icon: UserPlus,
            items: [
                { name: 'Job Openings', path: '/hr/recruitment/jobs', icon: Briefcase },
                { name: 'Job Applicants', path: '/hr/recruitment/applicants', icon: UserPlus },
                { name: 'Interview Schedules', path: '/hr/recruitment/interviews', icon: Calendar },
            ]
        },
        {
            category: 'Compensation & Growth',
            group: 'Performance & Training',
            icon: Target,
            items: [
                { name: 'Appraisal Reviews', path: '/hr/performance', icon: Target },
                { name: 'KPI & Goals Setup', path: '/hr/kpi-goals', icon: Zap },
                { name: 'Training Programs', path: '/hr/training', icon: FileCheck },
            ]
        },
        {
            category: 'Administration',
            group: 'HR Documents & Settings',
            icon: Settings,
            items: [
                { name: 'HR Documents', path: '/hr/documents', icon: FileText },
                { name: 'General HR Settings', path: '/hr/settings/general', icon: Settings },
                { name: 'Organization Setup', path: '/hr/settings/organization', icon: Building2 },
            ]
        },
    ],
    'accounting': [
        { category: 'Main Menu', name: 'Chart Of Accounts', path: '/accounting/chart-of-accounts', icon: FileSpreadsheet },
        { category: 'Main Menu', name: 'Journal Entries', path: '/accounting/journal-entries', icon: FileText },
        { category: 'Main Menu', name: 'Income', path: '/accounting/income', icon: HandCoins },
        { category: 'Main Menu', name: 'Expenses', path: '/accounting/expenses', icon: Receipt },
        { category: 'Main Menu', name: 'Transactions', path: '/accounting/transactions', icon: Activity },
        { category: 'Main Menu', name: 'Tax', path: '/accounting/tax', icon: Calculator },
        { category: 'Main Menu', name: 'Financial Reports', path: '/accounting/financial-reports', icon: PieChart },
    ],
    'reports': [
        { category: 'Main Menu', name: 'Sales Reports', path: '/reports/sales', icon: FileText },
        { category: 'Main Menu', name: 'Purchase Reports', path: '/reports/purchase', icon: FileText },
        { category: 'Main Menu', name: 'Inventory Reports', path: '/reports/inventory', icon: Package },
        { category: 'Main Menu', name: 'Accounting Reports', path: '/reports/accounting', icon: FileSpreadsheet },
        { category: 'Main Menu', name: 'HR Reports', path: '/reports/hr', icon: Users },
        { category: 'Main Menu', name: 'Dashboard Analytics', path: '/reports/dashboard-analytics', icon: PieChart },
    ],
    'ai': [
        { category: 'Main Menu', name: 'AI Assistant', path: '/ai/assistant', icon: Brain },
        { category: 'Main Menu', name: 'AI Chat', path: '/ai/chat', icon: Phone },
        { category: 'Main Menu', name: 'AI Analytics', path: '/ai/analytics', icon: PieChart },
        { category: 'Main Menu', name: 'Prompt Templates', path: '/ai/prompt-templates', icon: FileText },
        { category: 'Main Menu', name: 'AI Usage', path: '/ai/usage', icon: Activity },
    ],
    'support': [
        { category: 'Main Menu', name: 'Tickets', path: '/support/tickets', icon: FileText },
        { category: 'Main Menu', name: 'Knowledge Base', path: '/support/knowledge-base', icon: Database },
        { category: 'Main Menu', name: 'FAQ', path: '/support/faq', icon: CheckCircle },
    ],
};
