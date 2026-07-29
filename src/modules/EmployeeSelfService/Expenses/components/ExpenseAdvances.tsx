import React from 'react';

interface ExpenseAdvancesProps {
  advances: any[];
}

export default function ExpenseAdvances({ advances }: ExpenseAdvancesProps) {
  return (
    <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-4 animate-in fade-in duration-200 font-sans">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
              <th className="py-1.5 px-2.5 border-r border-slate-100">Advance ID</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Advance Purpose</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Requested Amount</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Approved Amount</th>
              <th className="py-1.5 px-2.5 border-r border-slate-100">Date</th>
              <th className="py-1.5 px-2.5 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
            {advances.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.purpose}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.requestedAmount}</td>
                <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.approvedAmount}</td>
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
