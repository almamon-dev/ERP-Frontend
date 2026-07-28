import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authRoutes } from './modules/Auth';
import { dashboardRoutes } from './modules/Dashboard/routes';
import { administrationRoutes } from './modules/Administration';
import { crmRoutes } from './modules/CRM';
import { hrRoutes } from './modules/HR';
import { salesRoutes } from './modules/Sales';
import { purchaseRoutes } from './modules/Purchase';
import { inventoryRoutes } from './modules/Inventory';
import { accountingRoutes } from './modules/Accounting';
import { reportsRoutes } from './modules/Reports';
import { aIRoutes } from './modules/AI';
import { employeeSelfServiceRoutes } from './modules/EmployeeSelfService';
import { supportRoutes } from './modules/Support/routes';
import ModulesSelectorPage from './modules/Dashboard/pages/ModulesSelectorPage';
import RoleBasedRedirect from './components/auth/RoleBasedRedirect';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    // Root "/" → redirect based on role
    path: '/',
    element: <RoleBasedRedirect />,
  },
  ...authRoutes,
  ...dashboardRoutes,
  ...administrationRoutes,
  ...crmRoutes,
  ...hrRoutes,
  ...salesRoutes,
  ...purchaseRoutes,
  ...inventoryRoutes,
  ...accountingRoutes,
  ...reportsRoutes,
  ...aIRoutes,
  ...employeeSelfServiceRoutes,
  ...supportRoutes,
  {
    path: '/admin/modules',
    element: <ModulesSelectorPage />,
  },
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
      </div>
    ),
  },
]);

export default function App() {
  return (
    // AuthProvider wraps everything so any component can call useAuth()
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
