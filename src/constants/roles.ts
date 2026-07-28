// ============================================================
// ERP ROLE DEFINITIONS & DASHBOARD MAPPING
// ============================================================

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  SYSTEM_ADMIN: 'system_admin',
  CEO: 'ceo',
  DEPARTMENT_HEAD: 'department_head',
  HR_MANAGER: 'hr_manager',
  ACCOUNTS_MANAGER: 'accounts_manager',
  SALES_MANAGER: 'sales_manager',
  PURCHASE_MANAGER: 'purchase_manager',
  HR_EXECUTIVE: 'hr_executive',
  ACCOUNTANT: 'accountant',
  SALES_EXECUTIVE: 'sales_executive',
  CRM_EXECUTIVE: 'crm_executive',
  PURCHASE_OFFICER: 'purchase_officer',
  INVENTORY_OFFICER: 'inventory_officer',
  EMPLOYEE: 'employee',
  SUPERVISOR: 'supervisor',
  TEAM_LEADER: 'team_leader',
  AUDITOR: 'auditor',
} as const;

export type RoleType = typeof ROLES[keyof typeof ROLES];

// Role → Dashboard redirect path mapping
export const ROLE_DASHBOARD_MAP: Record<RoleType, string> = {
  [ROLES.SUPER_ADMIN]:       '/dashboard',
  [ROLES.SYSTEM_ADMIN]:      '/administration/monitoring/dashboard',
  [ROLES.CEO]:               '/dashboard',
  [ROLES.DEPARTMENT_HEAD]:   '/dashboard',
  [ROLES.HR_MANAGER]:        '/hr/employees',
  [ROLES.ACCOUNTS_MANAGER]:  '/accounting/chart-of-accounts',
  [ROLES.SALES_MANAGER]:     '/sales/orders',
  [ROLES.PURCHASE_MANAGER]:  '/purchase/orders',
  [ROLES.HR_EXECUTIVE]:      '/hr/employees',
  [ROLES.ACCOUNTANT]:        '/accounting/journal-entries',
  [ROLES.SALES_EXECUTIVE]:   '/sales/orders',
  [ROLES.CRM_EXECUTIVE]:     '/crm/leads',
  [ROLES.PURCHASE_OFFICER]:  '/purchase/orders',
  [ROLES.INVENTORY_OFFICER]: '/inventory/stock',
  [ROLES.EMPLOYEE]:          '/employee-portal/dashboard',
  [ROLES.SUPERVISOR]:        '/employee-portal/dashboard',
  [ROLES.TEAM_LEADER]:       '/employee-portal/dashboard',
  [ROLES.AUDITOR]:           '/reports/dashboard-analytics',
};

// Human-readable role labels
export const ROLE_LABELS: Record<RoleType, string> = {
  [ROLES.SUPER_ADMIN]:       'Super Admin',
  [ROLES.SYSTEM_ADMIN]:      'System Administrator',
  [ROLES.CEO]:               'CEO / Director',
  [ROLES.DEPARTMENT_HEAD]:   'Department Head',
  [ROLES.HR_MANAGER]:        'HR Manager',
  [ROLES.ACCOUNTS_MANAGER]:  'Accounts Manager',
  [ROLES.SALES_MANAGER]:     'Sales Manager',
  [ROLES.PURCHASE_MANAGER]:  'Purchase Manager',
  [ROLES.HR_EXECUTIVE]:      'HR Executive',
  [ROLES.ACCOUNTANT]:        'Accountant',
  [ROLES.SALES_EXECUTIVE]:   'Sales Executive',
  [ROLES.CRM_EXECUTIVE]:     'CRM Executive',
  [ROLES.PURCHASE_OFFICER]:  'Purchase Officer',
  [ROLES.INVENTORY_OFFICER]: 'Inventory Officer',
  [ROLES.EMPLOYEE]:          'Employee',
  [ROLES.SUPERVISOR]:        'Supervisor',
  [ROLES.TEAM_LEADER]:       'Team Leader',
  [ROLES.AUDITOR]:           'Auditor',
};

// Which roles have access to which modules (for future use)
export const ROLE_MODULE_ACCESS: Record<RoleType, string[]> = {
  [ROLES.SUPER_ADMIN]:       ['*'], // all
  [ROLES.SYSTEM_ADMIN]:      ['administration'],
  [ROLES.CEO]:               ['dashboard', 'reports', 'hr', 'crm', 'sales', 'accounting'],
  [ROLES.DEPARTMENT_HEAD]:   ['dashboard', 'hr', 'reports'],
  [ROLES.HR_MANAGER]:        ['hr', 'reports'],
  [ROLES.ACCOUNTS_MANAGER]:  ['accounting', 'reports'],
  [ROLES.SALES_MANAGER]:     ['sales', 'crm', 'reports'],
  [ROLES.PURCHASE_MANAGER]:  ['purchase', 'inventory'],
  [ROLES.HR_EXECUTIVE]:      ['hr'],
  [ROLES.ACCOUNTANT]:        ['accounting'],
  [ROLES.SALES_EXECUTIVE]:   ['sales', 'crm'],
  [ROLES.CRM_EXECUTIVE]:     ['crm'],
  [ROLES.PURCHASE_OFFICER]:  ['purchase'],
  [ROLES.INVENTORY_OFFICER]: ['inventory'],
  [ROLES.EMPLOYEE]:          ['ess'],
  [ROLES.SUPERVISOR]:        ['ess'],
  [ROLES.TEAM_LEADER]:       ['ess'],
  [ROLES.AUDITOR]:           ['reports'],
};
