import React from 'react';

export const WorkingPeriodCard: React.FC = () => {
  return (
    <div className="lg:col-span-5 bg-white p-3 sm:p-3.5 px-4 rounded-[3px] border border-slate-200 shadow-xs flex items-center gap-3.5 hover:border-slate-300 transition-all">
      <div className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#16a34a] p-[3.5px] shrink-0 shadow-xs flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-[#ecfdf5] relative flex items-center justify-center">
          <span className="absolute top-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>
          <span className="absolute bottom-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>
          <span className="absolute left-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>
          <span className="absolute right-[1.5px] text-[7.5px] font-extrabold text-[#16a34a] leading-none">+</span>
          <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none">
            <path d="M12 12L8.5 8.5" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 12V17.5" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2.2" fill="#0f172a" />
            <circle cx="12" cy="12" r="0.9" fill="#ffffff" />
          </svg>
        </div>
      </div>

      <div className="flex-1 flex items-center divide-x divide-slate-300 text-left">
        <div className="pr-4">
          <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Today Working Period</span>
          <span className="font-black text-[15.5px] text-[#008060] mt-0.5 block whitespace-nowrap">3 hr 15 min</span>
        </div>
        <div className="pl-4">
          <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Morning 8:00AM to 5:00PM</span>
          <span className="font-extrabold text-[15px] text-[#0f172a] mt-0.5 block whitespace-nowrap">08:00 AM – 05:00 PM</span>
        </div>
      </div>
    </div>
  );
};
