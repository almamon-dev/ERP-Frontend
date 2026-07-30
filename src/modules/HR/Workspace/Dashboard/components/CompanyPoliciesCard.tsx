import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { COMPANY_POLICIES } from '../constants/mockData';

export const CompanyPoliciesCard: React.FC = () => {
  const [policySearch, setPolicySearch] = useState('');

  const filteredPolicies = COMPANY_POLICIES.filter((p) =>
    p.title.toLowerCase().includes(policySearch.toLowerCase()) ||
    p.category.toLowerCase().includes(policySearch.toLowerCase()) ||
    p.code.toLowerCase().includes(policySearch.toLowerCase())
  );

  return (
    <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3 flex flex-col">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <h3 className="font-semibold text-[15px] leading-[22px] text-[#1e3a5f] tracking-tight">Company Policies & Guidelines</h3>
        <span className="font-semibold text-[12px] leading-[20px] text-white bg-slate-600 px-2 py-0.5 rounded-full">{filteredPolicies.length} Docs</span>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search policies..."
          value={policySearch}
          onChange={(e) => setPolicySearch(e.target.value)}
          className="w-full h-8 pl-8 pr-3 font-medium text-[13px] leading-[20px] bg-slate-50 border border-slate-200 rounded-[3px] outline-none focus:bg-white focus:border-[#008060] focus:ring-1 focus:ring-[#008060]/20"
        />
        <Search size={14} className="absolute left-2.5 top-2 text-[#667085]" />
      </div>

      <div className="flex-1 max-h-[260px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filteredPolicies.map((policy, index) => (
          <div key={policy.id} className="flex items-start gap-2">
            <div className="relative flex flex-col items-center shrink-0 pt-[8px]">
              <div className="w-2 h-2 rounded-full shrink-0 bg-slate-400" />
              {index < filteredPolicies.length - 1 && (
                <div className="w-px flex-1 bg-slate-200 mt-1" style={{ minHeight: '28px' }} />
              )}
            </div>

            <div className="flex items-start gap-2 flex-1 min-w-0 py-1.5">
              <div className="w-[72px] shrink-0">
                <span className="text-[11px] font-normal text-[#667085] block leading-tight whitespace-nowrap">{policy.code}</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-normal text-[13px] text-[#344054] block truncate leading-tight">{policy.title}</span>
                <span className="text-[10.5px] font-normal text-[#667085] block leading-tight mt-0.5">{policy.category}</span>
              </div>
              <button className="font-medium text-[12px] text-[#008060] hover:underline cursor-pointer shrink-0 pt-0.5">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
