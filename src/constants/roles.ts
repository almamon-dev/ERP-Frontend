// ============================================================
// ERP ROLE DEFINITIONS & DASHBOARD MAPPING
// ============================================================

export const ROLES = {
  // Core / System Admin
  SUPER_ADMIN: 'super_admin',
  SYSTEM_ADMIN: 'system_admin',
  COMPANY_ADMIN: 'company_admin',

  // Executive
  CEO: 'ceo',
  MD: 'md',
  DIRECTOR: 'director',
  GM: 'gm',
  AGM: 'agm',

  // Management
  OPERATIONS_MANAGER: 'operations_manager',
  HR_MANAGER: 'hr_manager',
  FINANCE_MANAGER: 'finance_manager',
  SALES_MANAGER: 'sales_manager',
  PURCHASE_MANAGER: 'purchase_manager',
  INVENTORY_MANAGER: 'inventory_manager',
  PROJECT_MANAGER: 'project_manager',
  IT_MANAGER: 'it_manager',

  // Team Management
  TEAM_LEADER: 'team_leader',
  SUPERVISOR: 'supervisor',
  SHIFT_IN_CHARGE: 'shift_in_charge',

  // Staff
  HR_EXECUTIVE: 'hr_executive',
  ACCOUNTANT: 'accountant',
  SALES_EXECUTIVE: 'sales_executive',
  PURCHASE_EXECUTIVE: 'purchase_executive',
  INVENTORY_OFFICER: 'inventory_officer',
  STORE_KEEPER: 'store_keeper',
  CUSTOMER_SUPPORT_EXECUTIVE: 'customer_support_executive',
  RECEPTIONIST: 'receptionist',
  OFFICE_ASSISTANT: 'office_assistant',
  STAFF: 'staff',

  // Employee, Auditor, Guest
  EMPLOYEE: 'employee',
  AUDITOR: 'auditor',
  GUEST: 'guest',
} as const;

export type RoleType = typeof ROLES[keyof typeof ROLES];

// Human-readable role labels
export const ROLE_LABELS: Record<RoleType, string> = {
  // Core Admin
  [ROLES.SUPER_ADMIN]: 'Super Admin',
  [ROLES.SYSTEM_ADMIN]: 'System Administrator',
  [ROLES.COMPANY_ADMIN]: 'Company Administrator',

  // Executive
  [ROLES.CEO]: 'Chief Executive Officer (CEO)',
  [ROLES.MD]: 'Managing Director (MD)',
  [ROLES.DIRECTOR]: 'Director',
  [ROLES.GM]: 'General Manager (GM)',
  [ROLES.AGM]: 'Assistant General Manager (AGM)',

  // Management
  [ROLES.OPERATIONS_MANAGER]: 'Operations Manager',
  [ROLES.HR_MANAGER]: 'HR Manager',
  [ROLES.FINANCE_MANAGER]: 'Finance Manager',
  [ROLES.SALES_MANAGER]: 'Sales Manager',
  [ROLES.PURCHASE_MANAGER]: 'Purchase Manager',
  [ROLES.INVENTORY_MANAGER]: 'Inventory Manager',
  [ROLES.PROJECT_MANAGER]: 'Project Manager',
  [ROLES.IT_MANAGER]: 'IT Manager',

  // Team Management
  [ROLES.TEAM_LEADER]: 'Team Leader',
  [ROLES.SUPERVISOR]: 'Supervisor',
  [ROLES.SHIFT_IN_CHARGE]: 'Shift In-Charge',

  // Staff
  [ROLES.HR_EXECUTIVE]: 'HR Executive',
  [ROLES.ACCOUNTANT]: 'Accountant',
  [ROLES.SALES_EXECUTIVE]: 'Sales Executive',
  [ROLES.PURCHASE_EXECUTIVE]: 'Purchase Executive',
  [ROLES.INVENTORY_OFFICER]: 'Inventory Officer',
  [ROLES.STORE_KEEPER]: 'Store Keeper',
  [ROLES.CUSTOMER_SUPPORT_EXECUTIVE]: 'Customer Support Executive',
  [ROLES.RECEPTIONIST]: 'Receptionist',
  [ROLES.OFFICE_ASSISTANT]: 'Office Assistant',
  [ROLES.STAFF]: 'Staff',

  // Employee, Auditor, Guest
  [ROLES.EMPLOYEE]: 'Employee',
  [ROLES.AUDITOR]: 'Auditor',
  [ROLES.GUEST]: 'Guest',
};

// Role Category Classification
export const ROLE_CATEGORIES: Record<string, RoleType[]> = {
  'Administration': [ROLES.SUPER_ADMIN, ROLES.SYSTEM_ADMIN, ROLES.COMPANY_ADMIN],
  'Executive': [ROLES.CEO, ROLES.MD, ROLES.DIRECTOR, ROLES.GM, ROLES.AGM],
  'Management': [
    ROLES.OPERATIONS_MANAGER, ROLES.HR_MANAGER, ROLES.FINANCE_MANAGER,
    ROLES.SALES_MANAGER, ROLES.PURCHASE_MANAGER, ROLES.INVENTORY_MANAGER,
    ROLES.PROJECT_MANAGER, ROLES.IT_MANAGER
  ],
  'Team Management': [ROLES.TEAM_LEADER, ROLES.SUPERVISOR, ROLES.SHIFT_IN_CHARGE],
  'Staff': [
    ROLES.HR_EXECUTIVE, ROLES.ACCOUNTANT, ROLES.SALES_EXECUTIVE,
    ROLES.PURCHASE_EXECUTIVE, ROLES.INVENTORY_OFFICER, ROLES.STORE_KEEPER,
    ROLES.CUSTOMER_SUPPORT_EXECUTIVE, ROLES.RECEPTIONIST, ROLES.OFFICE_ASSISTANT,
    ROLES.STAFF
  ],
  'Employee': [ROLES.EMPLOYEE],
  'Audit': [ROLES.AUDITOR],
  'Guest': [ROLES.GUEST],
};

