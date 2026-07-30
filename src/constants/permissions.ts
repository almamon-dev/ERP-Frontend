// ============================================================
// ERP PERMISSIONS & ACTION MATRIX DEFINITIONS
// ============================================================

export interface PermissionItem {
  id: string;
  name: string;
  code: string;
  category: string;
  action: string;
  description?: string;
}

// 1. CORE PERMISSION ACTIONS (VERBS MATRIX)
export const PERMISSION_ACTIONS = [
  { key: 'view', label: 'View', color: 'bg-blue-100 text-blue-800' },
  { key: 'view_own', label: 'View Own', color: 'bg-sky-100 text-sky-800' },
  { key: 'create', label: 'Create', color: 'bg-emerald-100 text-emerald-800' },
  { key: 'edit', label: 'Edit', color: 'bg-amber-100 text-amber-800' },
  { key: 'edit_own', label: 'Edit Own', color: 'bg-yellow-100 text-yellow-800' },
  { key: 'delete', label: 'Delete', color: 'bg-rose-100 text-rose-800' },
  { key: 'approve', label: 'Approve', color: 'bg-emerald-100 text-emerald-800' },
  { key: 'reject', label: 'Reject', color: 'bg-rose-100 text-rose-800' },
  { key: 'assign', label: 'Assign', color: 'bg-indigo-100 text-indigo-800' },
  { key: 'transfer', label: 'Transfer', color: 'bg-purple-100 text-purple-800' },
  { key: 'import', label: 'Import', color: 'bg-teal-100 text-teal-800' },
  { key: 'export', label: 'Export', color: 'bg-cyan-100 text-cyan-800' },
  { key: 'print', label: 'Print', color: 'bg-slate-100 text-slate-800' },
  { key: 'download', label: 'Download', color: 'bg-[#008060]/10 text-[#008060]' },
  { key: 'upload', label: 'Upload', color: 'bg-indigo-100 text-indigo-800' },
  { key: 'archive', label: 'Archive', color: 'bg-orange-100 text-orange-800' },
  { key: 'restore', label: 'Restore', color: 'bg-lime-100 text-lime-800' },
  { key: 'lock', label: 'Lock', color: 'bg-[#1e293b] text-white' },
  { key: 'unlock', label: 'Unlock', color: 'bg-emerald-500 text-white' },
  { key: 'activate', label: 'Activate', color: 'bg-emerald-100 text-emerald-800' },
  { key: 'deactivate', label: 'Deactivate', color: 'bg-rose-100 text-rose-800' },
  { key: 'manage', label: 'Manage', color: 'bg-[#008060] text-white' },
  { key: 'full_access', label: 'Full Access', color: 'bg-purple-600 text-white' },
];

