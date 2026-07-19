import { accessManagementNavigation } from './AccessManagement';
import { organizationNavigation } from './Organization';
import { securityNavigation } from './Security';
import { settingsNavigation } from './Settings';

export const administrationSidebar = [
  {
    title: 'Organization',
    icon: 'Building',
    items: organizationNavigation
  },
  {
    title: 'Access Management',
    icon: 'ShieldAlert',
    items: accessManagementNavigation
  },
  {
    title: 'Security',
    icon: 'Shield',
    items: securityNavigation
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
    title: 'System Settings',
    icon: 'Settings',
    items: settingsNavigation
  }
];
