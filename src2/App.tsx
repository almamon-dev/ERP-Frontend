import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '@/modules/Core/Auth/guards/PrivateRoute';
import PublicRoute from '@/modules/Core/Auth/guards/PublicRoute';
import { authRoutes } from '@/modules/Core/Auth/routes';
import { dashboardRoutes } from '@/modules/Dashboard/routes';
import { coreDashboardRoutes } from '@/modules/Core/Dashboard/routes';
import { supportRoutes } from '@/modules/Support/routes';
import { settingsRoutes as administrationRoutes } from '@/modules/Administration/routes';
import AdminLayout from '@/layouts/AdminLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <h1 className="text-4xl font-bold">Enterprise ERP Dashboard</h1>
      </div>
    ),
  },
  {
    element: <PublicRoute />,
    children: [authRoutes],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
            dashboardRoutes,
            administrationRoutes
        ]
      },
      coreDashboardRoutes,
      supportRoutes
    ],
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
    <RouterProvider router={router} />
  );
}
