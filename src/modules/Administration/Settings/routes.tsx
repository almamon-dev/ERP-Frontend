import { RouteObject, Navigate } from 'react-router-dom';
import GeneralModule from './General';
import { generalRoutes } from './General/routes';

import EmailTemplatesModule from './EmailTemplates';
import { emailtemplatesRoutes } from './EmailTemplates/routes';
import EmailSMTPModule from './EmailSMTP';
import { emailsmtpRoutes } from './EmailSMTP/routes';
import StorageModule from './Storage';
import { storageRoutes } from './Storage/routes';
import MaintenanceModeModule from './MaintenanceMode';
import { maintenancemodeRoutes } from './MaintenanceMode/routes';
import BackupRestoreModule from './BackupRestore';
import { backuprestoreRoutes } from './BackupRestore/routes';

import LocalizationModule from './Localization';
import { localizationRoutes } from './Localization/routes';
import NotificationsModule from './Notifications';
import { notificationsRoutes } from './Notifications/routes';
import SecurityModule from './Security';
import { securityRoutes } from './Security/routes';
import QueueSchedulerModule from './QueueScheduler';
import { queueschedulerRoutes } from './QueueScheduler/routes';
import CacheManagementModule from './CacheManagement';
import { cachemanagementRoutes } from './CacheManagement/routes';
import SystemLogsModule from './SystemLogs';
import { systemlogsRoutes } from './SystemLogs/routes';
import LicenseModule from './License';
import { licenseRoutes } from './License/routes';

export const settingsRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="general" replace />
  },
  { 
      path: 'general', 
      element: <GeneralModule />,
      children: generalRoutes
  },  { 
      path: 'email-templates', 
      element: <EmailTemplatesModule />,
      children: emailtemplatesRoutes
  },  { 
      path: 'email-smtp', 
      element: <EmailSMTPModule />,
      children: emailsmtpRoutes
  },  { 
      path: 'storage', 
      element: <StorageModule />,
      children: storageRoutes
  },  { 
      path: 'maintenance', 
      element: <MaintenanceModeModule />,
      children: maintenancemodeRoutes
  },  { 
      path: 'backup', 
      element: <BackupRestoreModule />,
      children: backuprestoreRoutes
  },  { 
      path: 'localization', 
      element: <LocalizationModule />,
      children: localizationRoutes
  },  { 
      path: 'notifications', 
      element: <NotificationsModule />,
      children: notificationsRoutes
  },  { 
      path: 'security', 
      element: <SecurityModule />,
      children: securityRoutes
  },  { 
      path: 'queue', 
      element: <QueueSchedulerModule />,
      children: queueschedulerRoutes
  },  { 
      path: 'cache', 
      element: <CacheManagementModule />,
      children: cachemanagementRoutes
  },  { 
      path: 'logs', 
      element: <SystemLogsModule />,
      children: systemlogsRoutes
  },  { 
      path: 'license', 
      element: <LicenseModule />,
      children: licenseRoutes
  }
];
