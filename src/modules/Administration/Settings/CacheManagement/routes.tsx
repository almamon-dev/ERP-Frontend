import { RouteObject } from 'react-router-dom';
import CacheManagementList from './pages/List';

export const cachemanagementRoutes: RouteObject[] = [
    {
        index: true,
        element: <CacheManagementList />
    }
];
