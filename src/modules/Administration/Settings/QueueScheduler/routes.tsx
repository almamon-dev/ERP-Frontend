import { RouteObject } from 'react-router-dom';
import QueueSchedulerList from './pages/List';

export const queueschedulerRoutes: RouteObject[] = [
    {
        index: true,
        element: <QueueSchedulerList />
    }
];
