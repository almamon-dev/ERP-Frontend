import React from 'react';
import {
  Users, ShieldCheck, Key, ShieldAlert, Activity, UserCheck, AlertTriangle,
  Lock, ArrowRight, Layers, CheckCircle2, Clock, Globe, Laptop, RefreshCcw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AccessDashboard() {
  const navigate = useNavigate();

  const metrics = [
    { label: 'Active Users', value: '248', status: '8 online now', icon: Users, color: 'text-[#008060]', bg: 'bg-emerald-50 border-emerald-200' },
    { label: 'Online Users', value: '18', status: 'Live Session', icon: UserCheck, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
    { label: 'Failed Login Attempts', value: '3', status: 'Last 24 hours', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
    { label: 'Security Alerts', value: '1', status: 'Requires Review', icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' },
    { label: 'Configured Roles', value: '32', status: 'Across 8 Categories', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
    { label: 'User Groups', value: '9', status: 'Active Groups', icon: Layers, color: 'text-teal-600', bg: 'bg-teal-50 border-teal-200' },
  ];

  const securityAlerts = [
    { id: 1, type: 'Failed Login', message: '3 consecutive failed logins for user john.doe@company.com', time: '10 mins ago', severity: 'High', ip: '103.205.12.45' },
    { id: 2, type: 'Concurrent Session', message: 'User super.admin logged in from 2 distinct IP addresses', time: '28 mins ago', severity: 'Medium', ip: '192.168.1.100' },
    { id: 3, type: 'Password Changed', message: 'Password reset completed for account EMP-10482', time: '1 hr ago', severity: 'Info', ip: '103.205.14.88' },
  ];

  const recentActivities = [
    { user: 'Al Mamon', role: 'Super Admin', action: 'Assigned Role [HR Manager] to User #1024', time: '5 mins ago', status: 'Success' },
    { user: 'Farhana Yasmin', role: 'System Administrator', action: 'Updated Permission Matrix for [Sales & CRM]', time: '14 mins ago', status: 'Success' },
    { user: 'Kazi Rakib', role: 'IT Manager', action: 'Created User Group [ERP Implementation Task Force]', time: '42 mins ago', status: 'Success' },
    { user: 'Unknown IP', role: 'Guest', action: 'Failed authentication attempt via API endpoint', time: '1 hr ago', status: 'Failed' },
  ];

  return (
    <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20 font-['Poppins',sans-serif] space-y-5">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <ShieldCheck className="text-[#008060]" size={24} />
            Access Management & Governance Overview
          </h1>
          <p className="text-[12.5px] font-medium text-slate-500 mt-0.5">
            Monitor real-time system access, active sessions, RBAC permissions, and security alerts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/administration/access/users')}
            className="px-3.5 py-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold rounded shadow-2xs transition-colors cursor-pointer"
          >
            Manage Users
          </button>
          <button
            onClick={() => navigate('/administration/access/roles')}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-[12px] font-bold rounded shadow-2xs transition-colors cursor-pointer"
          >
            Manage Roles
          </button>
        </div>
      </div>

      {/* METRIC OVERVIEW CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className={`p-3.5 bg-white rounded-[3px] border shadow-2xs flex flex-col justify-between space-y-2 hover:border-slate-300 transition-all`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{m.label}</span>
                <div className={`w-8 h-8 rounded ${m.bg} flex items-center justify-center`}>
                  <Icon size={16} className={m.color} />
                </div>
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-slate-900 font-mono leading-none">{m.value}</div>
                <div className="text-[10.5px] font-semibold text-slate-400 mt-1">{m.status}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* RBAC FLOW VISUAL PIPELINE */}
      <div className="bg-white p-4 rounded-[3px] border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h2 className="text-[14px] font-bold text-slate-800 flex items-center gap-2">
            <Layers size={16} className="text-[#008060]" />
            Enterprise Role-Based Access Control (RBAC) Flow
          </h2>
          <span className="text-[11px] font-bold text-[#008060] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono">
            6-Step Authorization Engine
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 pt-1 text-center font-semibold text-[11.5px]">
          {[
            { step: '1. User Account', desc: 'Authenticated Identity', color: 'bg-blue-50 text-blue-800 border-blue-200' },
            { step: '2. Assign Role(s)', desc: '32 Hierarchical Roles', color: 'bg-purple-50 text-purple-800 border-purple-200' },
            { step: '3. User Group', desc: 'Optional Workgroup', color: 'bg-teal-50 text-teal-800 border-teal-200' },
            { step: '4. Load Matrix', desc: 'Compile Permissions', color: 'bg-amber-50 text-amber-800 border-amber-200' },
            { step: '5. Dynamic Sidebar', desc: 'Generate Navigation', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
            { step: '6. Feature Access', desc: 'Module Authorization', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
            { step: '7. Action Auth', desc: '23 Verb Checks', color: 'bg-slate-800 text-white border-slate-900' },
          ].map((item, i) => (
            <div key={i} className={`p-2.5 rounded border ${item.color} flex flex-col justify-between space-y-1`}>
              <span className="font-extrabold text-[12px]">{item.step}</span>
              <span className="text-[10px] opacity-80">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TWO COLUMN GRID: SECURITY ALERTS & RECENT ACCESS ACTIVITIES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT COLUMN: SECURITY ALERTS (5 COLS) */}
        <div className="lg:col-span-5 bg-white p-4 rounded-[3px] border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <h2 className="text-[14px] font-bold text-slate-800 flex items-center gap-2">
                <ShieldAlert size={16} className="text-rose-600" />
                Security & Threat Alerts
              </h2>
              <span className="text-[10.5px] font-extrabold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                {securityAlerts.length} Active
              </span>
            </div>

            <div className="space-y-2.5 pt-2">
              {securityAlerts.map(alert => (
                <div key={alert.id} className="p-3 bg-slate-50 rounded border border-slate-200/80 space-y-1 hover:border-slate-300 transition-all">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                      alert.severity === 'High' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                      alert.severity === 'Medium' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                      'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {alert.severity} Priority
                    </span>
                    <span className="text-[10.5px] text-slate-400 font-mono">{alert.time}</span>
                  </div>
                  <h4 className="text-[12.5px] font-bold text-slate-900 leading-snug">{alert.type}</h4>
                  <p className="text-[11.5px] text-slate-600 leading-normal">{alert.message}</p>
                  <div className="text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-200/60">
                    Source IP: {alert.ip}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/administration/security/audit-logs')}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[12px] font-bold rounded transition-colors text-center cursor-pointer mt-2"
          >
            View Full Security Audit Log
          </button>
        </div>

        {/* RIGHT COLUMN: RECENT ACTIVITIES LOG STREAM (7 COLS) */}
        <div className="lg:col-span-7 bg-white p-4 rounded-[3px] border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <h2 className="text-[14px] font-bold text-slate-800 flex items-center gap-2">
                <Activity size={16} className="text-[#008060]" />
                Recent User Access & Permission Logs
              </h2>
              <button
                onClick={() => navigate('/administration/security/activity-logs')}
                className="text-[11.5px] font-bold text-[#008060] hover:underline cursor-pointer"
              >
                View Activity Logs
              </button>
            </div>

            <div className="overflow-x-auto pt-1">
              <table className="w-full text-left text-[12px] border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="py-2 px-3 border-r border-slate-200">User / Account</th>
                    <th className="py-2 px-3 border-r border-slate-200">Action Performed</th>
                    <th className="py-2 px-3 border-r border-slate-200 text-center">Time</th>
                    <th className="py-2 px-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {recentActivities.map((act, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-3 border-r border-slate-100">
                        <div className="font-bold text-slate-900">{act.user}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{act.role}</div>
                      </td>
                      <td className="py-2.5 px-3 border-r border-slate-100 text-slate-800 font-semibold">
                        {act.action}
                      </td>
                      <td className="py-2.5 px-3 border-r border-slate-100 text-center text-slate-500 font-mono text-[11px]">
                        {act.time}
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className={`px-2 py-0.5 text-[10.5px] font-bold rounded-full ${
                          act.status === 'Success' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                        }`}>
                          {act.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded border border-slate-200 text-[11.5px] text-slate-600 flex items-center justify-between">
            <span>Access Audit Policy enforced across 100% of API endpoints and UI routes.</span>
            <span className="font-mono font-bold text-[#008060]">SSL / TLS Secured</span>
          </div>
        </div>
      </div>
    </div>
  );
}
