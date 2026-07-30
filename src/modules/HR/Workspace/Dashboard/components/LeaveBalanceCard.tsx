import React from 'react';
import { useNavigate } from 'react-router-dom';

const LEAVE_BALANCES = [
  { type: 'Casual Leave [CL]', taken: 1, balance: 9, status: 'Active' },
  { type: 'Sick Leave [SL]', taken: 1, balance: 13, status: 'Active' },
  { type: 'Earn Leave [EL]', taken: 0, balance: 29, status: 'Active' },
  { type: 'Leave Without Pay [LWP]', taken: 0, balance: 365, status: 'Active' },
];

export const LeaveBalanceCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 sm:p-3.5 rounded-[3px] border border-slate-200 shadow-2xs space-y-2.5">
      <div className="flex items-center justify-between gap-2 pb-0.5">
        <h3 className="font-semibold text-[15px] leading-[20px] text-[#475467] whitespace-nowrap">Leave Balance</h3>
        <button
          onClick={() => navigate('/employee-portal/leave-movement')}
          className="font-normal text-[12px] leading-[18px] text-[#667085] hover:text-[#344054] underline cursor-pointer whitespace-nowrap"
        >
          Show All(Active/Inactive)
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-normal text-[12.5px] sm:text-[13px] leading-[18px] border-collapse">
          <thead>
            <tr className="text-[#667085] font-normal border-b border-slate-100">
              <th className="pb-1.5 font-normal whitespace-nowrap text-left">Type</th>
              <th className="pb-1.5 font-normal text-right whitespace-nowrap px-2">Taken</th>
              <th className="pb-1.5 font-normal text-right whitespace-nowrap px-2">Balance</th>
              <th className="pb-1.5 font-normal text-right whitespace-nowrap pl-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {LEAVE_BALANCES.map((item) => (
              <tr key={item.type}>
                <td className="py-1.5 text-[#344054] font-normal whitespace-nowrap">{item.type}</td>
                <td className="py-1.5 text-right text-[#64748b] font-normal px-2">{item.taken}</td>
                <td className="py-1.5 text-right text-[#344054] font-normal px-2">{item.balance}</td>
                <td className="py-1.5 text-right font-normal text-[#344054] whitespace-nowrap pl-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
