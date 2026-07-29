import React, { useState } from 'react';
import Button from '@/components/ui/button';

interface ExpenseRequisitionsProps {
  requisitions: any[];
  onOpenCreateModal: () => void;
}

export default function ExpenseRequisitions({ requisitions, onOpenCreateModal }: ExpenseRequisitionsProps) {
  const [filter, setFilter] = useState<'All' | 'Draft' | 'Pending Approval' | 'History'>('All');

  const filteredItems = requisitions.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Draft') return item.status === 'Draft';
    if (filter === 'Pending Approval') return item.status === 'Pending Approval';
    if (filter === 'History') return item.status === 'Approved' || item.status === 'Rejected';
    return true;
  });

  return (
    <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-4 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-md">
          {(['All', 'Draft', 'Pending Approval', 'History'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded text-[12px] font-medium transition-colors cursor-pointer ${
                filter === tab 
                  ? 'bg-white text-slate-800 shadow-2xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button 
          onClick={onOpenCreateModal}
          className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-3.5 font-medium rounded-xs cursor-pointer shrink-0"
        >
          + Create Expense Requisition
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
              <th className="py-1.5 px-2.5 border-r border-slate-100">Req ID</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Requisition Purpose</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Category</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Est. Amount</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Request Date</th>
              <th className="py-1.5 px-2.5 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.title}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.category}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.estAmount}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.reqDate}</td>
                <td className="py-1.5 px-2.5 text-center">
                  <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.statusBadge}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
