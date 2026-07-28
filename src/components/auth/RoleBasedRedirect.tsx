import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

/**
 * RoleBasedRedirect
 *
 * Place this at root "/" path.
 * It reads the logged-in user's role and redirects
 * them to their respective dashboard automatically.
 *
 * Usage in router:
 *   { path: '/', element: <RoleBasedRedirect /> }
 */
export default function RoleBasedRedirect() {
  const { user, isAuthenticated } = useAuth();

  // Not logged in → go to login page
  if (!isAuthenticated || !user) {
    return <Navigate to="/web/login" replace />;
  }

  // Redirect to role's dashboard
  return <Navigate to={user.dashboardPath} replace />;
}