// 2. ALL MODULE PERMISSIONS HIERARCHY
export const SYSTEM_PERMISSIONS_STRUCTURE: Record<string, string[]> = {
  'Dashboard': [
    'View Dashboard',
    'View Analytics',
  ],
  'Employee': [
    'View Employee',
    'View Own Profile',
    'Create Employee',
    'Edit Employee',
    'Delete Employee',
    'Transfer Employee',
    'Archive Employee',
    'Import Employees',
    'Export Employees',
    'Manage Employee',
  ],
  'Attendance': [
    'View Attendance',
    'View Own Attendance',
    'Create Attendance',
    'Edit Attendance',
    'Delete Attendance',
    'Approve Attendance',
    'Reject Attendance',
    'Regularize Attendance',
    'Lock Attendance',
    'Unlock Attendance',
    'Import Attendance',
    'Export Attendance',
    'Manage Attendance',
  ],
  'Leave': [
    'View Leave',
    'View Own Leave',
    'Apply Leave',
    'Edit Leave',
    'Cancel Leave',
    'Approve Leave',
    'Reject Leave',
    'Leave Balance',
    'Leave Policy',
    'Export Leave',
    'Manage Leave',
  ],
  'Shift': [
    'View Shift',
    'Create Shift',
    'Edit Shift',
    'Assign Shift',
    'Approve Shift Change',
    'Manage Shift',
  ],
  'Payroll': [
    'View Payroll',
    'View Own Payroll',
    'Generate Payroll',
    'Edit Payroll',
    'Approve Payroll',
    'Lock Payroll',
    'Export Payroll',
    'Manage Payroll',
  ],
  'Recruitment': [
    'View Jobs',
    'Create Job',
    'Edit Job',
    'Delete Job',
    'View Applicants',
    'Manage Recruitment',
  ],
  'Performance': [
    'View Performance',
    'View Own Performance',
    'Create KPI',
    'Conduct Review',
    'Manage Performance',
  ],
  'Training': [
    'View Training',
    'Create Program',
    'Enroll Employee',
    'Manage Training',
  ],
  'Finance': [
    'View Financial Reports',
    'Create Journal Entry',
    'Approve Expense',
    'Manage Accounts',
  ],
  'Sales & CRM': [
    'View Leads',
    'Create Quotation',
    'Approve Sales Order',
    'Manage Pipeline',
  ],
  'Procurement': [
    'View Purchase Orders',
    'Create Purchase Request',
    'Approve PO',
    'Manage Vendors',
  ],
  'Inventory': [
    'View Stock',
    'Adjust Stock',
    'Transfer Stock',
    'Manage Warehouses',
  ],
  'Manufacturing': [
    'View Work Orders',
    'Create BOM',
    'Schedule Production',
    'Manage Manufacturing',
  ],
  'Help Desk': [
    'View Tickets',
    'Create Ticket',
    'Assign Ticket',
    'Resolve Ticket',
    'Manage Help Desk',
  ],
  'Documents': [
    'View Documents',
    'Upload Document',
    'Download Document',
    'Manage Documents',
  ],
  'Reports': [
    'View Reports',
    'Export Reports',
    'Print Reports',
    'Schedule Reports',
  ],
  'Analytics': [
    'View BI Analytics',
    'Export Analytics',
    'Custom Dashboards',
  ],
  'Notifications': [
    'View Notifications',
    'Send Push Notification',
    'Configure Alerts',
  ],
  'User Management': [
    'View Users',
    'Create User',
    'Edit User',
    'Delete User',
    'Reset Password',
    'Assign Role',
    'Activate User',
    'Deactivate User',
    'Manage Users',
  ],
  'Role Management': [
    'View Roles',
    'Create Role',
    'Edit Role',
    'Delete Role',
    'Clone Role',
    'Assign Permission',
    'Manage Roles',
  ],
  'Permission Management': [
    'View Permissions',
    'Create Permission',
    'Edit Permission',
    'Delete Permission',
    'Manage Permissions',
  ],
  'Organization': [
    'View Companies',
    'Manage Branches',
    'Manage Departments',
    'Manage Designations',
  ],
  'System Settings': [
    'View General Settings',
    'Edit General Settings',
    'Configure Email & SMTP',
  ],
  'Security': [
    'Manage Password Policy',
    'Manage 2FA',
    'Active Sessions',
    'IP Whitelist',
  ],
  'API Management': [
    'View API Keys',
    'Generate API Key',
    'Manage Webhooks',
  ],
  'Audit Logs': [
    'View Audit Logs',
    'Export Audit Logs',
  ],
  'Activity Logs': [
    'View Activity Logs',
    'Export Activity Logs',
  ],
  'Backup & Restore': [
    'Create Backup',
    'Download Backup',
    'Restore System',
  ],
  'Integrations': [
    'View Integrations',
    'Configure OAuth',
    'Manage Payment Gateways',
  ],
};

// Flatten all permissions with generated codes
export const FLAT_PERMISSIONS_LIST: PermissionItem[] = Object.entries(SYSTEM_PERMISSIONS_STRUCTURE).flatMap(
  ([category, items], catIdx) =>
    items.map((permName, itemIdx) => {
      const code = `PERM_${category.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_${permName.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`;
      const actionKey = permName.toLowerCase().split(' ')[0];
      return {
        id: `perm_${catIdx + 1}_${itemIdx + 1}`,
        name: permName,
        code,
        category,
        action: actionKey,
        description: `Allows user to ${permName.toLowerCase()} under ${category} module.`,
      };
    })
);
