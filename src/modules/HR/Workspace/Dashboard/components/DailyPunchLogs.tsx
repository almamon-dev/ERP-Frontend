import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { DailyLog } from '../types';

interface DailyPunchLogsProps {
  logs: DailyLog[];
}

export const DailyPunchLogs: React.FC<DailyPunchLogsProps> = ({ logs }) => {
  return (
    <div className="lg:col-span-5 xl:col-span-4 space-y-2">
      {logs.map((log, index) => (
        <div key={index} className="p-2.5 px-3 bg-white rounded-[3px] border border-slate-200/80 shadow-2xs space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-normal text-[#526074] whitespace-nowrap">{log.date}</span>
            {log.hours && log.hours !== '—' ? (
              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-medium text-[11px] sm:text-[11.5px] rounded-full whitespace-nowrap">
                {log.hours}
              </span>
            ) : (
              <span className="text-slate-300 text-[13px]">——</span>
            )}
          </div>

          <div className="flex items-center gap-5 sm:gap-7 pt-0.5">
            <div className="flex items-start gap-1.5">
              <ArrowUp size={16} className="text-[#1e293b] shrink-0 mt-0.5 stroke-[2]" />
              <div>
                <div className="text-[#38bdf8] font-normal text-[12px] sm:text-[12.5px] leading-none whitespace-nowrap">Check In</div>
                <div className="text-[#1e293b] font-bold text-[13px] leading-tight mt-1 whitespace-nowrap">{log.checkIn}</div>
              </div>
            </div>

            <div className="flex items-start gap-1.5">
              <ArrowDown size={16} className="text-[#1e293b] shrink-0 mt-0.5 stroke-[2]" />
              <div>
                <div className="text-[#fb923c] font-normal text-[12px] sm:text-[12.5px] leading-none whitespace-nowrap">Check Out</div>
                <div className="text-[#1e293b] font-bold text-[13px] leading-tight mt-1 whitespace-nowrap">{log.checkOut}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
