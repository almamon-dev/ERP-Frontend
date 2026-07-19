import { RouteObject } from 'react-router-dom';
import LicenseList from './pages/List';

export const licenseRoutes: RouteObject[] = [
    {
        index: true,
        element: <LicenseList />
    }
];
