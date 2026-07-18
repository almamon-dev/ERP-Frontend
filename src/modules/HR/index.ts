import { employeesRoutes } from './Employees';
import { attendanceRoutes } from './Attendance';
import { leaveRoutes } from './Leave';
import { payrollRoutes } from './Payroll';
import { recruitmentRoutes } from './Recruitment';
import { performanceRoutes } from './Performance';
import { documentsRoutes } from './Documents';
import { RouteObject } from 'react-router-dom';

export const hRRoutes: RouteObject[] = [
    {
        path: 'h-r',
        children: [
            ...employeesRoutes,
            ...attendanceRoutes,
            ...leaveRoutes,
            ...payrollRoutes,
            ...recruitmentRoutes,
            ...performanceRoutes,
            ...documentsRoutes,
        ]
    }
];
