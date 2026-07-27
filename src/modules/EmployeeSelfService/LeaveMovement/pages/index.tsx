import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  FileText, Upload, Info, Eye, Edit2, Trash2, CheckCircle2, Clock, X, Search, Calendar, Filter, User, Building, ShieldCheck, ArrowRightLeft, Footprints
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import DatePicker from '@/components/ui/date-picker';
import Modal from '@/components/modals/modal';

export default function LeaveAndMovementPage() {
  // Main Navigation Tab from URL query parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const mainTab = tabParam === 'movement' ? 'movement' : 'leave';

  const setMainTab = (tab: 'leave' | 'movement') => {
    setSearchParams({ tab });
  };

  // Modal States
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const [selectedViewLeave, setSelectedViewLeave] = useState<any | null>(null);

  // ---------------- LEAVE FORM & DATA ----------------
  const [leaveType, setLeaveType] = useState('Casual Leave [CL]');
  const [consumeType, setConsumeType] = useState('Full Day');
  const [fromDate, setFromDate] = useState('2026-07-28');
  const [toDate, setToDate] = useState('2026-07-29');
  const [reliever, setReliever] = useState('');
  const [location, setLocation] = useState('Mohakhali');
  const [reason, setReason] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);

  const [filterFromDate, setFilterFromDate] = useState('2026-01-01');
  const [filterToDate, setFilterToDate] = useState('2026-12-31');
  const [filterLeaveType, setFilterLeaveType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const [balances] = useState([
    { type: 'Casual Leave [CL]', taken: 1, balance: 9, total: 10, status: 'Active' },
    { type: 'Sick Leave [SL]', taken: 1, balance: 13, total: 14, status: 'Active' },
    { type: 'Earn Leave [EL]', taken: 0, balance: 29, total: 29, status: 'Active' },
    { type: 'Leave Without Pay [LWP]', taken: 0, balance: 365, total: 365, status: 'Active' },
  ]);

  const [balanceHistoryLogs] = useState([
    { id: 1, date: '2026-01-01', type: 'Casual Leave [CL]', action: 'Annual Credit', days: '+10 Days', balance: '10 Days', note: 'Annual leave allocation 2026' },
    { id: 2, date: '2026-01-01', type: 'Sick Leave [SL]', action: 'Annual Credit', days: '+14 Days', balance: '14 Days', note: 'Annual sick leave allocation 2026' },
    { id: 3, date: '2026-01-01', type: 'Earn Leave [EL]', action: 'Carry Forward', days: '+29 Days', balance: '29 Days', note: 'B/F from year 2025' },
    { id: 4, date: '2026-05-20', type: 'Sick Leave [SL]', action: 'Leave Taken', days: '-1 Day', balance: '13 Days', note: 'Approved Sick Leave (App #2)' },
    { id: 5, date: '2026-06-15', type: 'Casual Leave [CL]', action: 'Leave Taken', days: '-1 Day', balance: '9 Days', note: 'Applied Casual Leave (App #1)' },
  ]);

  const [leaveHistory, setLeaveHistory] = useState([
    {
      id: 1,
      leaveType: 'Casual Leave [CL]',
      duration: '01,Jun - 01,Jun 26',
      totalDays: 1,
      location: 'Mohakhali',
      reliever: 'Md. Kamrul',
      reason: 'Personal',
      attachment: null,
      appDate: '15,Jun 26 10:21:17 AM',
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    },
    {
      id: 2,
      leaveType: 'Sick Leave [SL]',
      duration: '20,May - 20,May 26',
      totalDays: 1,
      location: 'Mohakhali',
      reliever: 'Md. Kamrul',
      reason: 'I was unable to attend the office due to a severe headache and health discomfort.',
      attachment: 'medical_report.pdf',
      appDate: '26,May 26 09:52:02 AM',
      status: 'Approved',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    },
    {
      id: 3,
      leaveType: 'Casual Leave [CL]',
      duration: '02,Jan - 02,Jan 26',
      totalDays: 1,
      location: 'Mohakhali',
      reliever: 'Tanvir Ahmed',
      reason: 'Personal family emergency',
      attachment: null,
      appDate: '24,Jan 26 01:59:27 PM',
      status: 'Approved',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    }
  ]);

  // ---------------- MOVEMENT FORM & DATA ----------------
  const [movementType, setMovementType] = useState('Half Day Movement');
  const [mFromDate, setMFromDate] = useState('2026-07-27');
  const [mToDate, setMToDate] = useState('2026-07-27');
  const [mStartTime, setMStartTime] = useState('10:18');
  const [mEndTime, setMEndTime] = useState('11:18');
  const [mLocation, setMLocation] = useState('');
  const [mReason, setMReason] = useState('');
  const [mAttachment, setMAttachment] = useState<File | null>(null);

  const [mFilterFromDate, setMFilterFromDate] = useState('2026-07-01');
  const [mFilterToDate, setMFilterToDate] = useState('2026-07-31');
  const [mSearchQuery, setMSearchQuery] = useState('');

  const [movementList, setMovementList] = useState([
    {
      id: 1,
      movementType: 'Half Day Movement',
      duration: '27,Jul 2026',
      times: '10:18 AM – 11:18 AM',
      location: 'Mohakhali Client Site',
      reason: 'Client meeting at Banani office',
      attachment: null,
      appDate: '27,Jul 26 09:30:00 AM',
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    },
    {
      id: 2,
      movementType: 'Official Movement',
      duration: '15,Jul 2026',
      times: '02:00 PM – 05:00 PM',
      location: 'Gulshan Branch',
      reason: 'Server maintenance and hardware inspection',
      attachment: 'site_visit_log.pdf',
      appDate: '14,Jul 26 04:15:20 PM',
      status: 'Approved',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    }
  ]);

  // Calculate Days Difference for Leave
  const calculateDays = () => {
    if (!fromDate || !toDate) return 0;
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return isNaN(diffDays) ? 0 : diffDays;
  };

  const daysCount = calculateDays();

  const handleApplyLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (daysCount <= 0) return;

    const newLeave = {
      id: Date.now(),
      leaveType: leaveType,
      duration: `${fromDate} - ${toDate}`,
      totalDays: daysCount,
      location: location || 'N/A',
      reliever: reliever || 'N/A',
      reason: reason || 'Personal Leave',
      attachment: attachment ? attachment.name : null,
      appDate: new Date().toLocaleString(),
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    };

    setLeaveHistory([newLeave, ...leaveHistory]);
    setReason('');
    alert('Leave Application Submitted Successfully!');
  };

  const handleApplyMovement = (e: React.FormEvent) => {
    e.preventDefault();
    const newMovement = {
      id: Date.now(),
      movementType: movementType,
      duration: `${mFromDate}`,
      times: `${mStartTime} – ${mEndTime}`,
      location: mLocation || 'N/A',
      reason: mReason || 'Official Duty',
      attachment: mAttachment ? mAttachment.name : null,
      appDate: new Date().toLocaleString(),
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    };

    setMovementList([newMovement, ...movementList]);
    setMLocation('');
    setMReason('');
    alert('Movement Application Submitted Successfully!');
  };

  const handleDeleteRecord = (id: number) => {
    if (confirm('Are you sure you want to cancel/delete this leave application?')) {
      setLeaveHistory(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleDeleteMovementRecord = (id: number) => {
    if (confirm('Are you sure you want to cancel/delete this movement application?')) {
      setMovementList(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">
      
      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight">
            {mainTab === 'leave' ? 'Leave Application' : 'Movement Application'}
          </h1>
          <p className="text-[13px] font-medium text-slate-500 mt-0.5">
            {mainTab === 'leave' 
              ? 'Apply for casual, sick, or earn leaves and track leave balance allocations.' 
              : 'Submit official or personal movement requisitions and track approval status.'}
          </p>
        </div>

        {mainTab === 'leave' && (
          <Button 
            onClick={() => setIsBalanceModalOpen(true)}
            className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-extrabold h-8 px-3.5 tracking-wide uppercase cursor-pointer shrink-0"
          >
            Balance History
          </Button>
        )}
      </div>

      {/* ================= TAB 1: LEAVE APPLICATION ================= */}
      {mainTab === 'leave' && (
        <>
          {/* TOP SECTION: APPLY LEAVE FORM & LEAVE BALANCE TABLE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* LEFT CARD: APPLY LEAVE FORM */}
            <div className="lg:col-span-7 bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
              <form onSubmit={handleApplyLeave} className="space-y-3">
                
                {/* ROW 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                      <span className="text-rose-500 mr-0.5">*</span> Leave Type
                    </FormLabel>
                    <Select 
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                      options={[
                        { id: 'Casual Leave [CL]', name: 'Casual Leave [CL]' },
                        { id: 'Sick Leave [SL]', name: 'Sick Leave [SL]' },
                        { id: 'Earn Leave [EL]', name: 'Earn Leave [EL]' },
                        { id: 'Leave Without Pay [LWP]', name: 'Leave Without Pay [LWP]' },
                      ]}
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                      <span className="text-rose-500 mr-0.5">*</span> Leave Consume Type
                    </FormLabel>
                    <Select 
                      value={consumeType}
                      onChange={(e) => setConsumeType(e.target.value)}
                      options={[
                        { id: 'Full Day', name: 'Full Day' },
                        { id: 'Half Day (First Half)', name: 'Half Day (First Half)' },
                        { id: 'Half Day (Second Half)', name: 'Half Day (Second Half)' },
                      ]}
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                      <span className="text-rose-500 mr-0.5">*</span> From Date
                    </FormLabel>
                    <DatePicker 
                      value={fromDate}
                      onChange={(val) => setFromDate(val)}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="flex flex-col gap-1 w-full">
                    <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                      <span className="text-rose-500 mr-0.5">*</span> To Date
                    </FormLabel>
                    <DatePicker 
                      value={toDate}
                      onChange={(val) => setToDate(val)}
                      className="w-full"
                    />
                  </div>

                  <Input 
                    label="Leave Reliever"
                    placeholder="Search Min 2 char"
                    value={reliever}
                    onChange={(e) => setReliever(e.target.value)}
                    className="h-[34px] text-[12px]"
                  />

                  <Input 
                    label="* Location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-[34px] text-[12px]"
                  />
                </div>

                {/* ROW 3: REASON */}
                <Input 
                  label="* Reason"
                  placeholder="Reason for leave"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="h-[34px] text-[12px]"
                />

                {/* ROW 4: UPLOAD ATTACHMENT */}
                <div className="flex items-center gap-2 pt-0.5">
                  <label className="flex items-center gap-1 px-2.5 py-1 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded text-[11.5px] font-bold cursor-pointer transition-colors shadow-2xs">
                    <Upload size={13} className="stroke-[2.5]" />
                    <span>Upload Attachment</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={(e) => setAttachment(e.target.files ? e.target.files[0] : null)} 
                    />
                  </label>
                  <Info size={14} className="text-rose-500 cursor-pointer" title="Only PDF, PNG, JPG files up to 2MB allowed" />
                  {attachment && <span className="text-[11px] text-slate-600 font-semibold truncate max-w-[180px]">{attachment.name}</span>}
                </div>

                {/* ROW 5: APPLY BUTTON */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-extrabold px-3.5 py-1.5 rounded transition-colors uppercase tracking-wider shadow-2xs h-8"
                  >
                    APPLY {daysCount} DAY LEAVE
                  </Button>
                </div>

              </form>
            </div>

            {/* RIGHT CARD: LEAVE BALANCE TABLE */}
            <div className="lg:col-span-5 bg-white p-4 rounded-lg border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[12px] border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-800 font-bold">
                        <th className="py-2 px-1.5">Leave Type</th>
                        <th className="py-2 px-1.5 text-center">Taken</th>
                        <th className="py-2 px-1.5 text-center">Balance</th>
                        <th className="py-2 px-1.5 text-center">Total</th>
                        <th className="py-2 px-1.5 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {balances.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-2 px-1.5 font-bold text-slate-800">{row.type}</td>
                          <td className="py-2 px-1.5 text-center text-slate-600">{row.taken}</td>
                          <td className="py-2 px-1.5 text-center font-bold text-slate-900">{row.balance}</td>
                          <td className="py-2 px-1.5 text-center text-slate-500">{row.total}</td>
                          <td className="py-2 px-1.5 text-center">
                            <span className="px-1.5 py-0.2 text-[10px] font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-200 rounded">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2 text-right border-t border-slate-100 mt-2">
                <button 
                  onClick={() => setIsBalanceModalOpen(true)}
                  className="text-[11px] font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  Show All(Active/Inactive)
                </button>
              </div>
            </div>

          </div>

          {/* BOTTOM SECTION: LEAVE HISTORY CARD */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
            
            <h3 className="text-[14.5px] font-bold text-slate-900">Leave History</h3>

            {/* FILTER BAR */}
            <div className="flex flex-wrap items-end gap-3 pb-3 border-b border-slate-100">
              <div className="flex flex-col gap-1">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">
                  <span className="text-rose-500 mr-0.5">*</span> From Date
                </FormLabel>
                <DatePicker 
                  value={filterFromDate}
                  onChange={(val) => setFilterFromDate(val)}
                  size="sm"
                  className="w-36"
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">
                  <span className="text-rose-500 mr-0.5">*</span> To Date
                </FormLabel>
                <DatePicker 
                  value={filterToDate}
                  onChange={(val) => setFilterToDate(val)}
                  size="sm"
                  className="w-36"
                />
              </div>

              <div className="flex flex-col gap-1 w-40">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">Leave Type</FormLabel>
                <Select
                  value={filterLeaveType}
                  onChange={(e) => setFilterLeaveType(e.target.value)}
                  options={[
                    { id: 'All', name: 'Leave Type' },
                    { id: 'Casual Leave [CL]', name: 'Casual Leave [CL]' },
                    { id: 'Sick Leave [SL]', name: 'Sick Leave [SL]' },
                    { id: 'Earn Leave [EL]', name: 'Earn Leave [EL]' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-1 w-40">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">Status</FormLabel>
                <Select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  options={[
                    { id: 'All', name: 'status' },
                    { id: 'Pending', name: 'Pending' },
                    { id: 'Approved', name: 'Approved' },
                    { id: 'Rejected', name: 'Rejected' },
                  ]}
                />
              </div>

              <Button className="h-8 bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-extrabold px-3.5 rounded transition-colors uppercase tracking-wider">
                VIEW
              </Button>
            </div>

            {/* DATA TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="py-2 px-2.5 border-r border-slate-200 text-center w-10">SL</th>
                    <th className="py-2 px-2.5 border-r border-slate-200">Leave Type</th>
                    <th className="py-2 px-2.5 border-r border-slate-200">Leave Duration</th>
                    <th className="py-2 px-2.5 border-r border-slate-200 text-center">Total Leave Days</th>
                    <th className="py-2 px-2.5 border-r border-slate-200">Location</th>
                    <th className="py-2 px-2.5 border-r border-slate-200">Leave Reliever</th>
                    <th className="py-2 px-2.5 border-r border-slate-200 max-w-xs">Reason</th>
                    <th className="py-2 px-2.5 border-r border-slate-200 text-center">Attachment</th>
                    <th className="py-2 px-2.5 border-r border-slate-200">Application Date</th>
                    <th className="py-2 px-2.5 border-r border-slate-200 text-center">Status</th>
                    <th className="py-2 px-2.5 text-center">Leave Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {leaveHistory.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 font-bold text-slate-900">{item.leaveType}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-slate-600 whitespace-nowrap">{item.duration}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-center font-bold text-slate-900">{item.totalDays}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-slate-600">{item.location}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-slate-500">{item.reliever || '—'}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-slate-600 text-[11.5px] leading-snug">{item.reason}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                        {item.attachment ? (
                          <span className="text-emerald-600 underline font-bold cursor-pointer">File</span>
                        ) : '—'}
                      </td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-slate-500 whitespace-nowrap">{item.appDate}</td>
                      <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                        <span className={`px-2 py-0.2 text-[10.5px] font-extrabold rounded border ${item.statusBadge}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2 px-2.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button 
                            onClick={() => setSelectedViewLeave(item)}
                            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer" 
                            title="View Details"
                          >
                            <Eye size={13} />
                          </button>
                          {item.status === 'Pending' && (
                            <>
                              <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer" title="Edit">
                                <Edit2 size={13} />
                              </button>
                              <button 
                                onClick={() => handleDeleteRecord(item.id)} 
                                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer" 
                                title="Delete"
                              >
                                <Trash2 size={13} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </>
      )}

      {/* ================= TAB 2: MOVEMENT APPLICATION (MATCHING USER SCREENSHOT) ================= */}
      {mainTab === 'movement' && (
        <div className="space-y-4">
          
          {/* TOP CARD: APPLY MOVEMENT FORM */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <form onSubmit={handleApplyMovement} className="space-y-3.5">
              
              {/* ROW 1: Movement Type, From Date, To Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Movement Type
                  </FormLabel>
                  <Select 
                    value={movementType}
                    onChange={(e) => setMovementType(e.target.value)}
                    options={[
                      { id: 'Half Day Movement', name: 'Half Day Movement' },
                      { id: 'Official Movement', name: 'Official Movement' },
                      { id: 'Personal Movement', name: 'Personal Movement' },
                      { id: 'Late Entry Movement', name: 'Late Entry Movement' },
                      { id: 'Early Exit Movement', name: 'Early Exit Movement' },
                    ]}
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> From Date
                  </FormLabel>
                  <DatePicker 
                    value={mFromDate}
                    onChange={(val) => setMFromDate(val)}
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> To Date
                  </FormLabel>
                  <DatePicker 
                    value={mToDate}
                    onChange={(val) => setMToDate(val)}
                    className="w-full"
                  />
                </div>
              </div>

              {/* ROW 2: Start Time, End Time, Location, Reason */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <Input 
                    label="* Start Time"
                    type="time"
                    value={mStartTime}
                    onChange={(e) => setMStartTime(e.target.value)}
                    className="h-[36px] text-[12.5px]"
                  />
                  <Input 
                    label="* End Time"
                    type="time"
                    value={mEndTime}
                    onChange={(e) => setMEndTime(e.target.value)}
                    className="h-[36px] text-[12.5px]"
                  />
                </div>

                <Input 
                  label="* Location"
                  placeholder="Location"
                  value={mLocation}
                  onChange={(e) => setMLocation(e.target.value)}
                  className="h-[36px] text-[12.5px]"
                />

                <Input 
                  label="* Reason"
                  placeholder="Reason"
                  value={mReason}
                  onChange={(e) => setMReason(e.target.value)}
                  className="h-[36px] text-[12.5px]"
                />
              </div>

              {/* ROW 3: UPLOAD ATTACHMENT & APPLY BUTTON */}
              <div className="flex items-center gap-3 pt-1">
                <label className="flex items-center gap-1.5 px-3 py-1.5 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded text-[12px] font-bold cursor-pointer transition-colors shadow-2xs">
                  <Upload size={14} className="stroke-[2.5]" />
                  <span>Upload Attachment</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => setMAttachment(e.target.files ? e.target.files[0] : null)} 
                  />
                </label>

                <Info size={16} className="text-rose-500 cursor-pointer" title="Only PDF, PNG, JPG files up to 2MB allowed" />

                <Button
                  type="submit"
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-extrabold px-5 h-8.5 rounded transition-colors uppercase tracking-wider shadow-2xs"
                >
                  APPLY
                </Button>
              </div>

            </form>
          </div>

          {/* BOTTOM CARD: MOVEMENT LIST */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            
            {/* Header with Title & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-[15px] font-bold text-slate-900">Movement List</h3>
              
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search"
                  value={mSearchQuery}
                  onChange={(e) => setMSearchQuery(e.target.value)}
                  className="w-full h-8 px-3 pr-8 text-[12px] border border-slate-300 rounded outline-none focus:border-emerald-600 font-medium"
                />
                <Search size={14} className="absolute right-2.5 top-2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-end gap-3 pb-3 border-b border-slate-100">
              <div className="flex flex-col gap-1">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">From Date</FormLabel>
                <DatePicker 
                  value={mFilterFromDate}
                  onChange={(val) => setMFilterFromDate(val)}
                  size="sm"
                  className="w-44"
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">To Date</FormLabel>
                <DatePicker 
                  value={mFilterToDate}
                  onChange={(val) => setMFilterToDate(val)}
                  size="sm"
                  className="w-44"
                />
              </div>

              <Button className="h-8 bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-extrabold px-4 rounded transition-colors uppercase tracking-wider">
                VIEW
              </Button>
            </div>

            {/* Data Table */}
            {movementList.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                      <th className="py-2.5 px-3 border-r border-slate-200">Movement Type</th>
                      <th className="py-2.5 px-3 border-r border-slate-200">Duration</th>
                      <th className="py-2.5 px-3 border-r border-slate-200">Time Interval</th>
                      <th className="py-2.5 px-3 border-r border-slate-200">Location</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 max-w-xs">Reason</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-center">Attachment</th>
                      <th className="py-2.5 px-3 border-r border-slate-200">Application Date</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                      <th className="py-2.5 px-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                    {movementList.map((item, idx) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                        <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-900">{item.movementType}</td>
                        <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600 whitespace-nowrap">{item.duration}</td>
                        <td className="py-2.5 px-3 border-r border-slate-200 text-slate-700 font-semibold whitespace-nowrap">{item.times}</td>
                        <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600">{item.location}</td>
                        <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600 text-[11.5px] leading-snug">{item.reason}</td>
                        <td className="py-2.5 px-3 border-r border-slate-200 text-center">
                          {item.attachment ? (
                            <span className="text-emerald-600 underline font-bold cursor-pointer">File</span>
                          ) : '—'}
                        </td>
                        <td className="py-2.5 px-3 border-r border-slate-200 text-slate-500 whitespace-nowrap">{item.appDate}</td>
                        <td className="py-2.5 px-3 border-r border-slate-200 text-center">
                          <span className={`px-2 py-0.2 text-[10.5px] font-extrabold rounded border ${item.statusBadge}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button 
                              onClick={() => setSelectedViewLeave(item)}
                              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer" 
                              title="View Details"
                            >
                              <Eye size={13} />
                            </button>
                            {item.status === 'Pending' && (
                              <>
                                <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer" title="Edit">
                                  <Edit2 size={13} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteMovementRecord(item.id)} 
                                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer" 
                                  title="Delete"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-slate-400 space-y-2">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Footprints size={24} />
                </div>
                <h4 className="font-bold text-slate-800 text-[14px]">No Result Found</h4>
                <p className="text-[12px] text-slate-500 font-medium">No movement applications have been entered yet</p>
              </div>
            )}

          </div>

        </div>
      )}

      {/* LEAVE BALANCE & TRANSACTION HISTORY MODAL */}
      <Modal
        isOpen={isBalanceModalOpen}
        onClose={() => setIsBalanceModalOpen(false)}
        title="Leave Balance & Transaction History"
        description="Detailed log of credited, taken, and carry forwarded leave balances"
        size="2xl"
        className="max-w-[1200px]"
        footer={
          <Button 
            onClick={() => setIsBalanceModalOpen(false)} 
            className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-bold"
          >
            Close Window
          </Button>
        }
      >
        <div className="space-y-4 text-left">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-md">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Total Allocated</span>
              <p className="text-[16px] font-extrabold text-slate-900 mt-0.5">53 Days</p>
            </div>
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-md">
              <span className="text-[11px] font-bold text-amber-700 uppercase">Total Taken</span>
              <p className="text-[16px] font-extrabold text-amber-800 mt-0.5">2 Days</p>
            </div>
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-md">
              <span className="text-[11px] font-bold text-emerald-700 uppercase">Available Balance</span>
              <p className="text-[16px] font-extrabold text-emerald-800 mt-0.5">51 Days</p>
            </div>
          </div>

          {/* History Logs Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold">
                  <th className="py-2 px-2.5">Date</th>
                  <th className="py-2 px-2.5">Leave Type</th>
                  <th className="py-2 px-2.5">Transaction</th>
                  <th className="py-2 px-2.5 text-center">Days</th>
                  <th className="py-2 px-2.5 text-center">Balance</th>
                  <th className="py-2 px-2.5">Note / Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {balanceHistoryLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2 px-2.5 text-slate-500 font-semibold">{log.date}</td>
                    <td className="py-2 px-2.5 font-bold text-slate-900">{log.type}</td>
                    <td className="py-2 px-2.5 text-slate-700">{log.action}</td>
                    <td className={`py-2 px-2.5 text-center font-bold ${log.days.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {log.days}
                    </td>
                    <td className="py-2 px-2.5 text-center font-bold text-slate-800">{log.balance}</td>
                    <td className="py-2 px-2.5 text-slate-500 text-[11.5px]">{log.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </Modal>

      {/* VIEW LEAVE / MOVEMENT DETAILS & APPROVAL HISTORY MODAL */}
      {selectedViewLeave && (
        <Modal
          isOpen={!!selectedViewLeave}
          onClose={() => setSelectedViewLeave(null)}
          title="Application Details & Approval History"
          description={`Record #${selectedViewLeave.id}`}
          size="lg"
          footer={
            <Button 
              onClick={() => setSelectedViewLeave(null)} 
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-bold"
            >
              Close
            </Button>
          }
        >
          <div className="space-y-5 text-left">
            
            {/* EMPLOYEE INFO BANNER */}
            <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-extrabold flex items-center justify-center text-[13px]">
                  AM
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[13.5px]">Al Mamon</h4>
                  <p className="text-[11.5px] text-slate-500 font-medium">Jr. Laravel Developer • ID: 15202</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 text-[11px] font-extrabold rounded border ${selectedViewLeave.statusBadge}`}>
                {selectedViewLeave.status}
              </span>
            </div>

            {/* APPLICATION PARAMETERS GRID */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[12px] p-3.5 border border-slate-200/80 rounded-lg bg-white">
              <div>
                <span className="text-[10.5px] font-bold text-slate-400 uppercase">Application Type</span>
                <p className="font-bold text-slate-900 mt-0.5">{selectedViewLeave.leaveType || selectedViewLeave.movementType}</p>
              </div>

              <div>
                <span className="text-[10.5px] font-bold text-slate-400 uppercase">Duration / Times</span>
                <p className="font-bold text-slate-900 mt-0.5">{selectedViewLeave.duration} {selectedViewLeave.times ? `(${selectedViewLeave.times})` : ''}</p>
              </div>

              <div>
                <span className="text-[10.5px] font-bold text-slate-400 uppercase">Location</span>
                <p className="font-semibold text-slate-800 mt-0.5">{selectedViewLeave.location}</p>
              </div>

              <div>
                <span className="text-[10.5px] font-bold text-slate-400 uppercase">Reliever / Contact</span>
                <p className="font-semibold text-slate-800 mt-0.5">{selectedViewLeave.reliever || 'N/A'}</p>
              </div>

              <div className="col-span-2 pt-2 border-t border-slate-100">
                <span className="text-[10.5px] font-bold text-slate-400 uppercase">Reason / Purpose</span>
                <p className="font-medium text-slate-700 mt-0.5">{selectedViewLeave.reason}</p>
              </div>

              <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11.5px]">
                <span className="text-slate-400 font-medium">Applied On: <strong className="text-slate-700">{selectedViewLeave.appDate}</strong></span>
                {selectedViewLeave.attachment ? (
                  <span className="text-emerald-700 font-bold underline cursor-pointer flex items-center gap-1">
                    <FileText size={13} /> View Attachment ({selectedViewLeave.attachment})
                  </span>
                ) : (
                  <span className="text-slate-400 font-medium">No Attachment</span>
                )}
              </div>
            </div>

            {/* APPROVAL WORKFLOW & HISTORY TIMELINE */}
            <div className="space-y-3 pt-1">
              <h4 className="text-[13px] font-bold text-slate-800 pb-1 border-b border-slate-100 flex items-center gap-1.5">
                <Clock size={15} className="text-[#008060]" />
                Approval Workflow & Action History
              </h4>

              <div className="space-y-2.5 text-[12px] relative pl-4 border-l-2 border-slate-200">
                
                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-50"></span>
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-slate-900">Application Submitted</h5>
                    <span className="text-[11px] text-slate-400">{selectedViewLeave.appDate}</span>
                  </div>
                  <p className="text-[11.5px] text-slate-500 font-medium mt-0.5">Submitted by Al Mamon (Employee)</p>
                </div>

                {/* Step 2 */}
                <div className="relative pt-1">
                  <span className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ${selectedViewLeave.status === 'Approved' ? 'bg-emerald-600 ring-4 ring-emerald-50' : 'bg-amber-500 ring-4 ring-amber-50'}`}></span>
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-slate-900">Manager Review (Md. Kamruzzaman)</h5>
                    <span className="text-[11px] text-slate-400">{selectedViewLeave.status === 'Approved' ? 'Approved' : 'Pending Review'}</span>
                  </div>
                  <p className="text-[11.5px] text-slate-500 font-medium mt-0.5">
                    {selectedViewLeave.status === 'Approved' ? 'Approved by Line Manager' : 'Awaiting review from direct supervisor'}
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative pt-1">
                  <span className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ${selectedViewLeave.status === 'Approved' ? 'bg-emerald-600 ring-4 ring-emerald-50' : 'bg-slate-300'}`}></span>
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-slate-900">HR Verification</h5>
                    <span className="text-[11px] text-slate-400">{selectedViewLeave.status === 'Approved' ? 'Completed' : 'Pending'}</span>
                  </div>
                  <p className="text-[11.5px] text-slate-500 font-medium mt-0.5">HR Department System Log</p>
                </div>

              </div>
            </div>

          </div>
        </Modal>
      )}

    </div>
  );
}
