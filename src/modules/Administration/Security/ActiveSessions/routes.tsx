import { RouteObject } from 'react-router-dom';
import List from './pages/List';

export const activesessionsRoutes: RouteObject[] = [
    { index: true, element: <List /> },
];
