import React from 'react';
import { RouteObject } from 'react-router-dom';

import Dashboard from './Dashboard';
import Employees from './Employees/pages/EmployeesPage';
import RecruitmentJobs from './Recruitment/JobsPage';
import RecruitmentApplicants from './Recruitment/ApplicantsPage';
import RecruitmentInterviews from './Recruitment/InterviewsPage';
import Onboarding from './Onboarding/pages';
import Offboarding from './Offboarding/pages';
import Attendance from './Attendance/pages/AttendancePage';
import Shifts from './Shifts/pages';
import Holidays from './Holidays/pages';
import LeaveRequests from './Leave/RequestsPage';
import LeaveAllocations from './Leave/AllocationsPage';
import LeavePolicies from './Leave/PoliciesPage';
import Overtime from './Overtime/pages';
import Payroll from './Payroll/pages/PayrollPage';
import Payslips from './Payslips/pages';
import SalaryStructures from './SalaryStructures/pages';
import Benefits from './Benefits/pages';
import Performance from './Performance/pages/PerformancePage';
import KPIGoals from './KPIGoals/pages';
import Training from './Training/pages';
import Transfers from './Transfers/pages';
import Documents from './Documents/pages/DocumentsPage';
import Reports from './Reports';
import SettingsGeneral from './Settings/GeneralSettingsPage';
import SettingsOrganization from './Settings/OrganizationSetupPage';

export const managementRoutes: RouteObject[] = [
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'employees', element: <Employees /> },
  { path: 'recruitment/jobs', element: <RecruitmentJobs /> },
  { path: 'recruitment/applicants', element: <RecruitmentApplicants /> },
  { path: 'recruitment/interviews', element: <RecruitmentInterviews /> },
  { path: 'onboarding', element: <Onboarding /> },
  { path: 'offboarding', element: <Offboarding /> },
  { path: 'attendance', element: <Attendance /> },
  { path: 'shifts', element: <Shifts /> },
  { path: 'holidays', element: <Holidays /> },
  { path: 'leave/requests', element: <LeaveRequests /> },
  { path: 'leave/allocations', element: <LeaveAllocations /> },
  { path: 'leave/policies', element: <LeavePolicies /> },
  { path: 'overtime', element: <Overtime /> },
  { path: 'payroll', element: <Payroll /> },
  { path: 'payslips', element: <Payslips /> },
  { path: 'salary-structures', element: <SalaryStructures /> },
  { path: 'benefits', element: <Benefits /> },
  { path: 'performance', element: <Performance /> },
  { path: 'kpi-goals', element: <KPIGoals /> },
  { path: 'training', element: <Training /> },
  { path: 'transfers', element: <Transfers /> },
  { path: 'documents', element: <Documents /> },
  { path: 'reports', element: <Reports /> },
  { path: 'settings/general', element: <SettingsGeneral /> },
  { path: 'settings/organization', element: <SettingsOrganization /> },
];
