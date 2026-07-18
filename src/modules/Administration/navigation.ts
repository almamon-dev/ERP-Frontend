import { userManagementNavigation } from './UserManagement/navigation';
import { organizationNavigation } from './Organization/navigation';

export const administrationSidebar = [
  {
    title: 'Organization',
    icon: 'Building',
    items: organizationNavigation
  },
  {
    title: 'User Management',
    icon: 'Users',
    items: userManagementNavigation
  },
  {
    title: 'Security',
    icon: 'Shield',
    items: [
      { name: 'Password Policy', path: '/administration/security/password-policy' },
      { name: 'Two-Factor Authentication', path: '/administration/security/2fa' },
      { name: 'Active Sessions', path: '/administration/security/active-sessions' },
      { name: 'Login History', path: '/administration/security/login-history' },
      { name: 'Activity Logs', path: '/administration/security/activity-logs' },
      { name: 'Audit Logs', path: '/administration/security/audit-logs' },
    ]
  },
  {
    title: 'Integrations',
    icon: 'Plug',
    items: [
      { name: 'API Keys', path: '/administration/integrations/api-keys' },
      { name: 'Webhooks', path: '/administration/integrations/webhooks' },
      { name: 'Google', path: '/administration/integrations/google' },
      { name: 'Microsoft', path: '/administration/integrations/microsoft' },
      { name: 'Payment Gateways', path: '/administration/integrations/payments' },
    ]
  },
  {
    title: 'Settings',
    icon: 'Settings',
    items: [
      { name: 'General', path: '/administration/settings/general' },
      { name: 'Company', path: '/administration/settings/company' },
      { name: 'Localization', path: '/administration/settings/localization' },
      { name: 'Email (SMTP)', path: '/administration/settings/email' },
      { name: 'Notifications', path: '/administration/settings/notifications' },
      { name: 'Storage', path: '/administration/settings/storage' },
      { name: 'Backup & Restore', path: '/administration/settings/backup' },
      { name: 'Maintenance Mode', path: '/administration/settings/maintenance' },
    ]
  }
];
