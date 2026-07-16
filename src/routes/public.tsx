import { RouteObject } from 'react-router-dom';
import { authRoutes } from '@/modules/Core/Auth/routes';

export const publicRoutes: RouteObject[] = [
  authRoutes,
];
