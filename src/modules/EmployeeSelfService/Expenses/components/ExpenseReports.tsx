import React, { useState } from 'react';
import { Download } from 'lucide-react';
import Button from '@/components/ui/button';

export default function ExpenseReports() {
  const [filter, setFilter] = useState<'Expense History' | 'Monthly Summary'>('Monthly Summary');

  return (
    <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-5 animate-in fade-in duration-200 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-md overflow-x-auto">
          {(['Monthly Summary', 'Expense History'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                filter === tab 
                  ? 'bg-white text-slate-800 shadow-2xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-3 font-medium rounded-xs flex items-center gap-1.5 cursor-pointer shrink-0">
          <Download size={14} />
          Export PDF/Excel
        </Button>
      </div>

      {filter === 'Monthly Summary' ? (
        <div className="p-4 bg-slate-50 rounded border border-slate-200 text-slate-600 text-[12.5px] space-y-2">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-medium text-slate-600">YTD Total Expense Claims (2026):</span>
            <span className="font-semibold text-slate-800">৳ 48,250</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-medium text-slate-600">Approved & Disbursed:</span>
            <span className="font-semibold text-emerald-700">৳ 41,550</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-600">Pending Review:</span>
            <span className="font-semibold text-amber-600">৳ 6,700</span>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="py-1.5 px-2.5 border-r border-slate-100">Month</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Claims Count</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Total Claimed</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Disbursed Amount</th>
                <th className="py-1.5 px-2.5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-1.5 px-2.5 border-r border-slate-100">July 2026</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100">3 Claims</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100">৳ 8,550</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-emerald-700">৳ 1,850</td>
                <td className="py-1.5 px-2.5 text-center"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[11px] border border-emerald-200">Audited</span></td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-1.5 px-2.5 border-r border-slate-100">June 2026</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100">5 Claims</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100">৳ 14,200</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-emerald-700">৳ 14,200</td>
                <td className="py-1.5 px-2.5 text-center"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[11px] border border-emerald-200">Closed</span></td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-1.5 px-2.5 border-r border-slate-100">May 2026</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100">4 Claims</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100">৳ 12,500</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-emerald-700">৳ 12,500</td>
                <td className="py-1.5 px-2.5 text-center"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[11px] border border-emerald-200">Closed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
