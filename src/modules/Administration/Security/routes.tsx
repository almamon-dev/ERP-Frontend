import { RouteObject, Navigate } from 'react-router-dom';
import PasswordPolicyModule from './PasswordPolicy';
import { passwordpolicyRoutes } from './PasswordPolicy/routes';
import TwoFactorAuthModule from './TwoFactorAuth';
import { twofactorauthRoutes } from './TwoFactorAuth/routes';
import ActiveSessionsModule from './ActiveSessions';
import { activesessionsRoutes } from './ActiveSessions/routes';
import LoginHistoryModule from './LoginHistory';
import { loginhistoryRoutes } from './LoginHistory/routes';
import ActivityLogsModule from './ActivityLogs';
import { activitylogsRoutes } from './ActivityLogs/routes';
import AuditLogsModule from './AuditLogs';
import { auditlogsRoutes } from './AuditLogs/routes';
import IpWhitelistModule from './IpWhitelist';
import { ipwhitelistRoutes } from './IpWhitelist/routes';
import DeviceManagementModule from './DeviceManagement';
import { devicemanagementRoutes } from './DeviceManagement/routes';

export const securityRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="password-policy" replace />
  },
  { 
      path: 'password-policy', 
      element: <PasswordPolicyModule />,
      children: passwordpolicyRoutes
  },  { 
      path: 'two-factor', 
      element: <TwoFactorAuthModule />,
      children: twofactorauthRoutes
  },  { 
      path: 'sessions', 
      element: <ActiveSessionsModule />,
      children: activesessionsRoutes
  },  { 
      path: 'login-history', 
      element: <LoginHistoryModule />,
      children: loginhistoryRoutes
  },  { 
      path: 'activity-logs', 
      element: <ActivityLogsModule />,
      children: activitylogsRoutes
  },  { 
      path: 'audit-logs', 
      element: <AuditLogsModule />,
      children: auditlogsRoutes
  },  { 
      path: 'ip-whitelist', 
      element: <IpWhitelistModule />,
      children: ipwhitelistRoutes
  },  { 
      path: 'devices', 
      element: <DeviceManagementModule />,
      children: devicemanagementRoutes
  }
];
