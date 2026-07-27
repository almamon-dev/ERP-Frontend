import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Users, Plus, Eye, Edit2, Trash2, CheckCircle2, Clock, Upload, Info, Search, RotateCcw, Calendar
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import DatePicker from '@/components/ui/date-picker';
import Modal from '@/components/modals/modal';

export default function SupervisorReportingStructurePage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam === 'offday-assign' ? 'offday-assign' : tabParam === 'monthly-offday-assign' ? 'monthly-offday-assign' : 'calendar-assign';

  // ---------------- STATE 1: CALENDAR ASSIGN ----------------
  const [cEmp, setCEmp] = useState('Md. Tanvir Hossain [15208]');
  const [cCalendar, setCCalendar] = useState('Morning 8:00AM to 5:00PM');
  const [cEffectiveDate, CSetEffectiveDate] = useState('2026-08-01');
  const [cReason, setCReason] = useState('');

  const [calendarAssignList, setCalendarAssignList] = useState([
    {
      id: 1,
      empName: 'Md. Tanvir Hossain',
      empId: '15208',
      designation: 'Frontend Developer',
      calendarName: 'Morning 8:00AM to 5:00PM',
      effectiveDate: '2026-08-01',
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    },
    {
      id: 2,
      empName: 'Farhana Yasmin',
      empId: '15214',
      designation: 'UI/UX Designer',
      calendarName: 'Day 9:00AM to 6:00PM',
      effectiveDate: '2026-07-15',
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    }
  ]);

  // ---------------- STATE 2: OFFDAY ASSIGN ----------------
  const [oEmp, setOEmp] = useState('Kazi Rakib [15230]');
  const [oOffday, setOOffday] = useState('Friday & Saturday');
  const [oEffectiveDate, OSetEffectiveDate] = useState('2026-08-01');

  const [offdayAssignList, setOffdayAssignList] = useState([
    {
      id: 1,
      empName: 'Kazi Rakib',
      empId: '15230',
      designation: 'QA Engineer',
      offdays: 'Friday & Saturday',
      effectiveDate: '2026-08-01',
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    },
    {
      id: 2,
      empName: 'Md. Kamrul Hasan',
      empId: '15199',
      designation: 'Backend Engineer',
      offdays: 'Sunday Only',
      effectiveDate: '2026-07-01',
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    }
  ]);

  // ---------------- STATE 3: MONTHLY OFFDAY ASSIGN ----------------
  const [mEmp, setMEmp] = useState('Md. Tanvir Hossain [15208]');
  const [mMonth, setMMonth] = useState('2026-08-01');
  const [mDates, setMDates] = useState('07 Aug, 14 Aug, 21 Aug, 28 Aug');

  const [monthlyOffdayList, setMonthlyOffdayList] = useState([
    {
      id: 1,
      empName: 'Md. Tanvir Hossain',
      empId: '15208',
      designation: 'Frontend Developer',
      monthYear: 'August 2026',
      offdaysCount: '4 Days',
      assignedDates: '07 Aug, 14 Aug, 21 Aug, 28 Aug',
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Assigned',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    },
    {
      id: 2,
      empName: 'Farhana Yasmin',
      empId: '15214',
      designation: 'UI/UX Designer',
      monthYear: 'August 2026',
      offdaysCount: '5 Days',
      assignedDates: '01 Aug, 08 Aug, 15 Aug, 22 Aug, 29 Aug',
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Assigned',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    }
  ]);

  const [selectedViewItem, setSelectedViewItem] = useState<any | null>(null);

  // Submits
  const handleAssignCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      empName: cEmp.split('[')[0].trim(),
      empId: cEmp.includes('[') ? cEmp.split('[')[1].replace(']', '') : '15200',
      designation: 'Team Member',
      calendarName: cCalendar,
      effectiveDate: cEffectiveDate,
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    };
    setCalendarAssignList([newEntry, ...calendarAssignList]);
    alert('Roster Calendar Assigned Successfully!');
  };

  const handleAssignOffday = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      empName: oEmp.split('[')[0].trim(),
      empId: oEmp.includes('[') ? oEmp.split('[')[1].replace(']', '') : '15200',
      designation: 'Team Member',
      offdays: oOffday,
      effectiveDate: oEffectiveDate,
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    };
    setOffdayAssignList([newEntry, ...offdayAssignList]);
    alert('Weekly Offday Assigned Successfully!');
  };

  const handleAssignMonthlyOffday = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      empName: mEmp.split('[')[0].trim(),
      empId: mEmp.includes('[') ? mEmp.split('[')[1].replace(']', '') : '15200',
      designation: 'Team Member',
      monthYear: 'August 2026',
      offdaysCount: '4 Days',
      assignedDates: mDates,
      assignedBy: 'Al Mamon (Supervisor)',
      status: 'Assigned',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    };
    setMonthlyOffdayList([newEntry, ...monthlyOffdayList]);
    alert('Monthly Offday Schedule Assigned Successfully!');
  };

  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">
      
      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div className="pb-1">
        <h1 className="text-[20px] font-bold text-slate-900 tracking-tight">
          {activeTab === 'calendar-assign' ? 'Calender Assign' : activeTab === 'offday-assign' ? 'Offday Assign' : 'Monthly Offday Assign'}
        </h1>
        <p className="text-[13px] font-medium text-slate-500 mt-0.5">
          {activeTab === 'calendar-assign' 
            ? 'Assign and manage roster work shifts and calendar schedules for team members.' 
            : activeTab === 'offday-assign'
              ? 'Assign weekly offdays, weekend rules, and rest days for team members.'
              : 'Assign monthly custom offday schedules and holiday rotations for team members.'}
        </p>
      </div>

      {/* ================= TAB 1: CALENDAR ASSIGN ================= */}
      {activeTab === 'calendar-assign' && (
        <div className="space-y-4">
          
          {/* FORM CARD */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <form onSubmit={handleAssignCalendar} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Select Employee
                  </FormLabel>
                  <Select 
                    value={cEmp}
                    onChange={(e) => setCEmp(e.target.value)}
                    options={[
                      { id: 'Md. Tanvir Hossain [15208]', name: 'Md. Tanvir Hossain [15208]' },
                      { id: 'Farhana Yasmin [15214]', name: 'Farhana Yasmin [15214]' },
                      { id: 'Kazi Rakib [15230]', name: 'Kazi Rakib [15230]' },
                    ]}
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Select Work Calendar / Shift
                  </FormLabel>
                  <Select 
                    value={cCalendar}
                    onChange={(e) => setCCalendar(e.target.value)}
                    options={[
                      { id: 'Morning 8:00AM to 5:00PM', name: 'Morning 8:00AM to 5:00PM' },
                      { id: 'Day 9:00AM to 6:00PM', name: 'Day 9:00AM to 6:00PM' },
                      { id: 'Evening 2:00PM to 11:00PM', name: 'Evening 2:00PM to 11:00PM' },
                      { id: 'Night 10:00PM to 7:00AM', name: 'Night 10:00PM to 7:00AM' },
                    ]}
                  />
                </div>

                <DatePicker 
                  label="* Effective Start Date"
                  value={cEffectiveDate}
                  onChange={(val) => CSetEffectiveDate(val)}
                  className="w-full"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Button
                  type="submit"
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-extrabold px-5 h-8.5 rounded transition-colors uppercase tracking-wider shadow-2xs cursor-pointer"
                >
                  ASSIGN CALENDAR
                </Button>
              </div>
            </form>
          </div>

          {/* TABLE CARD */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-[15px] font-bold text-slate-900">Calendar Assignments Log</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Employee Details</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Assigned Calendar</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Effective Date</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Assigned By</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {calendarAssignList.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200">
                        <div>
                          <span className="font-bold text-slate-900 text-[13px] block">{item.empName}</span>
                          <span className="text-[11px] text-slate-500 font-medium">ID: {item.empId} • {item.designation}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-800">{item.calendarName}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600 font-semibold whitespace-nowrap">{item.effectiveDate}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-500">{item.assignedBy}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center">
                        <span className={`px-2 py-0.2 text-[10.5px] font-extrabold rounded border ${item.statusBadge}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs" title="Edit">
                            <Edit2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ================= TAB 2: OFFDAY ASSIGN ================= */}
      {activeTab === 'offday-assign' && (
        <div className="space-y-4">
          
          {/* FORM CARD */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <form onSubmit={handleAssignOffday} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Select Employee
                  </FormLabel>
                  <Select 
                    value={oEmp}
                    onChange={(e) => setOEmp(e.target.value)}
                    options={[
                      { id: 'Kazi Rakib [15230]', name: 'Kazi Rakib [15230]' },
                      { id: 'Md. Tanvir Hossain [15208]', name: 'Md. Tanvir Hossain [15208]' },
                      { id: 'Farhana Yasmin [15214]', name: 'Farhana Yasmin [15214]' },
                    ]}
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Weekly Offdays
                  </FormLabel>
                  <Select 
                    value={oOffday}
                    onChange={(e) => setOOffday(e.target.value)}
                    options={[
                      { id: 'Friday & Saturday', name: 'Friday & Saturday' },
                      { id: 'Friday Only', name: 'Friday Only' },
                      { id: 'Saturday Only', name: 'Saturday Only' },
                      { id: 'Sunday Only', name: 'Sunday Only' },
                    ]}
                  />
                </div>

                <DatePicker 
                  label="* Effective Start Date"
                  value={oEffectiveDate}
                  onChange={(val) => OSetEffectiveDate(val)}
                  className="w-full"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Button
                  type="submit"
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-extrabold px-5 h-8.5 rounded transition-colors uppercase tracking-wider shadow-2xs cursor-pointer"
                >
                  ASSIGN OFFDAY
                </Button>
              </div>
            </form>
          </div>

          {/* TABLE CARD */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-[15px] font-bold text-slate-900">Weekly Offdays Log</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Employee Details</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Assigned Offdays</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Effective Date</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Assigned By</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {offdayAssignList.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200">
                        <div>
                          <span className="font-bold text-slate-900 text-[13px] block">{item.empName}</span>
                          <span className="text-[11px] text-slate-500 font-medium">ID: {item.empId} • {item.designation}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-[#008060]">{item.offdays}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600 font-semibold whitespace-nowrap">{item.effectiveDate}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-500">{item.assignedBy}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center">
                        <span className={`px-2 py-0.2 text-[10.5px] font-extrabold rounded border ${item.statusBadge}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs" title="Edit">
                            <Edit2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ================= TAB 3: MONTHLY OFFDAY ASSIGN ================= */}
      {activeTab === 'monthly-offday-assign' && (
        <div className="space-y-4">
          
          {/* FORM CARD */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <form onSubmit={handleAssignMonthlyOffday} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Select Employee
                  </FormLabel>
                  <Select 
                    value={mEmp}
                    onChange={(e) => setMEmp(e.target.value)}
                    options={[
                      { id: 'Md. Tanvir Hossain [15208]', name: 'Md. Tanvir Hossain [15208]' },
                      { id: 'Farhana Yasmin [15214]', name: 'Farhana Yasmin [15214]' },
                      { id: 'Kazi Rakib [15230]', name: 'Kazi Rakib [15230]' },
                    ]}
                  />
                </div>

                <DatePicker 
                  label="* Target Month & Year"
                  value={mMonth}
                  onChange={(val) => setMMonth(val)}
                  format="monthYear"
                  className="w-full"
                />

                <Input 
                  label="* Specific Offday Dates"
                  placeholder="e.g. 07 Aug, 14 Aug, 21 Aug, 28 Aug"
                  value={mDates}
                  onChange={(e) => setMDates(e.target.value)}
                  className="h-[36px] text-[12.5px]"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Button
                  type="submit"
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-extrabold px-5 h-8.5 rounded transition-colors uppercase tracking-wider shadow-2xs cursor-pointer"
                >
                  ASSIGN MONTHLY OFFDAYS
                </Button>
              </div>
            </form>
          </div>

          {/* TABLE CARD */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-[15px] font-bold text-slate-900">Monthly Offdays Roster Log</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Employee Details</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Month / Year</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Offdays Count</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 max-w-xs">Assigned Offday Dates</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Assigned By</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {monthlyOffdayList.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200">
                        <div>
                          <span className="font-bold text-slate-900 text-[13px] block">{item.empName}</span>
                          <span className="text-[11px] text-slate-500 font-medium">ID: {item.empId} • {item.designation}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-800">{item.monthYear}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center font-extrabold text-slate-900">{item.offdaysCount}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 font-semibold text-slate-700 text-[11.5px] leading-snug">{item.assignedDates}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-500">{item.assignedBy}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center">
                        <span className={`px-2 py-0.2 text-[10.5px] font-extrabold rounded border ${item.statusBadge}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs" title="Edit">
                            <Edit2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
