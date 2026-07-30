import React from 'react';
import { RotateCcw } from 'lucide-react';

interface PageStatusFilterProps {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

export const PageStatusFilter: React.FC<PageStatusFilterProps> = ({ statusFilter, setStatusFilter }) => (
  <div className="flex flex-wrap items-center gap-4">
    <div className="w-full sm:w-[200px]">
      <label className="block text-[12px] font-bold text-slate-700 mb-1">Status</label>
      <select 
        value={statusFilter} 
        onChange={(e) => setStatusFilter(e.target.value)}
        className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none focus:border-[#d1d1d1] focus:ring-0 transition-colors"
      >
        <option value="All">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Approved">Approved</option>
        <option value="Processing">Processing</option>
      </select>
    </div>
    <div className="mt-5">
      <button 
        onClick={() => setStatusFilter('All')} 
        className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:border-slate-400 transition-all group outline-none"
        title="Clear Filters"
      >
        <RotateCcw size={13} />
      </button>
    </div>
  </div>
);
