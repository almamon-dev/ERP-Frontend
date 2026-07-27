import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  CreditCard, Plus, Eye, Edit2, Trash2, CheckCircle2, Clock, Upload, Info, Search, RotateCcw, CheckCircle, XCircle, FileText
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import DatePicker from '@/components/ui/date-picker';
import Modal from '@/components/modals/modal';

export default function IOUPage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam === 'supervisor-report' ? 'supervisor-report' : 'application';

  // ---------------- IOU APPLICATION FORM & DATA ----------------
  const [refNo, setRefNo] = useState('IOU-2026-024');
  const [amount, setAmount] = useState('');
  const [settleDate, setSettleDate] = useState('2026-08-05');
  const [purpose, setPurpose] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);

  const [filterFromDate, setFilterFromDate] = useState('2026-07-01');
  const [filterToDate, setFilterToDate] = useState('2026-07-31');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [iouList, setIouList] = useState([
    {
      id: 1,
      refNo: 'IOU-2026-012',
      amount: '৳ 12,000',
      purpose: 'Client Meeting & Dinner',
      settleDate: '2026-07-30',
      attachment: 'receipt_dinner.pdf',
      appDate: '15,Jul 26 10:21 AM',
      status: 'Approved',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    },
    {
      id: 2,
      refNo: 'IOU-2026-018',
      amount: '৳ 5,500',
      purpose: 'Emergency Hardware Adapter',
      settleDate: '2026-08-02',
      attachment: null,
      appDate: '24,Jul 26 02:45 PM',
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    }
  ]);

  // ---------------- SUPERVISOR REPORT DATA ----------------
  const [supervisorList, setSupervisorList] = useState([
    {
      id: 101,
      empName: 'Md. Tanvir Hossain',
      empId: '15208',
      designation: 'Frontend Developer',
      refNo: 'IOU-2026-089',
      amount: '৳ 8,500',
      purpose: 'Project On-Site Deployment Transport',
      settleDate: '2026-08-05',
      attachment: 'travel_invoice.pdf',
      appDate: '26,Jul 26 09:15 AM',
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    },
    {
      id: 102,
      empName: 'Farhana Yasmin',
      empId: '15214',
      designation: 'UI/UX Designer',
      refNo: 'IOU-2026-077',
      amount: '৳ 15,000',
      purpose: 'Design Assets & Software Subscription',
      settleDate: '2026-08-10',
      attachment: null,
      appDate: '20,Jul 26 01:20 PM',
      status: 'Approved',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    },
    {
      id: 103,
      empName: 'Kazi Rakib',
      empId: '15230',
      designation: 'QA Engineer',
      refNo: 'IOU-2026-065',
      amount: '৳ 4,000',
      purpose: 'Testing Device Accessories',
      settleDate: '2026-07-28',
      attachment: null,
      appDate: '18,Jul 26 11:10 AM',
      status: 'Rejected',
      statusBadge: 'bg-rose-50 text-rose-700 border-rose-300'
    }
  ]);

  const [selectedViewItem, setSelectedViewItem] = useState<any | null>(null);

  // Apply IOU Requisition
  const handleApplyIOU = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !purpose) {
      alert('Please fill in all required fields (Amount and Purpose).');
      return;
    }

    const newEntry = {
      id: Date.now(),
      refNo: refNo,
      amount: `৳ ${Number(amount).toLocaleString()}`,
      purpose: purpose,
      settleDate: settleDate,
      attachment: attachment ? attachment.name : null,
      appDate: new Date().toLocaleString(),
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    };

    setIouList([newEntry, ...iouList]);
    setAmount('');
    setPurpose('');
    setRefNo(`IOU-2026-0${Math.floor(25 + Math.random() * 75)}`);
    alert('IOU Cash Advance Requisition Submitted Successfully!');
  };

  const handleDeleteRecord = (id: number) => {
    if (confirm('Are you sure you want to delete this IOU requisition?')) {
      setIouList(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleApproveSupervisor = (id: number) => {
    setSupervisorList(prev => prev.map(item => item.id === id ? { ...item, status: 'Approved', statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300' } : item));
  };

  const handleRejectSupervisor = (id: number) => {
    setSupervisorList(prev => prev.map(item => item.id === id ? { ...item, status: 'Rejected', statusBadge: 'bg-rose-50 text-rose-700 border-rose-300' } : item));
  };

  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">
      
      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div className="pb-1">
        <h1 className="text-[20px] font-bold text-slate-900 tracking-tight">
          {activeTab === 'application' ? 'IOU Application' : 'IOU Supervisor Report'}
        </h1>
        <p className="text-[13px] font-medium text-slate-500 mt-0.5">
          {activeTab === 'application' 
            ? 'Apply for temporary cash advances for official expenses and track settlements.' 
            : 'Review, verify, and approve team member IOU cash advance requisitions.'}
        </p>
      </div>

      {/* ================= TAB 1: IOU APPLICATION ================= */}
      {activeTab === 'application' && (
        <div className="space-y-4">
          
          {/* TOP CARD: APPLY IOU REQUISITION FORM */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <form onSubmit={handleApplyIOU} className="space-y-3.5">
              
              {/* ROW 1: Ref No, Requested Amount, Settlement Target Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Input 
                  label="IOU Reference No."
                  value={refNo}
                  readOnly
                  className="h-[36px] text-[12.5px] bg-slate-50 text-slate-700 font-bold"
                />

                <Input 
                  label="* Requested Amount (৳)"
                  type="number"
                  placeholder="Enter amount (e.g. 10000)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-[36px] text-[12.5px]"
                />

                <DatePicker 
                  label="* Settlement Target Date"
                  value={settleDate}
                  onChange={(val) => setSettleDate(val)}
                  className="w-full"
                />
              </div>

              {/* ROW 2: Purpose / Reason */}
              <Input 
                label="* Purpose of Advance"
                placeholder="Specify official purpose (e.g. Client entertainment, Urgent site deployment)"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="h-[36px] text-[12.5px]"
              />

              {/* ROW 3: UPLOAD ATTACHMENT & APPLY BUTTON */}
              <div className="flex items-center gap-3 pt-1">
                <label className="flex items-center gap-1.5 px-3 py-1.5 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded text-[12px] font-bold cursor-pointer transition-colors shadow-2xs">
                  <Upload size={14} className="stroke-[2.5]" />
                  <span>Upload Supporting Doc</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => setAttachment(e.target.files ? e.target.files[0] : null)} 
                  />
                </label>

                <Info size={16} className="text-rose-500 cursor-pointer" title="Only PDF, PNG, JPG files up to 2MB allowed" />
                {attachment && <span className="text-[11.5px] text-slate-600 font-semibold truncate max-w-[180px]">{attachment.name}</span>}

                <Button
                  type="submit"
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-extrabold px-5 h-8.5 rounded transition-colors uppercase tracking-wider shadow-2xs cursor-pointer"
                >
                  APPLY IOU REQUISITION
                </Button>
              </div>

            </form>
          </div>

          {/* BOTTOM CARD: IOU REQUISITION LIST TABLE */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            
            {/* Header with Title & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-[15px] font-bold text-slate-900">IOU Requisition List</h3>
              
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search ref no or purpose..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                  value={filterFromDate}
                  onChange={(val) => setFilterFromDate(val)}
                  size="sm"
                  className="w-40"
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">To Date</FormLabel>
                <DatePicker 
                  value={filterToDate}
                  onChange={(val) => setFilterToDate(val)}
                  size="sm"
                  className="w-40"
                />
              </div>

              <div className="flex flex-col gap-1 w-36">
                <FormLabel className="text-[11px] font-bold text-slate-600 !mb-0">Status</FormLabel>
                <Select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  options={[
                    { id: 'All', name: 'All Statuses' },
                    { id: 'Pending', name: 'Pending' },
                    { id: 'Approved', name: 'Approved' },
                    { id: 'Rejected', name: 'Rejected' },
                  ]}
                />
              </div>

              <Button className="h-8 bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-extrabold px-4 rounded transition-colors uppercase tracking-wider">
                VIEW
              </Button>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">IOU Reference</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-right">Requested Amount</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 max-w-xs">Purpose</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Target Settlement</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Attachment</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Application Date</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {iouList.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-900">{item.refNo}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-right font-extrabold text-slate-900">{item.amount}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-700 text-[11.5px] leading-snug">{item.purpose}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600 font-semibold whitespace-nowrap">{item.settleDate}</td>
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
                            onClick={() => setSelectedViewItem(item)}
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

        </div>
      )}

      {/* ================= TAB 2: SUPERVISOR REPORT ================= */}
      {activeTab === 'supervisor-report' && (
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
          
          {/* Header with Title & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-[15px] font-bold text-slate-900">Team IOU Requisitions Report</h3>
            
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search employee or ref..."
                className="w-full h-8 px-3 pr-8 text-[12px] border border-slate-300 rounded outline-none focus:border-emerald-600 font-medium"
              />
              <Search size={14} className="absolute right-2.5 top-2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Employee Details</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">IOU Ref</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-right">Amount</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 max-w-xs">Purpose</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Settlement Target</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Application Date</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                  <th className="py-2.5 px-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                {supervisorList.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <div>
                        <span className="font-bold text-slate-900 text-[13px] block">{item.empName}</span>
                        <span className="text-[11px] text-slate-500 font-medium">ID: {item.empId} • {item.designation}</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-800">{item.refNo}</td>
                    <td className="py-2.5 px-3 border-r border-slate-200 text-right font-extrabold text-slate-900">{item.amount}</td>
                    <td className="py-2.5 px-3 border-r border-slate-200 text-slate-700 text-[11.5px] leading-snug">{item.purpose}</td>
                    <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600 font-semibold whitespace-nowrap">{item.settleDate}</td>
                    <td className="py-2.5 px-3 border-r border-slate-200 text-slate-500 whitespace-nowrap">{item.appDate}</td>
                    <td className="py-2.5 px-3 border-r border-slate-200 text-center">
                      <span className={`px-2 py-0.2 text-[10.5px] font-extrabold rounded border ${item.statusBadge}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        {item.status === 'Pending' ? (
                          <>
                            <button 
                              onClick={() => handleApproveSupervisor(item.id)}
                              className="px-2.5 py-1 text-[11px] font-bold bg-[#008060] hover:bg-[#006e52] text-white rounded flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                              title="Approve"
                            >
                              <CheckCircle size={12} /> Approve
                            </button>
                            <button 
                              onClick={() => handleRejectSupervisor(item.id)}
                              className="px-2.5 py-1 text-[11px] font-bold bg-rose-600 hover:bg-rose-700 text-white rounded flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                              title="Reject"
                            >
                              <XCircle size={12} /> Reject
                            </button>
                          </>
                        ) : (
                          <button 
                            onClick={() => setSelectedViewItem(item)}
                            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer" 
                            title="View Details"
                          >
                            <Eye size={13} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* VIEW DETAILS MODAL */}
      {selectedViewItem && (
        <Modal
          isOpen={!!selectedViewItem}
          onClose={() => setSelectedViewItem(null)}
          title="IOU Cash Advance Details"
          description={`Ref: ${selectedViewItem.refNo}`}
          size="md"
          footer={
            <Button 
              onClick={() => setSelectedViewItem(null)} 
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-bold"
            >
              Close Window
            </Button>
          }
        >
          <div className="space-y-4 text-left">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-[13px]">Ref: {selectedViewItem.refNo}</h4>
                <p className="text-[11.5px] text-slate-500">Requested Amount: <strong className="text-slate-900">{selectedViewItem.amount}</strong></p>
              </div>
              <span className={`px-2 py-0.5 text-[10.5px] font-extrabold rounded border ${selectedViewItem.statusBadge}`}>
                {selectedViewItem.status}
              </span>
            </div>

            <div className="space-y-2 text-[12.5px]">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Target Settlement Date</span>
                <p className="font-semibold text-slate-800">{selectedViewItem.settleDate}</p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Purpose of Advance</span>
                <p className="font-medium text-slate-700 mt-0.5">{selectedViewItem.purpose}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
