import React from 'react';
import DatePicker from '@/components/ui/date-picker';

const METRIC_BADGES = [
  { count: 28, label: 'Payable Days', color: 'border-slate-400', textColor: 'text-slate-800' },
  { count: 10, label: 'Present', color: 'border-emerald-500', textColor: 'text-slate-800' },
  { count: 10, label: 'Late', color: 'border-amber-500', textColor: 'text-slate-800' },
  { count: 0, label: 'Movement', color: 'border-purple-500', textColor: 'text-slate-800' },
  { count: 0, label: 'Leave', color: 'border-indigo-500', textColor: 'text-slate-800' },
  { count: 4, label: 'Absent', color: 'border-red-500', textColor: 'text-slate-800' },
];

export const AttendanceHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
      <div>
        <h2 className="font-bold text-[15.5px] leading-[20px] text-slate-800">Attendance Calendar</h2>
        <div className="mt-1">
          <DatePicker size="sm" variant="compact" format="monthYear" className="w-[130px]" placeholder="July 2026" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 font-normal text-[13px] sm:text-[14px]">
        {METRIC_BADGES.map((b) => (
          <div key={b.label} className={`flex items-stretch border-l-[3px] ${b.color} pl-2 text-left py-0.5`}>
            <div className="flex flex-col justify-between">
              <span className={`font-extrabold text-[15px] sm:text-[16px] ${b.textColor} leading-none`}>{b.count}</span>
              <span className="text-[#64748b] text-[11.5px] font-medium leading-none mt-1">{b.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
