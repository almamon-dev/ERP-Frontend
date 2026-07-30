import { RouteObject, Navigate } from 'react-router-dom';
import UsersModule from './Users';
import { usersRoutes } from './Users/routes';
import RolesModule from './Roles';
import { rolesRoutes } from './Roles/routes';
import PermissionsModule from './Permissions';
import { permissionsRoutes } from './Permissions/routes';
import UserGroupsModule from './UserGroups';
import { usergroupsRoutes } from './UserGroups/routes';
import AccessPoliciesModule from './AccessPolicies';
import { accesspoliciesRoutes } from './AccessPolicies/routes';

import AccessDashboard from './Dashboard';

export const accessManagementRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="dashboard" replace />
  },
  {
    path: 'dashboard',
    element: <AccessDashboard />
  },
  { 
    path: 'users', 
      element: <UsersModule />,
      children: usersRoutes
  },
  { 
      path: 'roles', 
      element: <RolesModule />,
      children: rolesRoutes
  },
  { 
      path: 'permissions', 
      element: <PermissionsModule />,
      children: permissionsRoutes
  },
  { 
      path: 'user-groups', 
      element: <UserGroupsModule />,
      children: usergroupsRoutes
  },
  { 
      path: 'policies', 
      element: <AccessPoliciesModule />,
      children: accesspoliciesRoutes
  }
];
