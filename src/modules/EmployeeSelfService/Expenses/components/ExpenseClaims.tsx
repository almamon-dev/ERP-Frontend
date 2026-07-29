import React, { useState } from 'react';
import Button from '@/components/ui/button';

interface ExpenseClaimsProps {
  claims: any[];
  onOpenCreateModal: () => void;
}

export default function ExpenseClaims({ claims, onOpenCreateModal }: ExpenseClaimsProps) {
  const [filter, setFilter] = useState<'My Claims List' | 'Claim Status' | 'Reimbursement Status' | 'Advance Adjustment'>('My Claims List');

  // Mock data for Reimbursement & Advance Adjustment views
  const reimbursementData = [
    { id: 'CLM-2026-101', title: 'Uber Taxi Fare to Client Office', amount: '৳ 1,850', channel: 'Bank Transfer (City Bank)', disburseDate: '2026-07-22', status: 'Disbursed' },
    { id: 'CLM-2026-102', title: 'Team Lunch with Foreign Delegates', amount: '৳ 4,500', channel: 'Accounts Cash Voucher', disburseDate: 'Pending', status: 'Processing' },
  ];

  const advanceAdjustmentData = [
    { id: 'ADV-ADJ-01', purpose: 'Khulna Branch Audit Travel', advanceAmount: '৳ 20,000', claimAmount: '৳ 18,200', balance: '+ ৳ 1,800 (Refund to Co.)', status: 'Adjusted' },
    { id: 'ADV-ADJ-02', purpose: 'Q2 Tech Conference Travel', advanceAmount: '৳ 10,000', claimAmount: '৳ 11,500', balance: '- ৳ 1,500 (Receivable)', status: 'Pending Review' },
  ];

  return (
    <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-4 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-md overflow-x-auto">
          {(['My Claims List', 'Claim Status', 'Reimbursement Status', 'Advance Adjustment'] as const).map(tab => (
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
        <Button 
          onClick={onOpenCreateModal}
          className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-3.5 font-medium rounded-xs cursor-pointer shrink-0"
        >
          {filter === 'Advance Adjustment' ? '+ Adjust Advance' : filter === 'Reimbursement Status' ? '+ Request Payout' : '+ Create Claim'}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
          {filter === 'My Claims List' && (
            <>
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Claim Ref</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Title / Purpose</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Category</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Voucher No</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Amount</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Receipt</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Claim Date</th>
                  <th className="py-1.5 px-2.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                {claims.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.title}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.category}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.voucherNo}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.amount}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                      <span className="text-[#008060] underline font-medium cursor-pointer hover:text-emerald-800">Attached</span>
                    </td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.date}</td>
                    <td className="py-1.5 px-2.5 text-center">
                      <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.statusBadge}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

          {filter === 'Claim Status' && (
            <>
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Claim Ref</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Title</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Submitted On</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Reviewer / Approver</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Approval Level</th>
                  <th className="py-1.5 px-2.5 text-center">Workflow Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                {claims.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.title}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.date}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">Tariqul Islam (Dept Manager)</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">Level 1 Manager</td>
                    <td className="py-1.5 px-2.5 text-center">
                      <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.statusBadge}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

          {filter === 'Reimbursement Status' && (
            <>
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Claim Ref</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Title</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Amount</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Payment Channel</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Disbursement Date</th>
                  <th className="py-1.5 px-2.5 text-center">Payout Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                {reimbursementData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.title}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700 font-semibold text-emerald-700">{item.amount}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.channel}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.disburseDate}</td>
                    <td className="py-1.5 px-2.5 text-center">
                      <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.status === 'Disbursed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}

          {filter === 'Advance Adjustment' && (
            <>
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Adj ID</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Purpose / Trip</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Advance Issued</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Claim Amount</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Balance Status</th>
                  <th className="py-1.5 px-2.5 text-center">Adjustment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                {advanceAdjustmentData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.id}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.purpose}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.advanceAmount}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700">{item.claimAmount}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-medium text-slate-800">{item.balance}</td>
                    <td className="py-1.5 px-2.5 text-center">
                      <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.status === 'Adjusted' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
}
