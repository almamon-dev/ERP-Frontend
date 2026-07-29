import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';

interface PendingApprovalsProps {
  pendingList?: any[];
}

export default function PendingApprovals({ pendingList = [] }: PendingApprovalsProps) {
  const mockPending = pendingList.length > 0 ? pendingList : [
    { id: 'CLM-2026-90', employee: 'Sabbir Ahmed (Junior Dev)', category: 'Conveyance', amount: '৳ 1,200', date: '2026-07-28', reason: 'Emergency Server Maintenance Taxi Fare' },
    { id: 'REQ-2026-88', employee: 'Nadia Islam (UI Designer)', category: 'Software Subscription', amount: '৳ 3,500', date: '2026-07-29', reason: 'Figma Annual Team Seat License' },
  ];

  return (
    <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-4 animate-in fade-in duration-200 font-sans">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-bold text-slate-800 flex items-center gap-1.5">
          <ShieldCheck size={16} className="text-[#008060]" />
          Team Approvals List
        </span>
        <span className="text-[11.5px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
          2 Requests Pending Review
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
              <th className="py-1.5 px-2.5 border-r border-slate-100">Req / Claim ID</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Employee</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Category</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Amount</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Purpose / Reason</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Date</th>
              <th className="py-1.5 px-2.5 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
            {mockPending.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.employee}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.category}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.amount}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.reason}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.date}</td>
                <td className="py-1.5 px-2.5 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <button className="p-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-md transition-colors" title="Approve">
                      <Check size={14} strokeWidth={2.5} />
                    </button>
                    <button className="p-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-md transition-colors" title="Reject">
                      <X size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
