import { RouteObject } from 'react-router-dom';
import List from './pages/List';

export const permissionsRoutes: RouteObject[] = [
    { index: true, element: <List /> },
];
