import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import EssLayout from '@/layouts/EssLayout';

import DashboardPage from './Dashboard/pages';
import AboutMePage from './AboutMe/pages';
import TimeManagementPage from './TimeManagement/pages';
import LeaveMovementPage from './LeaveMovement/pages';
import IOUPage from './IOU/pages';
import FinancialAidPage from './FinancialAid/pages';
import AssetsPage from './Assets/pages';
import ExpensesPage from './Expenses/pages';
import ContactBookPage from './ContactBook/pages';
import SeparationPage from './Separation/pages';
import PaySlipPage from './PaySlip/pages';
import SupervisorPage from './Supervisor/pages';
import SalaryCertificatePage from './SalaryCertificate/pages';
import TodoListPage from './Todo/pages';
import CalendarMeetingsPage from './Calendar/pages';
import KpiBonusPage from './KpiBonus/pages';
import EssSettingsPage from './Settings/pages';
import EssSupportPage from './Support/pages';

export const employeeSelfServiceRoutes: RouteObject[] = [
  {
    path: 'employee-portal',
    element: <EssLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'about-me', element: <AboutMePage /> },
      { path: 'time-management', element: <TimeManagementPage /> },
      { path: 'leave-movement', element: <LeaveMovementPage /> },
      { path: 'iou', element: <IOUPage /> },
      { path: 'financial-aid', element: <FinancialAidPage /> },
      { path: 'assets', element: <AssetsPage /> },
      { path: 'expenses', element: <ExpensesPage /> },
      { path: 'contact-book', element: <ContactBookPage /> },
      { path: 'separation', element: <SeparationPage /> },
      { path: 'payslip', element: <PaySlipPage /> },
      { path: 'supervisor', element: <SupervisorPage /> },
      { path: 'salary-certificate', element: <SalaryCertificatePage /> },
      { path: 'todo', element: <TodoListPage /> },
      { path: 'calendar', element: <CalendarMeetingsPage /> },
      { path: 'kpi-bonus', element: <KpiBonusPage /> },
      { path: 'settings', element: <EssSettingsPage /> },
      { path: 'support', element: <EssSupportPage /> },
    ]
  }
];
