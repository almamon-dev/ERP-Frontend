import { passwordpolicyNavigation } from './PasswordPolicy/navigation';
import { twofactorauthNavigation } from './TwoFactorAuth/navigation';
import { activesessionsNavigation } from './ActiveSessions/navigation';
import { loginhistoryNavigation } from './LoginHistory/navigation';
import { activitylogsNavigation } from './ActivityLogs/navigation';
import { auditlogsNavigation } from './AuditLogs/navigation';
import { ipwhitelistNavigation } from './IpWhitelist/navigation';
import { devicemanagementNavigation } from './DeviceManagement/navigation';

export const securityNavigation = [
    ...passwordpolicyNavigation,
    ...twofactorauthNavigation,
    ...activesessionsNavigation,
    ...loginhistoryNavigation,
    ...activitylogsNavigation,
    ...auditlogsNavigation,
    ...ipwhitelistNavigation,
    ...devicemanagementNavigation
];
