import { RouteObject } from 'react-router-dom';
import List from './pages/List';

export const activitylogsRoutes: RouteObject[] = [
    { index: true, element: <List /> },
];
