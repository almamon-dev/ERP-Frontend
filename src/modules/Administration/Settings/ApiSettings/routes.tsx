import { RouteObject } from 'react-router-dom';
import ApiSettingsList from './pages/List';

export const apisettingsRoutes: RouteObject[] = [
    {
        index: true,
        element: <ApiSettingsList />
    }
];