// Role → Dashboard redirect path mapping
export const ROLE_DASHBOARD_MAP: Record<RoleType, string> = {
  [ROLES.SUPER_ADMIN]: '/dashboard',
  [ROLES.SYSTEM_ADMIN]: '/administration/monitoring/dashboard',
  [ROLES.COMPANY_ADMIN]: '/administration/organization/companies',

  [ROLES.CEO]: '/dashboard',
  [ROLES.MD]: '/dashboard',
  [ROLES.DIRECTOR]: '/dashboard',
  [ROLES.GM]: '/dashboard',
  [ROLES.AGM]: '/dashboard',

  [ROLES.OPERATIONS_MANAGER]: '/dashboard',
  [ROLES.HR_MANAGER]: '/hr/dashboard',
  [ROLES.FINANCE_MANAGER]: '/accounting/financial-reports',
  [ROLES.SALES_MANAGER]: '/sales/orders',
  [ROLES.PURCHASE_MANAGER]: '/purchase/orders',
  [ROLES.INVENTORY_MANAGER]: '/inventory/stock',
  [ROLES.PROJECT_MANAGER]: '/dashboard',
  [ROLES.IT_MANAGER]: '/administration/settings/general',

  [ROLES.TEAM_LEADER]: '/employee-portal/dashboard',
  [ROLES.SUPERVISOR]: '/employee-portal/dashboard',
  [ROLES.SHIFT_IN_CHARGE]: '/hr/shifts',

  [ROLES.HR_EXECUTIVE]: '/hr/employees',
  [ROLES.ACCOUNTANT]: '/accounting/journal-entries',
  [ROLES.SALES_EXECUTIVE]: '/sales/orders',
  [ROLES.PURCHASE_EXECUTIVE]: '/purchase/orders',
  [ROLES.INVENTORY_OFFICER]: '/inventory/stock',
  [ROLES.STORE_KEEPER]: '/inventory/warehouses',
  [ROLES.CUSTOMER_SUPPORT_EXECUTIVE]: '/support/tickets',
  [ROLES.RECEPTIONIST]: '/hr/employees',
  [ROLES.OFFICE_ASSISTANT]: '/employee-portal/dashboard',
  [ROLES.STAFF]: '/employee-portal/dashboard',

  [ROLES.EMPLOYEE]: '/employee-portal/dashboard',
  [ROLES.AUDITOR]: '/reports/dashboard-analytics',
  [ROLES.GUEST]: '/employee-portal/dashboard',
};

// Module level access per role
export const ROLE_MODULE_ACCESS: Record<RoleType, string[]> = {
  [ROLES.SUPER_ADMIN]: ['*'],
  [ROLES.SYSTEM_ADMIN]: ['administration'],
  [ROLES.COMPANY_ADMIN]: ['administration', 'hr', 'accounting', 'sales', 'purchase', 'inventory'],

  [ROLES.CEO]: ['dashboard', 'reports', 'hr', 'crm', 'sales', 'accounting'],
  [ROLES.MD]: ['dashboard', 'reports', 'hr', 'crm', 'sales', 'accounting'],
  [ROLES.DIRECTOR]: ['dashboard', 'reports', 'hr', 'crm', 'sales', 'accounting'],
  [ROLES.GM]: ['dashboard', 'reports', 'hr', 'sales', 'accounting'],
  [ROLES.AGM]: ['dashboard', 'reports', 'hr', 'sales'],

  [ROLES.OPERATIONS_MANAGER]: ['dashboard', 'inventory', 'purchase', 'sales'],
  [ROLES.HR_MANAGER]: ['hr', 'reports'],
  [ROLES.FINANCE_MANAGER]: ['accounting', 'reports'],
  [ROLES.SALES_MANAGER]: ['sales', 'crm', 'reports'],
  [ROLES.PURCHASE_MANAGER]: ['purchase', 'inventory'],
  [ROLES.INVENTORY_MANAGER]: ['inventory', 'purchase'],
  [ROLES.PROJECT_MANAGER]: ['dashboard', 'reports'],
  [ROLES.IT_MANAGER]: ['administration'],

  [ROLES.TEAM_LEADER]: ['ess', 'hr'],
  [ROLES.SUPERVISOR]: ['ess', 'hr'],
  [ROLES.SHIFT_IN_CHARGE]: ['hr'],

  [ROLES.HR_EXECUTIVE]: ['hr'],
  [ROLES.ACCOUNTANT]: ['accounting'],
  [ROLES.SALES_EXECUTIVE]: ['sales', 'crm'],
  [ROLES.PURCHASE_EXECUTIVE]: ['purchase'],
  [ROLES.INVENTORY_OFFICER]: ['inventory'],
  [ROLES.STORE_KEEPER]: ['inventory'],
  [ROLES.CUSTOMER_SUPPORT_EXECUTIVE]: ['support', 'crm'],
  [ROLES.RECEPTIONIST]: ['hr'],
  [ROLES.OFFICE_ASSISTANT]: ['ess'],
  [ROLES.STAFF]: ['ess'],

  [ROLES.EMPLOYEE]: ['ess'],
  [ROLES.AUDITOR]: ['reports', 'accounting'],
  [ROLES.GUEST]: ['ess'],
};
