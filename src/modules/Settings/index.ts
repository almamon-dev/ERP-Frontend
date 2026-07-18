import { generalRoutes } from './General';
import { localizationRoutes } from './Localization';
import { sMTPRoutes } from './SMTP';
import { notificationRoutes } from './Notification';
import { storageRoutes } from './Storage';
import { backupRoutes } from './Backup';
import { maintenanceRoutes } from './Maintenance';
import { RouteObject } from 'react-router-dom';

export const settingsRoutes: RouteObject[] = [
    {
        path: 'settings',
        children: [
            ...generalRoutes,
            ...localizationRoutes,
            ...sMTPRoutes,
            ...notificationRoutes,
            ...storageRoutes,
            ...backupRoutes,
            ...maintenanceRoutes,
        ]
    }
];
