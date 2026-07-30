import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, ChevronRight, Users, CheckCircle2, AlertCircle } from 'lucide-react';

const STATS = [
  { label: 'Team Members', value: '5', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'On Target', value: '3', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Below Target', value: '1', icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Avg Achievement', value: '82%', icon: Target, color: 'text-[#008060]', bg: 'bg-emerald-50' },
];

const MEMBERS = [
  { name: 'Md. Tanvir Hossain', role: 'Frontend Dev', target: '$ 3,300', achieved: '$ 2,900', pct: 88, status: 'On Track' },
  { name: 'Farhana Yasmin', role: 'UI/UX Designer', target: '$ 2,500', achieved: '$ 1,800', pct: 72, status: 'Below' },
  { name: 'Kazi Rakib', role: 'QA Engineer', target: '$ 2,000', achieved: '$ 2,100', pct: 105, status: 'Exceeded' },
];

export const TeamKpiOverview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xs overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target size={15} className="text-[#008060]" />
          <h3 className="font-semibold text-[14px] text-slate-800">Team KPI Overview</h3>
        </div>
        <button
          onClick={() => navigate('/employee-portal/kpi-bonus')}
          className="text-[12px] font-semibold text-[#008060] hover:underline flex items-center gap-1 cursor-pointer"
        >
          View Details <ChevronRight size={13} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-y divide-slate-100">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="p-3.5 flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-[3px] ${stat.bg} flex items-center justify-center shrink-0`}>
                <Icon size={15} className={stat.color} />
              </div>
              <div>
                <div className="text-[18px] font-extrabold text-slate-900 leading-none">{stat.value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-slate-100">
        {MEMBERS.map((m, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
            <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[11px] shrink-0">
              {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[13px] font-semibold text-slate-800">{m.name}</span>
                <span className={`text-[10.5px] font-bold px-1.5 py-0.5 rounded ${m.status === 'Exceeded' ? 'bg-blue-50 text-blue-700' :
                  m.status === 'On Track' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                  }`}>{m.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${m.pct >= 100 ? 'bg-blue-500' : m.pct >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${Math.min(m.pct, 100)}%` }}
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-600 shrink-0">{m.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
