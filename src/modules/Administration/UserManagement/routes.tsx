import { RouteObject } from 'react-router-dom';
import UsersPage from './Users';
import RolesPage from './Roles';
import PermissionsPage from './Permissions';
import UserGroupsPage from './UserGroups';

export const userManagementRoutes: RouteObject[] = [
  { path: 'users', element: <UsersPage /> },
  { path: 'roles', element: <RolesPage /> },
  { path: 'permissions', element: <PermissionsPage /> },
  { path: 'user-groups', element: <UserGroupsPage /> },
];
