import { RouteObject } from 'react-router-dom';
import List from './pages/List';

export const storageRoutes: RouteObject[] = [
    { index: true, element: <List /> },
];
