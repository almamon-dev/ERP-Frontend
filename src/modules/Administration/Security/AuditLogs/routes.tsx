import { RouteObject } from 'react-router-dom';
import List from './pages/List';

export const auditlogsRoutes: RouteObject[] = [
    { index: true, element: <List /> },
];
