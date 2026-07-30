import React from 'react';
import { CalendarDay } from '../types';

const DAYS_OF_WEEK = [
  { full: 'Sunday', short: 'Sun' },
  { full: 'Monday', short: 'Mon' },
  { full: 'Tuesday', short: 'Tue' },
  { full: 'Wednesday', short: 'Wed' },
  { full: 'Thursday', short: 'Thu' },
  { full: 'Friday', short: 'Fri' },
  { full: 'Saturday', short: 'Sat' },
];

const STATUS_STYLES: Record<string, string> = {
  present: 'bg-[#e6f4ea] text-[#137333]',
  late: 'bg-[#ffeedd] text-[#c05621]',
  absent: 'bg-[#fee2e2] text-[#b91c1c]',
  offday: 'bg-[#f1f5f9] text-[#64748b]',
};

interface AttendanceCalendarGridProps {
  days: CalendarDay[];
}

export const AttendanceCalendarGrid: React.FC<AttendanceCalendarGridProps> = ({ days }) => {
  return (
    <div className="lg:col-span-7 xl:col-span-8 border-b lg:border-b-0 lg:border-r border-slate-100 pb-3 lg:pb-0 pr-0 lg:pr-3">
      <div className="grid grid-cols-7 gap-1 text-center font-semibold text-[11px] sm:text-[11.5px] tracking-tight mb-2">
        {DAYS_OF_WEEK.map((d) => (
          <div key={d.full} className="py-1 px-0.5 bg-[#f0f4f8] text-[#0369a1] rounded-[3px] text-center">
            <span className="hidden 2xl:inline">{d.full}</span>
            <span className="2xl:hidden">{d.short}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center font-normal text-[13px] sm:text-[14px]">
        {days.map((item, idx) => (
          <div key={idx} className="min-h-[52px] sm:min-h-[56px] p-0.5 sm:p-1 flex flex-col items-center justify-start rounded">
            {item.date && (
              <>
                <span className="font-semibold text-[#334155] text-[13px] sm:text-[14px]">{item.date}</span>
                {item.type && STATUS_STYLES[item.type] ? (
                  <span className={`mt-1 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-full whitespace-nowrap ${STATUS_STYLES[item.type]}`}>
                    {item.status}
                  </span>
                ) : (
                  <span className="mt-1 text-slate-200 font-bold text-[10px] leading-none">——</span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
