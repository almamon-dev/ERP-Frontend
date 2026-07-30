import React from 'react';

export const LengthOfServiceCard: React.FC = () => {
  return (
    <div className="lg:col-span-7 bg-white p-3 sm:p-3.5 px-4 rounded-[3px] border border-slate-200 shadow-xs flex items-center gap-3.5 hover:border-slate-300 transition-all">
      <div className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] shrink-0 flex items-center justify-center">
        <svg className="w-10 h-10 sm:w-10 sm:h-10" viewBox="0 0 36 36" fill="none">
          <rect x="10" y="2.5" width="3.2" height="6.5" rx="1.5" fill="#334155" />
          <rect x="23" y="2.5" width="3.2" height="6.5" rx="1.5" fill="#334155" />
          <path d="M5 10C5 7.79086 6.79086 6 9 6H27C29.2091 6 31 7.79086 31 10V14H5V10Z" fill="#f97316" />
          <path d="M5 14H31V28C31 30.2091 29.2091 32 27 32H9C6.79086 32 5 30.2091 5 28V14Z" fill="#e2e8f0" />
          <rect x="9" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="14.2" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="19.4" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="24.6" y="17" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="9" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="14.2" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="19.4" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="24.6" y="22" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="9" y="27" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="14.2" y="27" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
          <rect x="19.4" y="27" width="3.5" height="3.5" rx="0.6" fill="#64748b" />
        </svg>
      </div>

      <div className="flex-1 flex items-center divide-x divide-slate-300 text-left overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="pr-4 shrink-0">
          <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Length of Service</span>
          <span className="font-black text-[15.5px] text-[#ea580c] mt-0.5 block whitespace-nowrap">2 years 1 months</span>
        </div>
        <div className="px-4 shrink-0">
          <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Joining Date</span>
          <span className="font-extrabold text-[15px] text-[#0f172a] mt-0.5 block whitespace-nowrap">20 Jun, 2024</span>
        </div>
        <div className="pl-4 shrink-0">
          <span className="font-semibold text-[13px] text-[#334155] block whitespace-nowrap">Confirmation Date</span>
          <span className="font-extrabold text-[15px] text-[#0f172a] mt-0.5 block whitespace-nowrap">16 Sep, 2024</span>
        </div>
      </div>
    </div>
  );
};
