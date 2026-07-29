import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  FileCheck, Plus, Eye, Edit2, Trash2, Upload, Info, Search, CheckCircle, XCircle, FileText
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
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
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
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200'
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
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200'
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
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
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
      statusBadge: 'bg-rose-50 text-rose-700 border-rose-200'
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
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200'
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
    setSupervisorList(prev => prev.map(item => item.id === id ? { ...item, status: 'Approved', statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200' } : item));
  };

  const handleRejectSupervisor = (id: number) => {
    setSupervisorList(prev => prev.map(item => item.id === id ? { ...item, status: 'Rejected', statusBadge: 'bg-rose-50 text-rose-700 border-rose-200' } : item));
  };

  return (
    <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-5 font-sans antialiased pb-20">
      
      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div>
        <h1 className="text-[19px] font-semibold text-slate-800 flex items-center gap-2">
          <FileCheck size={20} className="text-[#008060]" />
          {activeTab === 'application' ? 'IOU Application' : 'IOU Supervisor Report'}
        </h1>
        <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
          {activeTab === 'application' 
            ? 'Apply for temporary cash advances for official expenses and track settlements.' 
            : 'Review, verify, and approve team member IOU cash advance requisitions.'}
        </p>
      </div>

      {/* ================= TAB 1: IOU APPLICATION ================= */}
      {activeTab === 'application' && (
        <div className="space-y-4">
          
          {/* TOP CARD: APPLY IOU REQUISITION FORM */}
          <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-4">
            <form onSubmit={handleApplyIOU} className="space-y-3.5">
              
              {/* ROW 1: Ref No, Requested Amount, Settlement Target Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Input 
                  label="IOU Reference No."
                  value={refNo}
                  readOnly
                  className="h-8 text-[12px] bg-slate-50 text-slate-700 font-mono font-medium"
                />

                <Input 
                  label="Requested Amount (৳)"
                  type="number"
                  placeholder="Enter amount (e.g. 10000)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-8 text-[12px]"
                />

                <DatePicker 
                  label="Settlement Target Date"
                  value={settleDate}
                  onChange={(val) => setSettleDate(val)}
                  className="w-full"
                />
              </div>

              {/* ROW 2: Purpose / Reason */}
              <Input 
                label="Purpose of Advance"
                placeholder="Specify official purpose (e.g. Client entertainment, Urgent site deployment)"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="h-8 text-[12px]"
              />

              {/* ROW 3: UPLOAD ATTACHMENT & APPLY BUTTON */}
              <div className="flex items-center gap-3 pt-1">
                <label className="flex items-center gap-1.5 px-3 py-1 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xs text-[12px] font-medium cursor-pointer transition-colors">
                  <Upload size={13} className="text-[#008060]" />
                  <span>Attach Document</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => setAttachment(e.target.files ? e.target.files[0] : null)} 
                  />
                </label>

                {attachment && <span className="text-[11.5px] text-slate-600 font-medium truncate max-w-[180px]">{attachment.name}</span>}

                <Button
                  type="submit"
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-medium px-4 h-8 rounded-xs cursor-pointer ml-auto"
                >
                  Submit IOU Requisition
                </Button>
              </div>

            </form>
          </div>

          {/* BOTTOM CARD: IOU REQUISITION LIST TABLE */}
          <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-4">
            
            {/* Header with Title & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-[13.5px] font-semibold text-slate-800">IOU Requisitions List</h3>
              
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search ref no or purpose..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-8 px-3 pr-8 text-[12px] border border-slate-200 rounded-xs outline-none focus:border-[#008060] font-medium"
                />
                <Search size={14} className="absolute right-2.5 top-2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-end gap-3 pb-3 border-b border-slate-100">
              <div className="flex flex-col gap-1">
                <FormLabel className="text-[11.5px] font-medium text-slate-600 !mb-0">From Date</FormLabel>
                <DatePicker 
                  value={filterFromDate}
                  onChange={(val) => setFilterFromDate(val)}
                  size="sm"
                  className="w-36"
                />
              </div>

              <div className="flex flex-col gap-1">
                <FormLabel className="text-[11.5px] font-medium text-slate-600 !mb-0">To Date</FormLabel>
                <DatePicker 
                  value={filterToDate}
                  onChange={(val) => setFilterToDate(val)}
                  size="sm"
                  className="w-36"
                />
              </div>

              <div className="flex flex-col gap-1 w-36">
                <FormLabel className="text-[11.5px] font-medium text-slate-600 !mb-0">Status</FormLabel>
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

              <Button className="h-8 bg-slate-800 hover:bg-slate-900 text-white text-[12px] font-medium px-3.5 rounded-xs">
                Filter Results
              </Button>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">IOU Reference</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">Requested Amount</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 max-w-xs">Purpose</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">Target Settlement</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Attachment</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">Application Date</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Status</th>
                    <th className="py-1.5 px-2.5 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                  {iouList.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500 font-medium">{idx + 1}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.refNo}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 font-semibold text-slate-800">{item.amount}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700 leading-snug">{item.purpose}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700 whitespace-nowrap">{item.settleDate}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                        {item.attachment ? (
                          <span className="text-[#008060] underline font-medium cursor-pointer hover:text-emerald-800">Attached</span>
                        ) : '—'}
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700 whitespace-nowrap">{item.appDate}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                        <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.statusBadge}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-1.5 px-2.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button 
                            onClick={() => setSelectedViewItem(item)}
                            className="p-1 text-slate-500 hover:text-emerald-700 rounded hover:bg-slate-100 cursor-pointer" 
                            title="View Details"
                          >
                            <Eye size={14} />
                          </button>
                          {item.status === 'Pending' && (
                            <>
                              <button className="p-1 text-slate-500 hover:text-blue-700 rounded hover:bg-slate-100 cursor-pointer" title="Edit">
                                <Edit2 size={14} />
                              </button>
                              <button 
                                onClick={() => handleDeleteRecord(item.id)} 
                                className="p-1 text-slate-500 hover:text-rose-700 rounded hover:bg-slate-100 cursor-pointer" 
                                title="Delete"
                              >
                                <Trash2 size={14} />
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
        <div className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs space-y-4">
          
          {/* Header with Title & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-[13.5px] font-semibold text-slate-800">Team IOU Requisitions Report</h3>
            
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search employee or ref..."
                className="w-full h-8 px-3 pr-8 text-[12px] border border-slate-200 rounded-xs outline-none focus:border-[#008060] font-medium"
              />
              <Search size={14} className="absolute right-2.5 top-2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Employee Details</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">IOU Ref</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Amount</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 max-w-xs">Purpose</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Settlement Target</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100">Application Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Status</th>
                  <th className="py-1.5 px-2.5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                {supervisorList.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center text-slate-500 font-medium">{idx + 1}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100">
                      <div>
                        <span className="font-semibold text-slate-800 text-[12.5px] block">{item.empName}</span>
                        <span className="text-[11px] text-slate-500 font-normal">ID: {item.empId} • {item.designation}</span>
                      </div>
                    </td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-mono text-slate-700">{item.refNo}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 font-semibold text-slate-800">{item.amount}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700 leading-snug">{item.purpose}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700 whitespace-nowrap">{item.settleDate}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-slate-700 whitespace-nowrap">{item.appDate}</td>
                    <td className="py-1.5 px-2.5 border-r border-slate-100 text-center">
                      <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${item.statusBadge}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        {item.status === 'Pending' ? (
                          <>
                            <button 
                              onClick={() => handleApproveSupervisor(item.id)}
                              className="px-2 py-0.5 text-[11px] font-medium bg-[#008060] hover:bg-[#006e52] text-white rounded-xs flex items-center gap-1 cursor-pointer transition-colors"
                              title="Approve"
                            >
                              <CheckCircle size={12} /> Approve
                            </button>
                            <button 
                              onClick={() => handleRejectSupervisor(item.id)}
                              className="px-2.5 py-0.5 text-[11px] font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xs flex items-center gap-1 cursor-pointer transition-colors"
                              title="Reject"
                            >
                              <XCircle size={12} /> Reject
                            </button>
                          </>
                        ) : (
                          <button 
                            onClick={() => setSelectedViewItem(item)}
                            className="p-1 text-slate-500 hover:text-emerald-700 rounded hover:bg-slate-100 cursor-pointer" 
                            title="View Details"
                          >
                            <Eye size={14} />
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
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-medium"
            >
              Close Window
            </Button>
          }
        >
          <div className="space-y-3 text-left">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800 text-[13px]">Ref: {selectedViewItem.refNo}</h4>
                <p className="text-[11.5px] text-slate-500">Requested Amount: <strong className="text-slate-800">{selectedViewItem.amount}</strong></p>
              </div>
              <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${selectedViewItem.statusBadge}`}>
                {selectedViewItem.status}
              </span>
            </div>

            <div className="space-y-2 text-[12px]">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase">Target Settlement Date</span>
                <p className="font-semibold text-slate-800">{selectedViewItem.settleDate}</p>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase">Purpose of Advance</span>
                <p className="font-medium text-slate-700 mt-0.5">{selectedViewItem.purpose}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
