import React from 'react';
import { Application } from '../types';

interface MyApplicationsCardProps {
  applications: Application[];
  onOpenApplyModal: () => void;
}

export const MyApplicationsCard: React.FC<MyApplicationsCardProps> = ({
  applications,
  onOpenApplyModal,
}) => {
  return (
    <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3 flex flex-col">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <h3 className="font-semibold text-[15px] leading-[22px] text-[#1e3a5f] tracking-tight">My Applications</h3>
        <button
          onClick={onOpenApplyModal}
          className="font-semibold text-[11.5px] text-[#008060] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-[3px] cursor-pointer transition-colors"
        >
          + Apply
        </button>
      </div>

      <div className="flex-1 max-h-[260px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {applications.map((app, index) => (
          <div key={app.id} className="flex items-start gap-2 hover:bg-slate-50/70 transition-colors rounded-[2px]">
            <div className="relative flex flex-col items-center shrink-0 pt-[6px]">
              <div className={`w-2 h-2 rounded-full shrink-0 ${app.dot}`} />
              {index < applications.length - 1 && (
                <div className="w-px flex-1 bg-slate-200 mt-1" style={{ minHeight: '28px' }} />
              )}
            </div>

            <div className="flex items-start gap-2 flex-1 min-w-0 py-1.5">
              <div className="w-[72px] shrink-0">
                <span className="text-[11px] font-normal text-[#667085] block leading-tight whitespace-nowrap">{app.dates}</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-normal text-[13px] text-[#344054] block truncate leading-tight">{app.type}</span>
                <span className="text-[10.5px] font-normal text-[#667085] block leading-tight mt-0.5">{app.days}</span>
              </div>
              <div className="shrink-0">
                <span className={`inline-block font-medium px-2 py-0.5 rounded-[3px] border text-[11px] whitespace-nowrap ${app.statusStyle}`}>
                  {app.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
