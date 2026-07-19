import { usersNavigation } from './Users/navigation';
import { rolesNavigation } from './Roles/navigation';
import { permissionsNavigation } from './Permissions/navigation';
import { usergroupsNavigation } from './UserGroups/navigation';
import { accesspoliciesNavigation } from './AccessPolicies/navigation';

export const accessManagementNavigation = [
  ...usersNavigation,
  ...rolesNavigation,
  ...permissionsNavigation,
  ...usergroupsNavigation,
  ...accesspoliciesNavigation,
];
