import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ROLES } from '@/constants/roles';
import { Application, Notice, LeaveFormData } from '../types';
import { INITIAL_APPLICATIONS, CALENDAR_DAYS, DAILY_LOGS } from '../constants/mockData';
import { PortalGreetingHeader } from '../components/PortalGreetingHeader';
import { WorkingPeriodCard } from '../components/WorkingPeriodCard';
import { LengthOfServiceCard } from '../components/LengthOfServiceCard';
import { AttendanceHeader } from '../components/AttendanceHeader';
import { AttendanceCalendarGrid } from '../components/AttendanceCalendarGrid';
import { DailyPunchLogs } from '../components/DailyPunchLogs';
import { MyManagerCard } from '../components/MyManagerCard';
import { LeaveBalanceCard } from '../components/LeaveBalanceCard';
import { CompanyPoliciesCard } from '../components/CompanyPoliciesCard';
import { NoticeBoardCard } from '../components/NoticeBoardCard';
import { MyApplicationsCard } from '../components/MyApplicationsCard';
import { PendingApprovalsTable } from '../components/PendingApprovalsTable';
import { TeamKpiOverview } from '../components/TeamKpiOverview';
import { ApplyLeaveModal } from '../components/ApplyLeaveModal';
import { NoticeDetailModal } from '../components/NoticeDetailModal';

export default function StaffPortalPage() {
  const { user } = useAuth();
  const isSupervisor = user?.role === ROLES.SUPERVISOR || user?.role === ROLES.TEAM_LEADER;
  const isTeamLeader = user?.role === ROLES.TEAM_LEADER;

  const [applications, setApplications] = useState<Application[]>(INITIAL_APPLICATIONS);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [selectedNoticeModal, setSelectedNoticeModal] = useState<Notice | null>(null);

  const handleLeaveSubmit = (data: LeaveFormData) => {
    setApplications([{
      id: Date.now(), type: data.leaveType, dates: `${data.startDate} - ${data.endDate}`,
      days: '1 Day', status: 'Pending', statusStyle: 'bg-amber-50 text-amber-700 border-amber-200',
      dot: 'bg-amber-400', dateApplied: '27 Jul, 2026',
    }, ...applications]);
    setIsLeaveModalOpen(false);
  };

  return (
    <div className="w-full max-w-full p-3.5 sm:p-4 bg-[#f8fafc] min-h-screen space-y-3.5 font-['Poppins',sans-serif] antialiased custom-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <PortalGreetingHeader userName={user?.name} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 w-full">
        <WorkingPeriodCard />
        <LengthOfServiceCard />
      </div>
      <div className="space-y-3.5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
          <div className="lg:col-span-7 xl:col-span-8 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-2xs space-y-4">
            <AttendanceHeader />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
              <AttendanceCalendarGrid days={CALENDAR_DAYS} />
              <DailyPunchLogs logs={DAILY_LOGS} />
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-4 space-y-4">
            <MyManagerCard />
            <LeaveBalanceCard />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <CompanyPoliciesCard />
        <NoticeBoardCard onSelectNotice={(notice) => setSelectedNoticeModal(notice)} />
        <MyApplicationsCard applications={applications} onOpenApplyModal={() => setIsLeaveModalOpen(true)} />
      </div>
      {isSupervisor && (
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-1 h-5 rounded-full bg-[#008060]" />
            <h2 className="font-bold text-[15px] text-slate-900">{isTeamLeader ? 'Team Leader Panel' : 'Supervisor Panel'}</h2>
            <span className="px-2 py-0.5 text-[10.5px] font-bold bg-[#008060]/10 text-[#008060] rounded border border-[#008060]/20">
              {isTeamLeader ? 'TEAM LEADER' : 'SUPERVISOR'}
            </span>
          </div>
          <PendingApprovalsTable />
          {isTeamLeader && <TeamKpiOverview />}
        </div>
      )}
      <ApplyLeaveModal isOpen={isLeaveModalOpen} onClose={() => setIsLeaveModalOpen(false)} onSubmitLeave={handleLeaveSubmit} />
      <NoticeDetailModal notice={selectedNoticeModal} onClose={() => setSelectedNoticeModal(null)} />
    </div>
  );
}
