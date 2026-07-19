import { RouteObject } from 'react-router-dom';
import List from './pages/List';

export const devicemanagementRoutes: RouteObject[] = [
    { index: true, element: <List /> },
];
