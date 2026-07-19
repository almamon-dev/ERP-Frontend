import { RouteObject } from 'react-router-dom';
import NotificationsList from './pages/List';

export const notificationsRoutes: RouteObject[] = [
    {
        index: true,
        element: <NotificationsList />
    }
];
