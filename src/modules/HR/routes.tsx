import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';

import StaffPortalPage from './Portal/pages/StaffPortalPage';
import EmployeesPage from './Employees/pages/EmployeesPage';
import OnboardingPage from './Onboarding/pages';
import TransfersPage from './Transfers/pages';
import OffboardingPage from './Offboarding/pages';

import AttendancePage from './Attendance/pages/AttendancePage';
import ShiftsPage from './Shifts/pages';
import OvertimePage from './Overtime/pages';
import HolidaysPage from './Holidays/pages';

import RequestsPage from './Leave/RequestsPage';
import AllocationsPage from './Leave/AllocationsPage';
import PoliciesPage from './Leave/PoliciesPage';

import PayrollPage from './Payroll/pages/PayrollPage';
import SalaryStructuresPage from './SalaryStructures/pages';
import PayslipsPage from './Payslips/pages';
import BenefitsPage from './Benefits/pages';

import JobsPage from './Recruitment/JobsPage';
import ApplicantsPage from './Recruitment/ApplicantsPage';
import InterviewsPage from './Recruitment/InterviewsPage';

import PerformancePage from './Performance/pages/PerformancePage';
import KpiGoalsPage from './KpiGoals/pages';
import TrainingPage from './Training/pages';

import DocumentsPage from './Documents/pages/DocumentsPage';
import GeneralSettingsPage from './Settings/GeneralSettingsPage';
import OrganizationSetupPage from './Settings/OrganizationSetupPage';

export const hrRoutes: RouteObject[] = [
  {
    path: 'hr',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="portal" replace />,
      },
      { path: 'portal', element: <StaffPortalPage /> },
      { path: 'dashboard', element: <StaffPortalPage /> },
      { path: 'employees', element: <EmployeesPage /> },
      { path: 'onboarding', element: <OnboardingPage /> },
      { path: 'transfers', element: <TransfersPage /> },
      { path: 'offboarding', element: <OffboardingPage /> },

      { path: 'attendance', element: <AttendancePage /> },
      { path: 'shifts', element: <ShiftsPage /> },
      { path: 'overtime', element: <OvertimePage /> },
      { path: 'holidays', element: <HolidaysPage /> },

      { path: 'leave', element: <Navigate to="requests" replace /> },
      { path: 'leave/requests', element: <RequestsPage /> },
      { path: 'leave/allocations', element: <AllocationsPage /> },
      { path: 'leave/policies', element: <PoliciesPage /> },

      { path: 'payroll', element: <PayrollPage /> },
      { path: 'salary-structures', element: <SalaryStructuresPage /> },
      { path: 'payslips', element: <PayslipsPage /> },
      { path: 'benefits', element: <BenefitsPage /> },

      { path: 'recruitment', element: <Navigate to="jobs" replace /> },
      { path: 'recruitment/jobs', element: <JobsPage /> },
      { path: 'recruitment/applicants', element: <ApplicantsPage /> },
      { path: 'recruitment/interviews', element: <InterviewsPage /> },

      { path: 'performance', element: <PerformancePage /> },
      { path: 'kpi-goals', element: <KpiGoalsPage /> },
      { path: 'training', element: <TrainingPage /> },

      { path: 'documents', element: <DocumentsPage /> },
      { path: 'settings/general', element: <GeneralSettingsPage /> },
      { path: 'settings/organization', element: <OrganizationSetupPage /> },
    ]
  }
];
