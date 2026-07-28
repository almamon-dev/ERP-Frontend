import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ROLES, RoleType, ROLE_DASHBOARD_MAP, ROLE_LABELS } from '@/constants/roles';

// ============================================================
// TYPES
// ============================================================
export interface AuthUser {
  id: number;
  name: string;
  initials: string;
  email: string;
  role: RoleType;
  roleLabel: string;
  designation: string;
  department: string;
  employeeId: string;
  avatar?: string;
  dashboardPath: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (role: RoleType) => void;
  logout: () => void;
}

// ============================================================
// MOCK USER DATA — (replace with real API data later)
// ============================================================
const MOCK_USERS: Record<RoleType, AuthUser> = {
  [ROLES.SUPER_ADMIN]: {
    id: 1,
    name: 'Admin User',
    initials: 'AU',
    email: 'admin@erp.com',
    role: ROLES.SUPER_ADMIN,
    roleLabel: ROLE_LABELS[ROLES.SUPER_ADMIN],
    designation: 'Super Administrator',
    department: 'IT',
    employeeId: 'EMP-0001',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SUPER_ADMIN],
  },
  [ROLES.SYSTEM_ADMIN]: {
    id: 2,
    name: 'System Admin',
    initials: 'SA',
    email: 'sysadmin@erp.com',
    role: ROLES.SYSTEM_ADMIN,
    roleLabel: ROLE_LABELS[ROLES.SYSTEM_ADMIN],
    designation: 'System Administrator',
    department: 'IT',
    employeeId: 'EMP-0002',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SYSTEM_ADMIN],
  },
  [ROLES.CEO]: {
    id: 3,
    name: 'CEO',
    initials: 'CE',
    email: 'ceo@erp.com',
    role: ROLES.CEO,
    roleLabel: ROLE_LABELS[ROLES.CEO],
    designation: 'Chief Executive Officer',
    department: 'Management',
    employeeId: 'EMP-0003',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.CEO],
  },
  [ROLES.DEPARTMENT_HEAD]: {
    id: 4,
    name: 'Dept. Head',
    initials: 'DH',
    email: 'depthead@erp.com',
    role: ROLES.DEPARTMENT_HEAD,
    roleLabel: ROLE_LABELS[ROLES.DEPARTMENT_HEAD],
    designation: 'Department Head',
    department: 'Operations',
    employeeId: 'EMP-0004',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.DEPARTMENT_HEAD],
  },
  [ROLES.HR_MANAGER]: {
    id: 5,
    name: 'HR Manager',
    initials: 'HM',
    email: 'hr.manager@erp.com',
    role: ROLES.HR_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.HR_MANAGER],
    designation: 'HR Manager',
    department: 'Human Resources',
    employeeId: 'EMP-0005',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.HR_MANAGER],
  },
  [ROLES.ACCOUNTS_MANAGER]: {
    id: 6,
    name: 'Accounts Manager',
    initials: 'AM',
    email: 'accounts@erp.com',
    role: ROLES.ACCOUNTS_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.ACCOUNTS_MANAGER],
    designation: 'Accounts Manager',
    department: 'Finance',
    employeeId: 'EMP-0006',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.ACCOUNTS_MANAGER],
  },
  [ROLES.SALES_MANAGER]: {
    id: 7,
    name: 'Sales Manager',
    initials: 'SM',
    email: 'sales.manager@erp.com',
    role: ROLES.SALES_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.SALES_MANAGER],
    designation: 'Sales Manager',
    department: 'Sales',
    employeeId: 'EMP-0007',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SALES_MANAGER],
  },
  [ROLES.PURCHASE_MANAGER]: {
    id: 8,
    name: 'Purchase Manager',
    initials: 'PM',
    email: 'purchase.manager@erp.com',
    role: ROLES.PURCHASE_MANAGER,
    roleLabel: ROLE_LABELS[ROLES.PURCHASE_MANAGER],
    designation: 'Purchase Manager',
    department: 'Purchase',
    employeeId: 'EMP-0008',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.PURCHASE_MANAGER],
  },
  [ROLES.HR_EXECUTIVE]: {
    id: 9,
    name: 'HR Executive',
    initials: 'HE',
    email: 'hr.exec@erp.com',
    role: ROLES.HR_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.HR_EXECUTIVE],
    designation: 'HR Executive',
    department: 'Human Resources',
    employeeId: 'EMP-0009',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.HR_EXECUTIVE],
  },
  [ROLES.ACCOUNTANT]: {
    id: 10,
    name: 'Accountant',
    initials: 'AC',
    email: 'accountant@erp.com',
    role: ROLES.ACCOUNTANT,
    roleLabel: ROLE_LABELS[ROLES.ACCOUNTANT],
    designation: 'Accountant',
    department: 'Finance',
    employeeId: 'EMP-0010',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.ACCOUNTANT],
  },
  [ROLES.SALES_EXECUTIVE]: {
    id: 11,
    name: 'Sales Executive',
    initials: 'SE',
    email: 'sales.exec@erp.com',
    role: ROLES.SALES_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.SALES_EXECUTIVE],
    designation: 'Sales Executive',
    department: 'Sales',
    employeeId: 'EMP-0011',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SALES_EXECUTIVE],
  },
  [ROLES.CRM_EXECUTIVE]: {
    id: 12,
    name: 'CRM Executive',
    initials: 'CE',
    email: 'crm.exec@erp.com',
    role: ROLES.CRM_EXECUTIVE,
    roleLabel: ROLE_LABELS[ROLES.CRM_EXECUTIVE],
    designation: 'CRM Executive',
    department: 'CRM',
    employeeId: 'EMP-0012',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.CRM_EXECUTIVE],
  },
  [ROLES.PURCHASE_OFFICER]: {
    id: 13,
    name: 'Purchase Officer',
    initials: 'PO',
    email: 'purchase.officer@erp.com',
    role: ROLES.PURCHASE_OFFICER,
    roleLabel: ROLE_LABELS[ROLES.PURCHASE_OFFICER],
    designation: 'Purchase Officer',
    department: 'Purchase',
    employeeId: 'EMP-0013',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.PURCHASE_OFFICER],
  },
  [ROLES.INVENTORY_OFFICER]: {
    id: 14,
    name: 'Inventory Officer',
    initials: 'IO',
    email: 'inventory@erp.com',
    role: ROLES.INVENTORY_OFFICER,
    roleLabel: ROLE_LABELS[ROLES.INVENTORY_OFFICER],
    designation: 'Inventory Officer',
    department: 'Inventory',
    employeeId: 'EMP-0014',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.INVENTORY_OFFICER],
  },
  [ROLES.EMPLOYEE]: {
    id: 15,
    name: 'Al Mamon',
    initials: 'AM',
    email: 'al.mamun@softvence.com',
    role: ROLES.EMPLOYEE,
    roleLabel: ROLE_LABELS[ROLES.EMPLOYEE],
    designation: 'Jr. Laravel Developer',
    department: 'Operations',
    employeeId: 'EMP-15202',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.EMPLOYEE],
  },
  [ROLES.SUPERVISOR]: {
    id: 16,
    name: 'Md. Ridoy',
    initials: 'MR',
    email: 'ridoy@softvence.com',
    role: ROLES.SUPERVISOR,
    roleLabel: ROLE_LABELS[ROLES.SUPERVISOR],
    designation: 'Supervisor',
    department: 'Operations',
    employeeId: 'EMP-15100',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.SUPERVISOR],
  },
  [ROLES.TEAM_LEADER]: {
    id: 17,
    name: 'Tanvir Ahmed',
    initials: 'TA',
    email: 'tanvir@softvence.com',
    role: ROLES.TEAM_LEADER,
    roleLabel: ROLE_LABELS[ROLES.TEAM_LEADER],
    designation: 'Team Leader',
    department: 'Pixel Pioneers',
    employeeId: 'EMP-15050',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.TEAM_LEADER],
  },
  [ROLES.AUDITOR]: {
    id: 18,
    name: 'Auditor',
    initials: 'AU',
    email: 'auditor@erp.com',
    role: ROLES.AUDITOR,
    roleLabel: ROLE_LABELS[ROLES.AUDITOR],
    designation: 'Auditor',
    department: 'Finance',
    employeeId: 'EMP-0018',
    dashboardPath: ROLE_DASHBOARD_MAP[ROLES.AUDITOR],
  },
};

// ============================================================
// CONTEXT
// ============================================================
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Default: logged in as Employee (Al Mamon) — change for testing
  const [user, setUser] = useState<AuthUser | null>(MOCK_USERS[ROLES.EMPLOYEE]);

  const login = (role: RoleType) => {
    setUser(MOCK_USERS[role]);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================================
// HOOK
// ============================================================
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}

// Export mock users for testing (role switcher)
export { MOCK_USERS };
