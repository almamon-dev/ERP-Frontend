import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Clock, Calendar, CheckCircle2, AlertCircle, FileText, Plus, Filter, Save, Footprints, RotateCcw
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import DatePicker from '@/components/ui/date-picker';
import Textarea from '@/components/ui/textarea';
import Modal from '@/components/modals/modal';

// DYNAMIC MONTH DAYS GENERATOR
const generateFullMonthRows = (year: number, monthIndex: number) => {
  const daysInMonth = new Date(year, monthIndex, 0).getDate(); // e.g. 31 for July, 30 for June
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const rows = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, monthIndex - 1, day);
    const dayOfWeek = dayNames[d.getDay()];
    const dayStr = String(day).padStart(2, '0');
    const formattedDate = `${dayStr} ${monthNames[monthIndex - 1]}, ${year} (${dayOfWeek})`;

    let actual = 'Present';
    let inTime = `8:${String((day * 3) % 25).padStart(2, '0')}AM`;
    let outTime = `5:${String(30 + ((day * 7) % 30)).padStart(2, '0')}PM`;
    let totalHours = `${8 + (day % 2)} hr ${15 + (day * 4) % 40} min`;

    if (dayOfWeek === 'Fri') {
      actual = 'Absent';
      inTime = '—';
      outTime = '—';
      totalHours = '—';
    } else if (dayOfWeek === 'Sun') {
      actual = 'Offday';
      inTime = '8:15AM';
      outTime = '6:13PM';
      totalHours = '9 hr 58 min';
    } else if (day % 4 === 0) {
      actual = 'Late';
      inTime = `8:${String(22 + (day % 15)).padStart(2, '0')}AM`;
    }

    rows.push({
      id: day,
      isoDate: `${year}-${String(monthIndex).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      date: formattedDate,
      inTime,
      outTime,
      manualIn: '—',
      manualOut: '—',
      totalHours,
      actual,
      reqAttendance: '—',
      reason: 'N/A',
      status: '—',
      // Shift change fields
      calendarName: 'Morning 8:00AM to 5:00PM',
      startTime: '08:00 AM',
      endTime: '05:00 PM',
      reqCalendar: '—',
      prevCalendar: '—',
      approvalStatus: '—',
      remarks: '—',
    });
  }
  return rows;
};

export default function TimeManagementPage() {
  // Navigation Sub-Tabs from URL query parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam === 'shift' ? 'shift' : 'adjust';

  // Modals
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false);

  // Filter States - Attendance Adjust
  const [adjustFromDate, setAdjustFromDate] = useState('2026-07-01');
  const [adjustToDate, setAdjustToDate] = useState('2026-07-31');

  // Filter States - Shift Change
  const [shiftMonth, setShiftMonth] = useState('2026-07-01');

  // Selected Checkboxes
  const [selectedAdjustIds, setSelectedAdjustIds] = useState<number[]>([]);
  const [selectedShiftIds, setSelectedShiftIds] = useState<number[]>([]);

  // Attendance Adjust Form State
  const [reqDate, setReqDate] = useState('2026-07-04');
  const [manualInTime, setManualInTime] = useState('08:00');
  const [manualOutTime, setManualOutTime] = useState('17:00');
  const [reqAttendanceType, setReqAttendanceType] = useState('Present');
  const [reqReason, setReqReason] = useState('');

  // Shift Change Form State
  const [reqShiftDate, setReqShiftDate] = useState('2026-07-01');
  const [reqCalendarName, setReqCalendarName] = useState('Morning 8:00AM to 5:00PM');
  const [shiftReason, setShiftReason] = useState('');

  // DYNAMIC FULL MONTH ROWS (31 DAYS FOR JULY)
  const [adjustData, setAdjustData] = useState(() => generateFullMonthRows(2026, 7));
  const shiftData = useMemo(() => generateFullMonthRows(2026, 7), []);

  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

  // Direct 1-Click Adjustment for a specific row
  const handleOpenRowAdjust = (row: any) => {
    setAdjustData(prev => prev.map(item => {
      if (item.id === row.id) {
        return {
          ...item,
          manualIn: item.manualIn !== '—' ? item.manualIn : '08:00',
          manualOut: item.manualOut !== '—' ? item.manualOut : '17:00',
          reqAttendance: 'Present',
          reason: item.actual === 'Offday' ? 'Worked on offday' : 'Punch regularization',
          status: 'Pending',
        };
      }
      return item;
    }));
  };

  // Direct 1-Click Adjustment for selected rows or date
  const handleDirectBulkAdjust = () => {
    if (selectedAdjustIds.length === 0) return;
    setAdjustData(prev => prev.map(item => {
      if (selectedAdjustIds.includes(item.id)) {
        return {
          ...item,
          manualIn: item.manualIn !== '—' ? item.manualIn : '08:00',
          manualOut: item.manualOut !== '—' ? item.manualOut : '17:00',
          reqAttendance: 'Present',
          reason: item.actual === 'Offday' ? 'Worked on offday' : 'Punch regularization',
          status: 'Pending',
        };
      }
      return item;
    }));
    setSelectedAdjustIds([]);
  };

  // Checkbox Selection Logic
  const toggleSelectAdjust = (id: number) => {
    setSelectedAdjustIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAllAdjust = () => {
    if (selectedAdjustIds.length === adjustData.length) {
      setSelectedAdjustIds([]);
    } else {
      setSelectedAdjustIds(adjustData.map(item => item.id));
    }
  };

  const toggleSelectShift = (id: number) => {
    setSelectedShiftIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAllShift = () => {
    if (selectedShiftIds.length === shiftData.length) {
      setSelectedShiftIds([]);
    } else {
      setSelectedShiftIds(shiftData.map(item => item.id));
    }
  };

  // Submit Attendance Adjust (modal form)
  const handleSubmitAttendanceAdjust = (e: React.FormEvent) => {
    e.preventDefault();
    setAdjustData(prev => prev.map(item => {
      if (
        item.id === selectedRowId ||
        selectedAdjustIds.includes(item.id) ||
        item.isoDate === reqDate
      ) {
        return {
          ...item,
          manualIn: manualInTime,
          manualOut: manualOutTime,
          reqAttendance: reqAttendanceType,
          reason: reqReason || 'Punch error adjustment',
          status: 'Pending',
        };
      }
      return item;
    }));
    setIsAttendanceModalOpen(false);
    setSelectedRowId(null);
    setSelectedAdjustIds([]);
  };
  const handleSubmitShiftChange = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Shift Change Request Submitted Successfully!');
    setIsShiftModalOpen(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Present':
        return <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-[#f4fbf0] text-[#16a34a] border border-[#a7f3d0] rounded-[3px]">Present</span>;
      case 'Absent':
        return <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-rose-50 text-rose-600 border border-rose-200 rounded-[3px]">Absent</span>;
      case 'Late':
        return <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-600 border border-amber-200 rounded-[3px]">Late</span>;
      case 'Offday':
        return <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200 rounded-[3px]">Offday</span>;
      case 'Pending':
        return <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-300 rounded-[3px]">Pending</span>;
      case 'Approved':
        return <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-300 rounded-[3px]">Approved</span>;
      default:
        return <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-slate-50 text-slate-500 border border-slate-200 rounded-[3px]">{status}</span>;
    }
  };

  return (
    <div className="p-4 max-w-full mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">

      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div className="pb-1">
        <h1 className="text-[20px] font-bold text-slate-900 tracking-tight">
          {activeTab === 'adjust' ? 'Attendance Adjust Req.' : 'Shift Change'}
        </h1>
        <p className="text-[13px] font-medium text-slate-500 mt-0.5">
          {activeTab === 'adjust'
            ? 'Request manual punch-ins, punch-outs, and attendance regularizations.'
            : 'Request roster shift modifications and work calendar changes.'}
        </p>
      </div>

      {/* ================= TAB 1: ATTENDANCE ADJUST REQ ================= */}
      {activeTab === 'adjust' && (
        <div className="bg-white p-3.5 rounded-sm border border-slate-200 shadow-2xs space-y-3">

          {/* HEADER USER BANNER & ACTION CONTROLS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-extrabold flex items-center justify-center text-[12px]">
                AM
              </div>
              <div>
                <h2 className="text-[13.5px] font-bold text-slate-900 leading-tight">Al Mamon</h2>
                <p className="text-[11.5px] font-medium text-slate-500">Jr. Laravel Developer</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <DatePicker
                  value={adjustFromDate}
                  onChange={(val) => setAdjustFromDate(val)}
                  size="sm"
                  className="w-36"
                />
                <span className="text-slate-400 font-bold text-[12px]">-</span>
                <DatePicker
                  value={adjustToDate}
                  onChange={(val) => setAdjustToDate(val)}
                  size="sm"
                  className="w-36"
                />
              </div>

              <Button
                onClick={() => {
                  if (selectedAdjustIds.length > 0) {
                    handleDirectBulkAdjust();
                  } else {
                    setReqDate(adjustFromDate);
                    setIsAttendanceModalOpen(true);
                  }
                }}
                className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold h-7.5 px-3 py-1 rounded-sm transition-colors shadow-2xs cursor-pointer"
              >
                {selectedAdjustIds.length > 0 
                  ? `Apply Adjustment (${selectedAdjustIds.length})` 
                  : 'Change Attendance'}
              </Button>
            </div>
          </div>

          {/* DYNAMIC FULL MONTH DATA TABLE (31 DAYS FOR JULY) */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-slate-200 text-slate-800 font-bold">
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center w-8">
                    <input
                      type="checkbox"
                      checked={selectedAdjustIds.length === adjustData.length && adjustData.length > 0}
                      onChange={toggleSelectAllAdjust}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center w-10">SL</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 whitespace-nowrap">Attendance Date</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">In Time</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Out Time</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Manual In-Time</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Manual Out-Time</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Total Working Hours</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Actual Attendance</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Request Attendance</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Reason</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center">Approval Status</th>
                  <th className="py-2 px-2.5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                {adjustData.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                      <input
                        type="checkbox"
                        checked={selectedAdjustIds.includes(row.id)}
                        onChange={() => toggleSelectAdjust(row.id)}
                        className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                    </td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 font-bold text-slate-800 whitespace-nowrap">{row.date}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-700 font-semibold">{row.inTime}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-700 font-semibold">{row.outTime}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-400">{row.manualIn}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-400">{row.manualOut}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center font-bold text-slate-800 whitespace-nowrap">{row.totalHours}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                      {getStatusBadge(row.actual)}
                    </td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-400">{row.reqAttendance}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-400 font-semibold">{row.reason}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">{getStatusBadge(row.status)}</td>
                    <td className="py-1.5 px-2.5 text-center">
                      <button
                        type="button"
                        onClick={() => handleOpenRowAdjust(row)}
                        className="px-2 py-0.5 text-[11px] font-bold text-[#008060] bg-[#f4fbf0] border border-[#a7f3d0] rounded-xs hover:bg-[#e6f7e2] transition-colors cursor-pointer"
                      >
                        Adjust
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* ================= TAB 2: SHIFT CHANGE ================= */}
      {activeTab === 'shift' && (
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4">

          {/* HEADER USER BANNER & ACTION CONTROLS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-extrabold flex items-center justify-center text-[12px]">
                AM
              </div>
              <div>
                <h2 className="text-[14px] font-bold text-slate-900 leading-tight">Al Mamon</h2>
                <p className="text-[11.5px] font-medium text-slate-500">Jr. Laravel Developer</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <DatePicker
                value={shiftMonth}
                onChange={(val) => setShiftMonth(val)}
                format="monthYear"
                size="sm"
                className="w-44"
              />

              <Button
                onClick={() => setIsShiftModalOpen(true)}
                className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-extrabold h-8 px-3.5 tracking-wide cursor-pointer"
              >
                Change Shift
              </Button>
            </div>
          </div>

          {/* DYNAMIC FULL MONTH DATA TABLE (31 DAYS FOR JULY) */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-slate-200 text-slate-800 font-bold">
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center w-8">
                    <input
                      type="checkbox"
                      checked={selectedShiftIds.length === shiftData.length && shiftData.length > 0}
                      onChange={toggleSelectAllShift}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Attendance Date</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Calender Name</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Start Time</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">End Time</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">In Time</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Out Time</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Req. Calendar Name</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Prev. Calendar Name</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Attendance Status</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Approval Status</th>
                  <th className="py-2.5 px-3 text-center">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                {shiftData.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2 px-3 border-r border-slate-200 text-center">
                      <input
                        type="checkbox"
                        checked={selectedShiftIds.includes(row.id)}
                        onChange={() => toggleSelectShift(row.id)}
                        className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                    </td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                    <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-800 whitespace-nowrap">{row.date}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-slate-700 font-semibold whitespace-nowrap">{row.calendarName}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-600">{row.startTime}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-600">{row.endTime}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-700 font-semibold">{row.inTime}</td>
                    <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-700 font-semibold">{row.outTime}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-400">{row.reqCalendar}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-400">{row.prevCalendar}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                      {getStatusBadge(row.status)}
                    </td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-400">{row.approvalStatus}</td>
                    <td className="py-2 px-2.5 text-center text-slate-400">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* CHANGE ATTENDANCE MODAL */}
      <Modal
        isOpen={isAttendanceModalOpen}
        onClose={() => setIsAttendanceModalOpen(false)}
        title="Attendance Adjustment Requisition"
        description="Request manual punch-in, punch-out, or attendance regularization"
        size="md"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsAttendanceModalOpen(false)} className="h-7.5 text-[11.5px] font-bold">
              Cancel
            </Button>
            <Button
              onClick={handleSubmitAttendanceAdjust}
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] h-7.5 px-3.5 font-bold"
            >
              Submit Request
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmitAttendanceAdjust} className="space-y-3 text-left">
          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Attendance Date
            </FormLabel>
            <DatePicker
              value={reqDate}
              onChange={(val) => setReqDate(val)}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1 w-full">
              <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                <span className="text-rose-500 mr-0.5">*</span> Manual In-Time
              </FormLabel>
              <Input
                type="time"
                value={manualInTime}
                onChange={(e) => setManualInTime(e.target.value)}
                className="text-[12px]"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                <span className="text-rose-500 mr-0.5">*</span> Manual Out-Time
              </FormLabel>
              <Input
                type="time"
                value={manualOutTime}
                onChange={(e) => setManualOutTime(e.target.value)}
                className="text-[12px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Requested Attendance Type
            </FormLabel>
            <Select
              value={reqAttendanceType}
              onChange={(e) => setReqAttendanceType(e.target.value)}
              options={[
                { id: 'Present', name: 'Present' },
                { id: 'Half Day', name: 'Half Day' },
                { id: 'On Duty', name: 'On Duty' },
              ]}
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Reason for Adjustment
            </FormLabel>
            <Textarea
              placeholder="Specify reason (e.g. Card machine failure, Official duty)"
              value={reqReason}
              onChange={(e) => setReqReason(e.target.value)}
              rows={2}
              className="text-[12px] min-h-[52px] resize-none"
            />
          </div>
        </form>
      </Modal>

      {/* CHANGE SHIFT MODAL */}
      <Modal
        isOpen={isShiftModalOpen}
        onClose={() => setIsShiftModalOpen(false)}
        title="Shift Change Requisition"
        description="Request roster shift or work calendar modification"
        size="md"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsShiftModalOpen(false)} className="h-7.5 text-[11.5px] font-bold">
              Cancel
            </Button>
            <Button
              onClick={handleSubmitShiftChange}
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] h-7.5 px-3.5 font-bold"
            >
              Submit Shift Request
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmitShiftChange} className="space-y-3 text-left">
          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Effective Date
            </FormLabel>
            <DatePicker
              value={reqShiftDate}
              onChange={(val) => setReqShiftDate(val)}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Requested Shift / Calendar
            </FormLabel>
            <Select
              value={reqCalendarName}
              onChange={(e) => setReqCalendarName(e.target.value)}
              options={[
                { id: 'Morning 8:00AM to 5:00PM', name: 'Morning 8:00AM to 5:00PM' },
                { id: 'Day 9:00AM to 6:00PM', name: 'Day 9:00AM to 6:00PM' },
                { id: 'Evening 2:00PM to 11:00PM', name: 'Evening 2:00PM to 11:00PM' },
                { id: 'Night 10:00PM to 7:00AM', name: 'Night 10:00PM to 7:00AM' },
              ]}
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Remarks / Reason
            </FormLabel>
            <Textarea
              placeholder="Specify reason for shift change request"
              value={shiftReason}
              onChange={(e) => setShiftReason(e.target.value)}
              rows={2}
              className="text-[12px] min-h-[52px] resize-none"
            />
          </div>
        </form>
      </Modal>

    </div>
  );
}
