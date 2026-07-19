import { generalNavigation } from './General/navigation';
import { emailtemplatesNavigation } from './EmailTemplates/navigation';
import { emailsmtpNavigation } from './EmailSMTP/navigation';
import { storageNavigation } from './Storage/navigation';
import { maintenancemodeNavigation } from './MaintenanceMode/navigation';
import { backuprestoreNavigation } from './BackupRestore/navigation';

export const settingsNavigation = [
    ...generalNavigation,
    ...emailtemplatesNavigation,
    ...emailsmtpNavigation,
    ...storageNavigation,
    ...maintenancemodeNavigation,
    ...backuprestoreNavigation
];
