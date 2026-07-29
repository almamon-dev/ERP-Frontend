import React from 'react';
import { Wallet, Receipt, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

interface ExpenseDashboardProps {
  claims: any[];
  onViewAllClaims: () => void;
}

export default function ExpenseDashboard({ claims, onViewAllClaims }: ExpenseDashboardProps) {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* KPI SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="bg-white p-3.5 rounded-md border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-semibold text-slate-500">Total Expenses</span>
            <div className="p-1.5 rounded-md bg-emerald-50 text-[#008060]">
              <Receipt size={15} />
            </div>
          </div>
          <h3 className="text-[18px] font-semibold text-slate-800 mt-2">৳ 8,550</h3>
          <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <TrendingUp size={12} className="text-emerald-600" />
            <span>3 claims total</span>
          </p>
        </div>

        <div className="bg-white p-3.5 rounded-md border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-slate-500">Pending Requests</span>
            <div className="p-1.5 rounded-md bg-amber-50 text-amber-600">
              <Clock size={15} />
            </div>
          </div>
          <h3 className="text-[18px] font-semibold text-slate-800 mt-2">৳ 6,700</h3>
          <p className="text-[11px] text-amber-600 font-normal mt-1">Awaiting Review</p>
        </div>

        <div className="bg-white p-3.5 rounded-md border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-slate-500">Approved</span>
            <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={15} />
            </div>
          </div>
          <h3 className="text-[18px] font-semibold text-slate-800 mt-2">৳ 1,850</h3>
          <p className="text-[11px] text-emerald-600 font-normal mt-1">Disbursed to Bank</p>
        </div>

        <div className="bg-white p-3.5 rounded-md border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-slate-500">Rejected</span>
            <div className="p-1.5 rounded-md bg-red-50 text-red-600">
              <Clock size={15} />
            </div>
          </div>
          <h3 className="text-[18px] font-semibold text-slate-800 mt-2">৳ 0</h3>
          <p className="text-[11px] text-slate-400 font-normal mt-1">0 claims rejected</p>
        </div>

        <div className="bg-white p-3.5 rounded-md border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-slate-500">Active Advance</span>
            <div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
              <Wallet size={15} />
            </div>
          </div>
          <h3 className="text-[18px] font-semibold text-slate-800 mt-2">৳ 20,000</h3>
          <p className="text-[11px] text-slate-500 mt-1 truncate">Khulna Branch Audit</p>
        </div>
      </div>

      {/* RECENT REQUISITIONS & CLAIMS TABLE */}
      <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-4">
        <h3 className="text-[13.5px] font-semibold text-slate-800 mb-3 flex items-center justify-between">
          <span>Recent Expense Claims</span>
          <button onClick={onViewAllClaims} className="text-[#008060] text-[12px] font-medium hover:underline cursor-pointer">
            View All Claims →
          </button>
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="py-1.5 px-2.5 border-r border-slate-100">Claim ID</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Expense Title</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Category</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Amount</th>
                <th className="py-1.5 px-2.5 border-r border-slate-100">Date</th>
                <th className="py-1.5 px-2.5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
              {claims.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.title}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.category}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.amount}</td>
                  <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.date}</td>
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
    </div>
  );
}
