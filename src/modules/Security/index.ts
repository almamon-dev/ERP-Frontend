import { passwordPolicyRoutes } from './PasswordPolicy';
import { twoFactorRoutes } from './TwoFactor';
import { sessionsRoutes } from './Sessions';
import { auditLogsRoutes } from './AuditLogs';
import { RouteObject } from 'react-router-dom';

export const securityRoutes: RouteObject[] = [
    {
        path: 'security',
        children: [
            ...passwordPolicyRoutes,
            ...twoFactorRoutes,
            ...sessionsRoutes,
            ...auditLogsRoutes,
        ]
    }
];
