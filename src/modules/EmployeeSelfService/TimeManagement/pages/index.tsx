import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Clock, Calendar as CalendarIcon, CheckCircle2, AlertCircle, FileText, Plus, Filter, Save, Footprints, RotateCcw,
  FileSpreadsheet, Printer, Download, ArrowLeftRight, ShieldCheck, CheckSquare, Search, RefreshCw
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
  const daysInMonth = new Date(year, monthIndex, 0).getDate(); // e.g. 31 for July
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
    let otHours = day % 3 === 0 ? '1.5 hrs' : '0 hr';

    if (dayOfWeek === 'Fri') {
      actual = 'Absent';
      inTime = '—';
      outTime = '—';
      totalHours = '—';
      otHours = '0 hr';
    } else if (dayOfWeek === 'Sun') {
      actual = 'Offday';
      inTime = '8:15AM';
      outTime = '6:13PM';
      totalHours = '9 hr 58 min';
      otHours = '2.0 hrs';
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
      againstDate: '—',
      reason: 'N/A',
      status: '—',
      otHours,
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
  const tabParam = searchParams.get('tab') || 'my-attendance';
  const validTabs = ['my-attendance', 'offday-swap', 'weekend-swap', 'shift-swap', 'overtime', 'reports', 'history'];
  const activeTab = validTabs.includes(tabParam) ? tabParam : 'my-attendance';

  const setTab = (t: string) => {
    setSearchParams({ tab: t });
  };

  // Modals
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false);
  const [isOffdaySwapModalOpen, setIsOffdaySwapModalOpen] = useState(false);
  const [isOvertimeModalOpen, setIsOvertimeModalOpen] = useState(false);

  // Filter States
  const [adjustFromDate, setAdjustFromDate] = useState('2026-07-01');
  const [adjustToDate, setAdjustToDate] = useState('2026-07-31');
  const [selectedAdjustIds, setSelectedAdjustIds] = useState<number[]>([]);
  const [selectedOffdaySwapIds, setSelectedOffdaySwapIds] = useState<number[]>([]);
  const [selectedWeekendSwapIds, setSelectedWeekendSwapIds] = useState<number[]>([]);
  const [selectedShiftIds, setSelectedShiftIds] = useState<number[]>([]);
  const [selectedOvertimeIds, setSelectedOvertimeIds] = useState<number[]>([]);

  // Attendance Adjust Form State
  const [reqDate, setReqDate] = useState('2026-07-04');
  const [reqAgainstDate, setReqAgainstDate] = useState('N/A (Direct Regularization)');
  const [manualInTime, setManualInTime] = useState('08:00');
  const [manualOutTime, setManualOutTime] = useState('17:00');
  const [reqAttendanceType, setReqAttendanceType] = useState('Present');
  const [reqReason, setReqReason] = useState('');

  // Offday Swap Form State
  const [workedOffdayDate, setWorkedOffdayDate] = useState('2026-07-05');
  const [swapTargetDate, setSwapTargetDate] = useState('2026-07-10');
  const [swapReason, setSwapReason] = useState('');

  // Shift Change Form State
  const [reqShiftDate, setReqShiftDate] = useState('2026-07-01');
  const [reqCalendarName, setReqCalendarName] = useState('Morning 8:00AM to 5:00PM');
  const [shiftReason, setShiftReason] = useState('');

  // Overtime Claim Form State
  const [otDate, setOtDate] = useState('2026-07-15');
  const [otHoursInput, setOtHoursInput] = useState('2.5');
  const [otReason, setOtReason] = useState('');

  // DYNAMIC FULL MONTH ROWS (31 DAYS FOR JULY)
  const [adjustData, setAdjustData] = useState(() => generateFullMonthRows(2026, 7));

  // Dynamic Date Range Filtered Rows
  const displayRows = useMemo(() => {
    return adjustData.filter(row => {
      if (adjustFromDate && row.isoDate < adjustFromDate) return false;
      if (adjustToDate && row.isoDate > adjustToDate) return false;
      return true;
    });
  }, [adjustData, adjustFromDate, adjustToDate]);

  // OFFDAY SWAP RECORDS
  const [offdaySwapList, setOffdaySwapList] = useState([
    { id: 1, workedDate: '05 Jul, 2026 (Offday Worked)', targetDate: '10 Jul, 2026', reason: 'Compensatory leave for weekend client deployment', appDate: '06 Jul, 2026', status: 'Approved' },
    { id: 2, workedDate: '19 Jul, 2026 (Offday Worked)', targetDate: '24 Jul, 2026', reason: 'Emergency server migration duty', appDate: '20 Jul, 2026', status: 'Pending' },
  ]);

  // WEEKEND SWAP RECORDS
  const [weekendSwapList, setWeekendSwapList] = useState([
    { id: 1, originalDutyDate: '10 Jul, 2026 (Friday)', requestedDutyDate: '11 Jul, 2026 (Saturday)', swappedWith: 'Tanvir Ahmed (ID: 10842)', reason: 'Personal family emergency on Friday roster', status: 'Approved' },
  ]);

  // OVERTIME CLAIMS LIST
  const [overtimeList, setOvertimeList] = useState([
    { id: 1, date: '15 Jul, 2026', hours: '2.5 hrs', rateMultiplier: '1.5x (Weekday OT)', totalAmount: 'BDT 1,250', reason: 'Sprint release deployment and QA testing', status: 'Approved' },
    { id: 2, date: '19 Jul, 2026', hours: '4.0 hrs', rateMultiplier: '2.0x (Holiday OT)', totalAmount: 'BDT 2,800', reason: 'Urgent server maintenance and data backup', status: 'Pending' },
  ]);

  // Dynamic Options with Offday / Workday Badges & Recorded Times
  const dateOptionsWithDetails = useMemo(() => {
    return adjustData.map(item => ({
      id: item.isoDate,
      isoDate: item.isoDate,
      name: `${item.date} — [${item.actual.toUpperCase()}] | In: ${item.inTime} - Out: ${item.outTime} (${item.totalHours})`,
      actual: item.actual,
      inTime: item.inTime,
      outTime: item.outTime,
      totalHours: item.totalHours
    }));
  }, [adjustData]);

  // Find currently active date details for Offday Swap Modal
  const activeOffdayDetails = useMemo(() => {
    return dateOptionsWithDetails.find(d => d.isoDate === workedOffdayDate) || dateOptionsWithDetails.find(d => d.actual === 'Offday') || dateOptionsWithDetails[0];
  }, [workedOffdayDate, dateOptionsWithDetails]);

  // Direct 1-Click Bulk Adjustment
  const handleDirectBulkAdjust = () => {
    if (selectedAdjustIds.length === 0) return;
    setAdjustData(prev => prev.map(item => {
      if (selectedAdjustIds.includes(item.id)) {
        return {
          ...item,
          manualIn: item.manualIn !== '—' ? item.manualIn : '08:00',
          manualOut: item.manualOut !== '—' ? item.manualOut : '17:00',
          reqAttendance: 'Present',
          againstDate: reqAgainstDate,
          reason: item.actual === 'Offday' ? 'Worked on offday' : 'Punch regularization',
          status: 'Pending',
        };
      }
      return item;
    }));
    setSelectedAdjustIds([]);
  };

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

  const toggleSelectOffdaySwap = (id: number) => {
    setSelectedOffdaySwapIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAllOffdaySwap = () => {
    if (selectedOffdaySwapIds.length === adjustData.length) {
      setSelectedOffdaySwapIds([]);
    } else {
      setSelectedOffdaySwapIds(adjustData.map(item => item.id));
    }
  };

  const toggleSelectWeekendSwap = (id: number) => {
    setSelectedWeekendSwapIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAllWeekendSwap = () => {
    if (selectedWeekendSwapIds.length === adjustData.length) {
      setSelectedWeekendSwapIds([]);
    } else {
      setSelectedWeekendSwapIds(adjustData.map(item => item.id));
    }
  };

  const toggleSelectShift = (id: number) => {
    setSelectedShiftIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAllShift = () => {
    if (selectedShiftIds.length === adjustData.length) {
      setSelectedShiftIds([]);
    } else {
      setSelectedShiftIds(adjustData.map(item => item.id));
    }
  };

  const toggleSelectOvertime = (id: number) => {
    setSelectedOvertimeIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAllOvertime = () => {
    if (selectedOvertimeIds.length === adjustData.length) {
      setSelectedOvertimeIds([]);
    } else {
      setSelectedOvertimeIds(adjustData.map(item => item.id));
    }
  };

  const handleSubmitAttendanceAdjust = (e: React.FormEvent) => {
    e.preventDefault();
    setAdjustData(prev => prev.map(item => {
      if (item.isoDate === reqDate || selectedAdjustIds.includes(item.id)) {
        return {
          ...item,
          manualIn: manualInTime,
          manualOut: manualOutTime,
          reqAttendance: reqAttendanceType,
          againstDate: reqAgainstDate,
          reason: reqReason || 'Punch error adjustment',
          status: 'Pending',
        };
      }
      return item;
    }));
    setIsAttendanceModalOpen(false);
    setSelectedAdjustIds([]);
  };

  const handleSubmitOffdaySwap = (e: React.FormEvent) => {
    e.preventDefault();
    const newSwap = {
      id: Date.now(),
      workedDate: `${workedOffdayDate} (Offday Worked)`,
      targetDate: swapTargetDate,
      reason: swapReason || 'Offday Comp-Off Swap',
      appDate: new Date().toLocaleDateString(),
      status: 'Pending'
    };
    setOffdaySwapList([newSwap, ...offdaySwapList]);
    setIsOffdaySwapModalOpen(false);
    setSwapReason('');
  };

  const handleSubmitOvertime = (e: React.FormEvent) => {
    e.preventDefault();
    const newOt = {
      id: Date.now(),
      date: otDate,
      hours: `${otHoursInput} hrs`,
      rateMultiplier: '1.5x (Weekday OT)',
      totalAmount: `BDT ${Number(otHoursInput) * 500}`,
      reason: otReason || 'Overtime Work',
      status: 'Pending'
    };
    setOvertimeList([newOt, ...overtimeList]);
    setIsOvertimeModalOpen(false);
    setOtReason('');
  };

  const handleSubmitShiftChange = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Shift Change Request Submitted Successfully!');
    setIsShiftModalOpen(false);
    setShiftReason('');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Present':
        return <span className="inline-block px-1.5 py-0 text-[10px] font-medium bg-[#e6f4ea] text-[#137333] border border-[#ceead6] rounded-xs">Present</span>;
      case 'Absent':
        return <span className="inline-block px-1.5 py-0 text-[10px] font-medium bg-[#fce8e6] text-[#c5221f] border border-[#fad2cf] rounded-xs">Absent</span>;
      case 'Late':
        return <span className="inline-block px-1.5 py-0 text-[10px] font-medium bg-[#fef7e0] text-[#b06000] border border-[#feefc3] rounded-xs">Late</span>;
      case 'Offday':
        return <span className="inline-block px-1.5 py-0 text-[10px] font-medium bg-[#e8f0fe] text-[#1a73e8] border border-[#d2e3fc] rounded-xs">Offday</span>;
      case 'Pending':
        return <span className="inline-block px-1.5 py-0 text-[10px] font-medium bg-[#fef7e0] text-[#b06000] border border-[#feefc3] rounded-xs">Pending</span>;
      case 'Approved':
        return <span className="inline-block px-1.5 py-0 text-[10px] font-medium bg-[#e6f4ea] text-[#137333] border border-[#ceead6] rounded-xs">Approved</span>;
      default:
        return <span className="inline-block px-1.5 py-0 text-[10px] font-medium bg-slate-50 text-slate-500 border border-slate-200 rounded-xs">{status}</span>;
    }
  };

  const tabTitles: Record<string, { title: string; desc: string }> = {
    'my-attendance': {
      title: 'My Attendance',
      desc: 'View your daily punch logs, total working hours, attendance status, and monthly summaries.'
    },

    'offday-swap': {
      title: 'Off Day Swap (Comp Off)',
      desc: 'Swap worked offdays or weekends for compensatory leave allocations.'
    },
    'weekend-swap': {
      title: 'Weekend Swap',
      desc: 'Request weekend duty exchange or roster day-off swaps with teammates.'
    },
    'shift-swap': {
      title: 'Shift Swap',
      desc: 'Request roster shift modifications and work calendar changes.'
    },
    'overtime': {
      title: 'Overtime Requisition',
      desc: 'Submit overtime claims and view approved OT hour allocations.'
    },
    'reports': {
      title: 'Attendance Statement & Reports',
      desc: 'Generate monthly attendance statements and downloadable audit summaries.'
    },
    'history': {
      title: 'Attendance Audit History',
      desc: 'Track complete history of regularization requests, supervisor remarks, and approvals.'
    },
  };

  const currentMeta = tabTitles[activeTab] || tabTitles['my-attendance'];

  return (
    <div className="p-4 w-full max-w-none mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">

      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight">
            {currentMeta.title}
          </h1>
          <p className="text-[13px] font-medium text-slate-500 mt-0.5">
            {currentMeta.desc}
          </p>
        </div>

        {/* METRIC BADGE SUMMARY COUNTERS */}
        <div className="flex items-center gap-3 font-normal text-[13px] shrink-0">
          <div className="flex items-stretch border-l-[3px] border-emerald-500 pl-2.5 text-left py-0.5">
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] text-slate-800 leading-none">28</span>
              <span className="text-[#64748b] text-[11px] font-medium leading-none mt-1">Payable Days</span>
            </div>
          </div>
          <div className="flex items-stretch border-l-[3px] border-blue-500 pl-2.5 text-left py-0.5">
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] text-blue-600 leading-none">22</span>
              <span className="text-[#64748b] text-[11px] font-medium leading-none mt-1">Present</span>
            </div>
          </div>
          <div className="flex items-stretch border-l-[3px] border-amber-500 pl-2.5 text-left py-0.5 hidden sm:flex">
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] text-amber-600 leading-none">4</span>
              <span className="text-[#64748b] text-[11px] font-medium leading-none mt-1">Late</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SUB-TAB 1: MY ATTENDANCE ================= */}
      {activeTab === 'my-attendance' && (
        <div className="bg-white rounded-sm border border-slate-200 shadow-2xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 px-3 border-b border-slate-200 bg-white">
            <h2 className="text-[14px] font-bold text-slate-900 leading-tight">Daily Punch & Log Records (July 2026)</h2>
            <div className="flex items-center gap-2">
              <DatePicker value={adjustFromDate} onChange={(val) => setAdjustFromDate(val)} size="sm" className="w-36" />
              <span className="text-slate-400 font-bold text-[12px]">-</span>
              <DatePicker value={adjustToDate} onChange={(val) => setAdjustToDate(val)} size="sm" className="w-36" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
              <thead>
                <tr className="bg-[#fafafa] border-b border-slate-100 text-slate-600 font-medium text-[12px]">
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">
                    <input type="checkbox" className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                  </th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 whitespace-nowrap">Attendance Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">In Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Out Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Manual In-Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Manual Out-Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Total Working Hours</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Actual Attendance</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Request Attendance</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Reason</th>
                  <th className="py-1.5 px-2.5 text-center whitespace-nowrap">Approval Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] text-slate-600 font-normal text-[12px] leading-[18px]">
                {displayRows.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-[#f9fafb] transition-colors border-b border-slate-100">
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                      <input type="checkbox" className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    </td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{idx + 1}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-600 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.date}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.inTime !== '—' ? row.inTime : '-'}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.outTime !== '—' ? row.outTime : '-'}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{row.manualIn !== '—' ? row.manualIn : '-'}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{row.manualOut !== '—' ? row.manualOut : '-'}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.totalHours || ''}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">{getStatusBadge(row.actual)}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{row.reqAttendance !== '—' ? row.reqAttendance : '-'}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{row.reason || 'N/A'}</td>
                    <td className="py-1.5 px-2.5 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.status !== '—' ? getStatusBadge(row.status) : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= SUB-TAB 3: OFF DAY SWAP (COMP OFF) ================= */}
      {activeTab === 'offday-swap' && (
        <div className="bg-white rounded-sm border border-slate-200 shadow-2xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 px-3 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-indigo-700 text-white font-extrabold flex items-center justify-center text-[12px]">
                AM
              </div>
              <div>
                <h2 className="text-[13.5px] font-bold text-slate-900 leading-tight">Off Day Swap (Compensatory Off) Requisitions</h2>
                <p className="text-[11.5px] font-medium text-slate-500">Select worked offday dates below to swap for working day leave credit.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <DatePicker value={adjustFromDate} onChange={(val) => setAdjustFromDate(val)} size="sm" className="w-36" />
                <span className="text-slate-400 font-bold text-[12px]">-</span>
                <DatePicker value={adjustToDate} onChange={(val) => setAdjustToDate(val)} size="sm" className="w-36" />
              </div>

              <Button
                onClick={() => {
                  if (selectedOffdaySwapIds.length > 0) {
                    const selectedItem = adjustData.find(d => selectedOffdaySwapIds.includes(d.id));
                    if (selectedItem) setWorkedOffdayDate(selectedItem.isoDate);
                  }
                  setIsOffdaySwapModalOpen(true);
                }}
                className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold h-8 px-3 py-1 rounded-sm transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <Plus size={14} />
                <span>
                  {selectedOffdaySwapIds.length > 0
                    ? `Apply Offday Swap (${selectedOffdaySwapIds.length})`
                    : 'Request Off Day Swap'}
                </span>
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
              <thead>
                <tr className="bg-[#fafafa] border-b border-slate-100 text-slate-600 font-medium text-[12px]">
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">
                    <input
                      type="checkbox"
                      checked={selectedOffdaySwapIds.length === adjustData.length && adjustData.length > 0}
                      onChange={toggleSelectAllOffdaySwap}
                      className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 whitespace-nowrap">Worked Offday / Attendance Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">In Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Out Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Total Working Hours</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Attendance Status</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Requested Swap Leave Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Reason</th>
                  <th className="py-1.5 px-2.5 text-center whitespace-nowrap">Approval Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] text-slate-600 font-normal text-[12px] leading-[18px]">
                {displayRows.map((row, idx) => {
                  const swapRecord = offdaySwapList.find(s => s.workedDate.includes(row.date.split(' ')[0]));
                  return (
                    <tr key={row.id} className={`hover:bg-[#f9fafb] transition-colors border-b border-slate-100 ${row.actual === 'Offday' ? 'bg-indigo-50/20' : ''}`}>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                        <input
                          type="checkbox"
                          checked={selectedOffdaySwapIds.includes(row.id)}
                          onChange={() => toggleSelectOffdaySwap(row.id)}
                          className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{idx + 1}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-600 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.date}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.inTime !== '—' ? row.inTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.outTime !== '—' ? row.outTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.totalHours || ''}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">{getStatusBadge(row.actual)}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-medium text-indigo-600">
                        {swapRecord ? swapRecord.targetDate : '—'}
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">
                        {swapRecord ? swapRecord.reason : 'N/A'}
                      </td>
                      <td className="py-1.5 px-2.5 text-center">
                        {getStatusBadge(swapRecord ? swapRecord.status : '—')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= SUB-TAB 4: WEEKEND SWAP ================= */}
      {activeTab === 'weekend-swap' && (
        <div className="bg-white rounded-sm border border-slate-200 shadow-2xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 px-3 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-extrabold flex items-center justify-center text-[12px]">
                AM
              </div>
              <div>
                <h2 className="text-[13.5px] font-bold text-slate-900 leading-tight">Weekend Duty Swap Requisitions</h2>
                <p className="text-[11.5px] font-medium text-slate-500">Select weekend dates below to request duty swap with teammates.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <DatePicker value={adjustFromDate} onChange={(val) => setAdjustFromDate(val)} size="sm" className="w-36" />
                <span className="text-slate-400 font-bold text-[12px]">-</span>
                <DatePicker value={adjustToDate} onChange={(val) => setAdjustToDate(val)} size="sm" className="w-36" />
              </div>

              <Button
                onClick={() => alert('Weekend Swap Modal Opened!')}
                className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold h-8 px-3 py-1 rounded-sm transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <Plus size={14} />
                <span>
                  {selectedWeekendSwapIds.length > 0
                    ? `Apply Weekend Swap (${selectedWeekendSwapIds.length})`
                    : 'Request Weekend Swap'}
                </span>
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
              <thead>
                <tr className="bg-[#fafafa] border-b border-slate-100 text-slate-600 font-medium text-[12px]">
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">
                    <input
                      type="checkbox"
                      checked={selectedWeekendSwapIds.length === adjustData.length && adjustData.length > 0}
                      onChange={toggleSelectAllWeekendSwap}
                      className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 whitespace-nowrap">Original Duty Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">In Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Out Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Working Hours</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Requested Duty Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Swapped Teammate</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Reason</th>
                  <th className="py-1.5 px-2.5 text-center whitespace-nowrap">Approval Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] text-slate-600 font-normal text-[12px] leading-[18px]">
                {displayRows.map((row, idx) => {
                  const swapItem = weekendSwapList.find(w => w.originalDutyDate.includes(row.date.split(' ')[0]));
                  return (
                    <tr key={row.id} className="hover:bg-[#f9fafb] transition-colors border-b border-slate-100">
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                        <input
                          type="checkbox"
                          checked={selectedWeekendSwapIds.includes(row.id)}
                          onChange={() => toggleSelectWeekendSwap(row.id)}
                          className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{idx + 1}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-600 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.date}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.inTime !== '—' ? row.inTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.outTime !== '—' ? row.outTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.totalHours || ''}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-medium text-emerald-700">
                        {swapItem ? swapItem.requestedDutyDate : '—'}
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">
                        {swapItem ? swapItem.swappedWith : '—'}
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">
                        {swapItem ? swapItem.reason : 'N/A'}
                      </td>
                      <td className="py-2 px-2.5 text-center">
                        {getStatusBadge(swapItem ? swapItem.status : '—')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= SUB-TAB 5: SHIFT SWAP ================= */}
      {activeTab === 'shift-swap' && (
        <div className="bg-white rounded-sm border border-slate-200 shadow-2xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 px-3 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white font-extrabold flex items-center justify-center text-[12px]">
                AM
              </div>
              <div>
                <h2 className="text-[13.5px] font-bold text-slate-900 leading-tight">Roster Shift Change & Swap Requisitions</h2>
                <p className="text-[11.5px] font-medium text-slate-500">Select roster dates to request shift changes (Morning / Evening / Night).</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <DatePicker value={adjustFromDate} onChange={(val) => setAdjustFromDate(val)} size="sm" className="w-36" />
                <span className="text-slate-400 font-bold text-[12px]">-</span>
                <DatePicker value={adjustToDate} onChange={(val) => setAdjustToDate(val)} size="sm" className="w-36" />
              </div>

              <Button
                onClick={() => setIsShiftModalOpen(true)}
                className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold h-8 px-3 py-1 rounded-sm transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <Plus size={14} />
                <span>
                  {selectedShiftIds.length > 0
                    ? `Apply Shift Change (${selectedShiftIds.length})`
                    : 'Request Shift Change'}
                </span>
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
              <thead>
                <tr className="bg-[#fafafa] border-b border-slate-100 text-slate-600 font-medium text-[12px]">
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">
                    <input
                      type="checkbox"
                      checked={selectedShiftIds.length === adjustData.length && adjustData.length > 0}
                      onChange={toggleSelectAllShift}
                      className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 whitespace-nowrap">Attendance Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">In Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Out Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Current Shift</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Requested Shift</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Reason</th>
                  <th className="py-1.5 px-2.5 text-center whitespace-nowrap">Approval Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] text-slate-600 font-normal text-[12px] leading-[18px]">
                {displayRows.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-[#f9fafb] transition-colors border-b border-slate-100">
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                      <input
                        type="checkbox"
                        checked={selectedShiftIds.includes(row.id)}
                        onChange={() => toggleSelectShift(row.id)}
                        className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                    </td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{idx + 1}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-600 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.date}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.inTime !== '—' ? row.inTime : '-'}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.outTime !== '—' ? row.outTime : '-'}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.calendarName}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-medium text-indigo-600">
                      {row.id === 1 ? 'Evening 2:00PM to 11:00PM' : '—'}
                    </td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">
                      {row.id === 1 ? 'Client site emergency support' : 'N/A'}
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      {getStatusBadge(row.id === 1 ? 'Approved' : '—')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= SUB-TAB 6: OVERTIME ================= */}
      {activeTab === 'overtime' && (
        <div className="bg-white rounded-sm border border-slate-200 shadow-2xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 px-3 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-extrabold flex items-center justify-center text-[12px]">
                AM
              </div>
              <div>
                <h2 className="text-[13.5px] font-bold text-slate-900 leading-tight">Overtime Hours & Claim Requisitions</h2>
                <p className="text-[11.5px] font-medium text-slate-500">Track extra working hours, rate multipliers (1.5x / 2.0x), and submit OT claims.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <DatePicker value={adjustFromDate} onChange={(val) => setAdjustFromDate(val)} size="sm" className="w-36" />
                <span className="text-slate-400 font-bold text-[12px]">-</span>
                <DatePicker value={adjustToDate} onChange={(val) => setAdjustToDate(val)} size="sm" className="w-36" />
              </div>

              <Button
                onClick={() => setIsOvertimeModalOpen(true)}
                className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold h-8 px-3 py-1 rounded-sm transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <Plus size={14} />
                <span>
                  {selectedOvertimeIds.length > 0
                    ? `Submit OT Claim (${selectedOvertimeIds.length})`
                    : 'Submit OT Claim'}
                </span>
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border-collapse">
              <thead>
                <tr className="bg-[#fafafa] border-b border-slate-100 text-slate-700 font-medium text-[12px]">
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">
                    <input
                      type="checkbox"
                      checked={selectedOvertimeIds.length === adjustData.length && adjustData.length > 0}
                      onChange={toggleSelectAllOvertime}
                      className="w-4 h-4 rounded-xs border-slate-600 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                  </th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 whitespace-nowrap">OT Attendance Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">In Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Out Time</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Extra Hours</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Rate Multiplier</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Calculated Amount</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Reason</th>
                  <th className="py-1.5 px-2.5 text-center whitespace-nowrap">Approval Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] text-slate-600 font-normal text-[12px] leading-[18px]">
                {displayRows.map((row, idx) => {
                  const otRecord = overtimeList.find(o => o.date.includes(row.date.split(' ')[0]));
                  return (
                    <tr key={row.id} className="hover:bg-[#f9fafb] transition-colors border-b border-slate-100">
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                        <input
                          type="checkbox"
                          checked={selectedOvertimeIds.includes(row.id)}
                          onChange={() => toggleSelectOvertime(row.id)}
                          className="w-4 h-4 rounded-xs border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{idx + 1}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-600 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.date}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.inTime !== '—' ? row.inTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.outTime !== '—' ? row.outTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-medium text-indigo-600">
                        {otRecord ? otRecord.hours : row.otHours}
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-normal text-slate-600">
                        {otRecord ? otRecord.rateMultiplier : row.actual === 'Offday' ? '2.0x (Holiday)' : '1.5x (Weekday)'}
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center font-medium text-emerald-700">
                        {otRecord ? otRecord.totalAmount : row.otHours !== '0 hr' ? 'BDT 1,000' : '—'}
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">
                        {otRecord ? otRecord.reason : 'N/A'}
                      </td>
                      <td className="py-1.5 px-2.5 text-center">
                        {getStatusBadge(otRecord ? otRecord.status : row.otHours !== '0 hr' ? 'Approved' : '—')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= SUB-TAB 7: ATTENDANCE REPORTS ================= */}
      {activeTab === 'reports' && (
        <div className="bg-white rounded-sm border border-slate-200 shadow-2xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 px-3 border-b border-slate-200 bg-white">
            <div>
              <h2 className="text-[14px] font-bold text-slate-900 leading-tight">Monthly Attendance Report Statement</h2>
              <p className="text-[11.5px] text-slate-500 font-medium mt-0.5">Generate printable PDF or Excel attendance summary reports.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={() => window.print()} className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11.5px] font-bold h-8 px-3 rounded-xs border border-slate-200 cursor-pointer flex items-center gap-1.5">
                <Printer size={14} />
                <span>Print Statement</span>
              </Button>
              <Button onClick={() => alert('Exporting Attendance Excel Report...')} className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold h-8 px-3 rounded-xs cursor-pointer flex items-center gap-1.5">
                <Download size={14} />
                <span>Export Excel</span>
              </Button>
            </div>
          </div>

          <div className="p-3.5 space-y-3.5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 bg-slate-50/90 border border-slate-200/80 rounded-xs text-[12px]">
              <div>
                <span className="text-slate-500 block font-medium">Employee Name:</span>
                <span className="font-bold text-slate-900">Al Mamon (ID: 15202)</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Department:</span>
                <span className="font-bold text-slate-900">Software Engineering / Operations</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Report Period:</span>
                <span className="font-bold text-indigo-700">01 July 2026 - 31 July 2026</span>
              </div>
              <div>
                <span className="text-slate-500 block font-medium">Total Attendance Score:</span>
                <span className="font-extrabold text-emerald-700">96.4% Good</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
                <thead>
                  <tr className="bg-[#fafafa] border-b border-slate-100 text-slate-600 font-medium text-[12px]">
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 whitespace-nowrap">Attendance Date</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">In Time</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Out Time</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Working Hours</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center whitespace-nowrap">Status</th>
                    <th className="py-1.5 px-2.5 text-center whitespace-nowrap">Regularization Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb] text-slate-600 font-normal text-[12px] leading-[18px]">
                  {displayRows.slice(0, 15).map((row, idx) => (
                    <tr key={row.id} className="hover:bg-[#f9fafb] transition-colors border-b border-slate-100">
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-400 font-normal text-[12px] leading-[18px]">{idx + 1}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-600 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.date}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.inTime !== '—' ? row.inTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-600 font-normal text-[12px] leading-[18px]">{row.outTime !== '—' ? row.outTime : '-'}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500 font-normal text-[12px] leading-[18px] whitespace-nowrap">{row.totalHours || ''}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">{getStatusBadge(row.actual)}</td>
                      <td className="py-1.5 px-2.5 text-center">{row.status !== '—' ? getStatusBadge(row.status) : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= SUB-TAB 8: ATTENDANCE HISTORY ================= */}
      {activeTab === 'history' && (
        <div className="space-y-4 py-1">
          <div className="relative pl-6 space-y-3.5 before:absolute before:left-[9px] before:top-2.5 before:bottom-2.5 before:w-[1.5px] before:bg-slate-200">
            {[
              { id: 1, type: 'Leave Application (Casual Leave)', date: '08 Jul, 2026', requestedIn: 'Full Day', requestedOut: '1 Day', reason: 'Personal Family Emergency', status: 'Approved', approver: 'Md Badsha Hossain (Supervisor)', appDate: '08 Jul, 2026 09:15 AM', color: 'bg-emerald-500' },
              { id: 2, type: 'Attendance Adjustment', date: '04 Jul, 2026', requestedIn: '08:00 AM', requestedOut: '05:00 PM', reason: 'Fingerprint Machine Error', status: 'Approved', approver: 'Md Badsha Hossain (Supervisor)', appDate: '05 Jul, 2026 10:15 AM', color: 'bg-emerald-500' },
              { id: 3, type: 'Off Day Swap (Comp Off)', date: '05 Jul, 2026', requestedIn: '08:15 AM', requestedOut: '06:13 PM', reason: 'Worked on Offday for client deployment', status: 'Approved', approver: 'Md Badsha Hossain (Supervisor)', appDate: '06 Jul, 2026 11:30 AM', color: 'bg-emerald-500' },
              { id: 4, type: 'Shift Change Request', date: '01 Jul, 2026', requestedIn: '02:00 PM', requestedOut: '11:00 PM', reason: 'Emergency night deployment roster', status: 'Approved', approver: 'HR Operations Manager', appDate: '01 Jul, 2026 09:00 AM', color: 'bg-emerald-500' },
              { id: 5, type: 'Overtime Claim Request', date: '28 Jun, 2026', requestedIn: '06:00 PM', requestedOut: '09:00 PM', reason: 'System Migration Deployment', status: 'Pending', approver: 'Pending Supervisor Approval', appDate: '28 Jun, 2026 09:30 PM', color: 'bg-amber-500' },
              { id: 6, type: 'Weekend Duty Swap', date: '20 Jun, 2026', requestedIn: '09:00 AM', requestedOut: '06:00 PM', reason: 'Personal Emergency on Weekend', status: 'Rejected', approver: 'HR Operations Manager', appDate: '21 Jun, 2026 10:00 AM', color: 'bg-rose-500' },
            ].map((log) => (
              <div key={log.id} className="relative group">
                {/* Connected Timeline Dot */}
                <span className={`absolute -left-[21px] top-2 w-3 h-3 rounded-full ${log.color} ring-4 ring-white shadow-2xs z-10`} />

                <div className="p-3 bg-white hover:bg-slate-50/80 border border-slate-200 rounded-sm transition-colors space-y-1.5 shadow-2xs font-sans">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-[13px] tracking-tight">{log.type}</span>
                      {getStatusBadge(log.status)}
                    </div>
                    <span className="text-[11px] text-slate-400 font-normal">{log.appDate}</span>
                  </div>

                  <div className="text-[12px] text-slate-600 font-medium flex flex-wrap gap-x-4 gap-y-1">
                    <span>Requested Date: <strong className="text-slate-800 font-semibold">{log.date}</strong></span>
                    <span>In/Duration: <strong className="text-slate-800 font-semibold">{log.requestedIn}</strong></span>
                    <span>Out/Days: <strong className="text-slate-800 font-semibold">{log.requestedOut}</strong></span>
                  </div>

                  <p className="text-[11.5px] text-slate-600 font-normal">
                    Reason: <span className="italic text-slate-700">"{log.reason}"</span>
                  </p>

                  <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-medium text-slate-500">Approved / Processed by: <span className="font-semibold text-slate-700">{log.approver}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MODALS ================= */}



      {/* 2. OFFDAY SWAP MODAL */}
      <Modal
        isOpen={isOffdaySwapModalOpen}
        onClose={() => setIsOffdaySwapModalOpen(false)}
        title="Off Day Swap (Comp Off) Requisition"
        description="Request compensatory off-day leave for working on weekends or holidays"
        size="md"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOffdaySwapModalOpen(false)} className="h-7.5 text-[11.5px] font-bold">
              Cancel
            </Button>
            <Button
              onClick={handleSubmitOffdaySwap}
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] h-7.5 px-3.5 font-bold"
            >
              Submit Comp-Off Request
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmitOffdaySwap} className="space-y-3 text-left">
          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Worked Offday / Attendance Date (কোন বন্ধের দিন কাজ করা হয়েছে)
            </FormLabel>
            <Select
              value={workedOffdayDate}
              onChange={(e) => setWorkedOffdayDate(e.target.value)}
              options={dateOptionsWithDetails.map(d => ({ id: d.isoDate, name: d.name }))}
            />
          </div>

          {/* LIVE WORKED OFFDAY PUNCH TIME & CALENDAR TYPE CARD */}
          {activeOffdayDetails && (
            <div className={`p-3 rounded-xs border text-[12px] space-y-1 ${activeOffdayDetails.actual === 'Offday'
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
              : 'bg-blue-50/80 border-blue-200 text-blue-900'
              }`}>
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon size={14} />
                  <span>Calendar Type:</span>
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-extrabold ${activeOffdayDetails.actual === 'Offday'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 text-white'
                  }`}>
                  {activeOffdayDetails.actual === 'Offday' ? 'OFF DAY WORKED (ছুটির দিন)' : 'REGULAR WORK DAY'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 font-semibold text-[11.5px] text-slate-700 border-t border-slate-200/60 mt-1">
                <div>Recorded In: <strong className="text-slate-900 block font-extrabold">{activeOffdayDetails.inTime}</strong></div>
                <div>Recorded Out: <strong className="text-slate-900 block font-extrabold">{activeOffdayDetails.outTime}</strong></div>
                <div>Total Hours: <strong className="text-indigo-700 block font-extrabold">{activeOffdayDetails.totalHours}</strong></div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Target Swap Leave Date (যেই কাজের দিনে ছুটি নিতে চান)
            </FormLabel>
            <DatePicker value={swapTargetDate} onChange={(val) => setSwapTargetDate(val)} className="w-full" />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">Reason for Swap</FormLabel>
            <Textarea
              placeholder="Specify reason for compensatory off"
              value={swapReason}
              onChange={(e) => setSwapReason(e.target.value)}
              rows={2}
              className="text-[12px] resize-none"
            />
          </div>
        </form>
      </Modal>

      {/* 3. SHIFT CHANGE MODAL */}
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
              <span className="text-rose-500 mr-0.5">*</span> Shift Date
            </FormLabel>
            <DatePicker value={reqShiftDate} onChange={(val) => setReqShiftDate(val)} className="w-full" />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">Requested Roster Shift</FormLabel>
            <Select
              value={reqCalendarName}
              onChange={(e) => setReqCalendarName(e.target.value)}
              options={[
                { id: 'Morning 8:00AM to 5:00PM', name: 'Morning 8:00AM to 5:00PM' },
                { id: 'Evening 2:00PM to 11:00PM', name: 'Evening 2:00PM to 11:00PM' },
                { id: 'Night 10:00PM to 7:00AM', name: 'Night 10:00PM to 7:00AM' },
              ]}
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">Reason for Shift Change</FormLabel>
            <Textarea
              placeholder="Specify reason for shift change"
              value={shiftReason}
              onChange={(e) => setShiftReason(e.target.value)}
              rows={2}
              className="text-[12px] resize-none"
            />
          </div>
        </form>
      </Modal>

      {/* 4. OVERTIME MODAL */}
      <Modal
        isOpen={isOvertimeModalOpen}
        onClose={() => setIsOvertimeModalOpen(false)}
        title="Submit Overtime Claim"
        description="Requisition extra working hours for reimbursement approval"
        size="md"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOvertimeModalOpen(false)} className="h-7.5 text-[11.5px] font-bold">
              Cancel
            </Button>
            <Button
              onClick={handleSubmitOvertime}
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] h-7.5 px-3.5 font-bold"
            >
              Submit OT Claim
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmitOvertime} className="space-y-3 text-left">
          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Overtime Date
            </FormLabel>
            <DatePicker value={otDate} onChange={(val) => setOtDate(val)} className="w-full" />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
              <span className="text-rose-500 mr-0.5">*</span> Extra OT Hours
            </FormLabel>
            <Input type="number" step="0.5" value={otHoursInput} onChange={(e) => setOtHoursInput(e.target.value)} className="text-[12px]" />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">Reason for Overtime</FormLabel>
            <Textarea placeholder="Specify work done during OT hours" value={otReason} onChange={(e) => setOtReason(e.target.value)} rows={2} className="text-[12px] resize-none" />
          </div>
        </form>
      </Modal>

    </div>
  );
}
