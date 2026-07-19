import { RouteObject } from 'react-router-dom';
import List from './pages/List';

export const generalRoutes: RouteObject[] = [
    { index: true, element: <List /> },
];
