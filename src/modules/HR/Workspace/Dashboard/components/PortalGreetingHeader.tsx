import React from 'react';

interface PortalGreetingHeaderProps {
  userName?: string;
}

export const PortalGreetingHeader: React.FC<PortalGreetingHeaderProps> = ({ userName }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 px-1">
      <div>
        <div className="text-[12.5px] font-semibold text-slate-400">
          28 July, 2026, Tuesday.
        </div>
        <h1 className="text-[17px] sm:text-[19px] font-bold text-slate-800 tracking-tight mt-0.5">
          Hello {userName || 'Al Mamon'}, Welcome Back !
        </h1>
      </div>
    </div>
  );
};
