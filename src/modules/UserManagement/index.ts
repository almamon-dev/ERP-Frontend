import { usersRoutes } from './Users';
import { rolesRoutes } from './Roles';
import { permissionsRoutes } from './Permissions';
import { loginHistoryRoutes } from './LoginHistory';
import { activityLogsRoutes } from './ActivityLogs';
import { RouteObject } from 'react-router-dom';

export const userManagementRoutes: RouteObject[] = [
    {
        path: 'user-management',
        children: [
            ...usersRoutes,
            ...rolesRoutes,
            ...permissionsRoutes,
            ...loginHistoryRoutes,
            ...activityLogsRoutes,
        ]
    }
];
