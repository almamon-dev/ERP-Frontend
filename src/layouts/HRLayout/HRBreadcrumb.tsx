import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const HRBreadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length <= 1) return null;

  return (
    <nav className="flex items-center gap-1.5 text-[12px] text-slate-500 font-medium px-6 py-2.5 bg-white border-b border-slate-100">
      <Link to="/hr/dashboard" className="flex items-center gap-1 hover:text-[#008060] transition-colors">
        <Home size={13} />
        <span>HR Home</span>
      </Link>
      {pathSegments.map((segment, idx) => {
        const url = `/${pathSegments.slice(0, idx + 1).join('/')}`;
        const isLast = idx === pathSegments.length - 1;
        const formattedName = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        return (
          <React.Fragment key={url}>
            <ChevronRight size={12} className="text-slate-300 shrink-0" />
            {isLast ? (
              <span className="font-bold text-[#008060]">{formattedName}</span>
            ) : (
              <Link to={url} className="hover:text-[#008060] transition-colors capitalize">
                {formattedName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
