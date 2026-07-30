import { Application, Policy, Notice, CalendarDay, DailyLog } from '../types';

export const INITIAL_APPLICATIONS: Application[] = [
  { id: 1, type: 'Casual Leave [CL]', dates: '28 Jul, 2026', days: '2 Days', status: 'Pending', statusStyle: 'bg-amber-50 text-amber-600 border-amber-200', dot: 'bg-amber-400', dateApplied: '26 Jul, 2026' },
  { id: 2, type: 'Sick Leave [SL]', dates: '14 Jun, 2026', days: '1 Day', status: 'Approved', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', dateApplied: '09 Jun, 2026' },
  { id: 3, type: 'Expense Claim', dates: '05 Jul, 2026', days: 'BDT 5,240', status: 'Approved', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', dateApplied: '24 May, 2026' },
  { id: 4, type: 'IOU Request', dates: '01 Jul, 2026', days: 'BDT 10,000', status: 'Submitted', statusStyle: 'bg-blue-50 text-blue-600 border-blue-200', dot: 'bg-blue-400', dateApplied: '12 Apr, 2026' },
  { id: 5, type: 'Annual Leave [AL]', dates: '20 Jun, 2026', days: '3 Days', status: 'Rejected', statusStyle: 'bg-rose-50 text-rose-600 border-rose-200', dot: 'bg-rose-400', dateApplied: '18 Jun, 2026' },
];

export const COMPANY_POLICIES: Policy[] = [
  { id: 1, title: 'Code of Conduct & Ethics Policy', category: 'General', date: '15 Jan, 2026', size: '1.2 MB', code: 'POL-2026-01' },
  { id: 2, title: 'Attendance & Punctuality Policy', category: 'HR', date: '10 Jan, 2026', size: '850 KB', code: 'POL-2026-04' },
  { id: 3, title: 'Remote Work & Flexible Hours Policy', category: 'Operations', date: '05 Jan, 2026', size: '1.5 MB', code: 'POL-2026-09' },
  { id: 4, title: 'Information Security & Data Privacy', category: 'IT & Security', date: '20 Dec, 2025', size: '2.1 MB', code: 'POL-2025-18' },
];

export const NOTICES_LIST: Notice[] = [
  {
    id: 1,
    title: 'Advance Against Salary Feature Now Live',
    date: '15 Mar, 2026',
    category: 'Important',
    dot: 'bg-emerald-500',
    badge: 'bg-[#008060]/10 text-[#008060] border-emerald-200',
    content: 'Employees can now request advance against salary directly through the ESS portal under Financial Aid module with automatic manager approval workflow.'
  },
  {
    id: 2,
    title: 'Betopia Helpdesk & Ticket Portal Released',
    date: '28 Feb, 2026',
    category: 'Event',
    dot: 'bg-blue-400',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    content: 'The centralized internal IT & Admin helpdesk portal is live. Submit technical requests, asset maintenance, or admin support tickets seamlessly.'
  },
  {
    id: 3,
    title: 'Annual Performance Review & Q1 Goals Submission',
    date: '10 Feb, 2026',
    category: 'Notice',
    dot: 'bg-slate-400',
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    content: 'All team members are requested to complete self-assessment and submit Q1 2026 Key Performance Indicators (KPIs) by the end of this week.'
  },
  {
    id: 4,
    title: 'Revised Health Insurance Policy Guidelines 2026',
    date: '01 Feb, 2026',
    category: 'Urgent',
    dot: 'bg-rose-400',
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    content: 'Updated OPD and hospitalization coverage limits for employee dependents have been published. Please review the updated policy document in the portal.'
  },
];

export const CALENDAR_DAYS: CalendarDay[] = [
  { date: null, status: '' },
  { date: null, status: '' },
  { date: null, status: '' },
  { date: '1', status: 'Present', type: 'present' },
  { date: '2', status: 'Present', type: 'present' },
  { date: '3', status: 'Absent', type: 'absent' },
  { date: '4', status: 'Late', type: 'late' },
  { date: '5', status: 'Offday', type: 'offday' },
  { date: '6', status: 'Present', type: 'present' },
  { date: '7', status: 'Present', type: 'present' },
  { date: '8', status: 'Late', type: 'late' },
  { date: '9', status: 'Present', type: 'present' },
  { date: '10', status: 'Absent', type: 'absent' },
  { date: '11', status: 'Late', type: 'late' },
  { date: '12', status: 'Offday', type: 'offday' },
  { date: '13', status: 'Late', type: 'late' },
  { date: '14', status: 'Late', type: 'late' },
  { date: '15', status: 'Present', type: 'present' },
  { date: '16', status: 'Present', type: 'present' },
  { date: '17', status: 'Absent', type: 'absent' },
  { date: '18', status: 'Late', type: 'late' },
  { date: '19', status: 'Offday', type: 'offday' },
  { date: '20', status: 'Late', type: 'late' },
  { date: '21', status: 'Late', type: 'late' },
  { date: '22', status: 'Present', type: 'present' },
  { date: '23', status: 'Late', type: 'late' },
  { date: '24', status: 'Absent', type: 'absent' },
  { date: '25', status: 'Late', type: 'late' },
  { date: '26', status: 'Offday', type: 'offday' },
  { date: '27', status: 'Present', type: 'present' },
  { date: '28', status: '' },
  { date: '29', status: '' },
  { date: '30', status: '' },
  { date: '31', status: '' },
];

export const DAILY_LOGS: DailyLog[] = [
  { date: '27 Jul, 2026', hours: '10 hr 1 min', checkIn: '08:14 AM', checkOut: '06:15 PM', active: true },
  { date: '26 Jul, 2026', hours: '9 hr 46 min', checkIn: '08:22 AM', checkOut: '06:08 PM', active: false },
  { date: '25 Jul, 2026', hours: '8 hr 37 min', checkIn: '09:32 AM', checkOut: '06:09 PM', active: false },
  { date: '24 Jul, 2026', hours: '— — —', checkIn: 'Check In', checkOut: 'Check Out', active: false, empty: true },
];
