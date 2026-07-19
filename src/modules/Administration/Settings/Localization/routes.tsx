import { RouteObject } from 'react-router-dom';
import LocalizationList from './pages/List';

export const localizationRoutes: RouteObject[] = [
    {
        index: true,
        element: <LocalizationList />
    }
];
