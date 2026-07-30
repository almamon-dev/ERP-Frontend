import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ChevronRight, CheckCheck, XCircle } from 'lucide-react';

const PENDING_REQUESTS = [
  { id: 1, name: 'Md. Tanvir Hossain', empId: '15208', type: 'Casual Leave [CL]', dates: '29 Jul - 30 Jul, 2026', days: '2 Days' },
  { id: 2, name: 'Farhana Yasmin', empId: '15214', type: 'Movement (Official)', dates: '28 Jul, 2026', days: '1 Day' },
  { id: 3, name: 'Kazi Rakib', empId: '15230', type: 'Sick Leave [SL]', dates: '30 Jul, 2026', days: '1 Day' },
];

export const PendingApprovalsTable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xs overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users size={15} className="text-[#008060]" />
          <h3 className="font-semibold text-[14px] text-slate-800">Team Pending Approvals</h3>
          <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold flex items-center justify-center">
            {PENDING_REQUESTS.length}
          </span>
        </div>
        <button
          onClick={() => navigate('/employee-portal/supervisor')}
          className="text-[12px] font-semibold text-[#008060] hover:underline flex items-center gap-1 cursor-pointer"
        >
          View All <ChevronRight size={13} />
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {PENDING_REQUESTS.map((req) => (
          <div key={req.id} className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[11px] shrink-0">
                {req.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-semibold text-slate-800 truncate">{req.name}</span>
                  <span className="text-[10.5px] text-slate-400 font-mono shrink-0">#{req.empId}</span>
                </div>
                <span className="text-[11.5px] text-slate-500">{req.type} • {req.dates} ({req.days})</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button className="h-7 px-2.5 text-[11px] font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded flex items-center gap-1 cursor-pointer transition-colors">
                <CheckCheck size={12} /> Approve
              </button>
              <button className="h-7 px-2.5 text-[11px] font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 rounded flex items-center gap-1 cursor-pointer transition-colors">
                <XCircle size={12} /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
