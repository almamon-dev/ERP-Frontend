import { accessManagementNavigation } from './AccessManagement';
import { organizationNavigation } from './Organization';
import { securityNavigation } from './Security';
import { settingsNavigation } from './Settings';
import { integrationsNavigation } from './Integrations';

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
    items: integrationsNavigation
  },
  {
    title: 'System Settings',
    icon: 'Settings',
    items: settingsNavigation
  }
];

