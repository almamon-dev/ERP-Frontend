import { RouteObject } from 'react-router-dom';
import SecurityList from './pages/List';

export const securityRoutes: RouteObject[] = [
    {
        index: true,
        element: <SecurityList />
    }
];
