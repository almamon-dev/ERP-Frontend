import React from 'react';
import { RouteObject } from 'react-router-dom';

import StaffPortalPage from './Dashboard/pages/StaffPortalPage';
import MyProfile from './MyProfile';
import MyAttendance from './MyAttendance';
import MyLeave from './MyLeave';
import MyPayslips from './MyPayslips';
import MyDocuments from './MyDocuments';
import MyPerformance from './MyPerformance';
import MyTraining from './MyTraining';
import MyBenefits from './MyBenefits';
import MyRequests from './MyRequests';
import MyExpenses from './MyExpenses';
import MyAssets from './MyAssets';

export const workspaceRoutes: RouteObject[] = [
  { path: 'dashboard', element: <StaffPortalPage /> },
  { path: 'profile', element: <MyProfile /> },
  { path: 'attendance', element: <MyAttendance /> },
  { path: 'leave', element: <MyLeave /> },
  { path: 'payslips', element: <MyPayslips /> },
  { path: 'documents', element: <MyDocuments /> },
  { path: 'performance', element: <MyPerformance /> },
  { path: 'training', element: <MyTraining /> },
  { path: 'benefits', element: <MyBenefits /> },
  { path: 'requests', element: <MyRequests /> },
  { path: 'expenses', element: <MyExpenses /> },
  { path: 'assets', element: <MyAssets /> },
];
