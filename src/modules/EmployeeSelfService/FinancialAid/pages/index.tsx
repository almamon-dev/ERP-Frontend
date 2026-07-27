import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  DollarSign, Plus, Eye, Edit2, Trash2, CheckCircle2, Clock, Upload, Info, Search, RotateCcw, FileText, Calendar
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import DatePicker from '@/components/ui/date-picker';
import Modal from '@/components/modals/modal';

export default function LoanFinancialAidPage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam === 'repayment' ? 'repayment' : 'request';

  // ---------------- LOAN REQUEST FORM & DATA ----------------
  const [loanType, setLoanType] = useState('Personal Salary Advance Loan');
  const [principal, setPrincipal] = useState('');
  const [tenureMonths, setTenureMonths] = useState('12');
  const [effectiveDate, setEffectiveDate] = useState('2026-08-01');
  const [reason, setReason] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);

  const [filterFromDate, setFilterFromDate] = useState('2026-01-01');
  const [filterToDate, setFilterToDate] = useState('2026-12-31');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [loanList, setLoanList] = useState([
    {
      id: 1,
      loanType: 'Personal Salary Loan',
      principal: '৳ 60,000',
      monthlyDeduction: '৳ 5,000 / mo',
      tenure: '12 Months',
      effectiveDate: '2026-03-01',
      appDate: '25,Feb 26 11:30 AM',
      attachment: 'loan_agreement.pdf',
      status: 'Active',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-300'
    },
    {
      id: 2,
      loanType: 'Emergency Medical Aid',
      principal: '৳ 25,000',
      monthlyDeduction: '৳ 2,500 / mo',
      tenure: '10 Months',
      effectiveDate: '2026-08-01',
      appDate: '22,Jul 26 04:15 PM',
      attachment: null,
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    }
  ]);

  const [selectedViewLoan, setSelectedViewLoan] = useState<any | null>(null);

  // Apply Loan Requisition
  const handleApplyLoan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!principal || !reason) {
      alert('Please fill in all required fields (Principal Amount and Reason).');
      return;
    }

    const calculatedMonthly = Math.round(Number(principal) / (Number(tenureMonths) || 12));

    const newLoan = {
      id: Date.now(),
      loanType: loanType,
      principal: `৳ ${Number(principal).toLocaleString()}`,
      monthlyDeduction: `৳ ${calculatedMonthly.toLocaleString()} / mo`,
      tenure: `${tenureMonths} Months`,
      effectiveDate: effectiveDate,
      appDate: new Date().toLocaleString(),
      attachment: attachment ? attachment.name : null,
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-300'
    };

    setLoanList([newLoan, ...loanList]);
    setPrincipal('');
    setReason('');
    alert('Loan Request Requisition Submitted Successfully!');
  };

  const handleDeleteLoanRecord = (id: number) => {
    if (confirm('Are you sure you want to delete this loan requisition?')) {
      setLoanList(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">
      
      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div className="pb-1">
        <h1 className="text-[20px] font-bold text-slate-900 tracking-tight">
          {activeTab === 'request' ? 'Loan Request' : 'Repayment & Status'}
        </h1>
        <p className="text-[13px] font-medium text-slate-500 mt-0.5">
          {activeTab === 'request' 
            ? 'Apply for company salary advances, emergency financial aid, and monthly installment plans.' 
            : 'Track active loan balances, monthly payroll deduction schedules, and repayment history.'}
        </p>
      </div>

      {/* ================= TAB 1: LOAN REQUEST ================= */}
      {activeTab === 'request' && (
        <div className="space-y-4">
          
          {/* TOP CARD: APPLY LOAN REQUISITION FORM */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <form onSubmit={handleApplyLoan} className="space-y-3.5">
              
              {/* ROW 1: Loan Type, Requested Principal, Tenure Months */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Loan & Financial Aid Type
                  </FormLabel>
                  <Select 
                    value={loanType}
                    onChange={(e) => setLoanType(e.target.value)}
                    options={[
                      { id: 'Personal Salary Advance Loan', name: 'Personal Salary Advance Loan' },
                      { id: 'Emergency Medical Aid', name: 'Emergency Medical Aid' },
                      { id: 'Educational Financial Aid', name: 'Educational Financial Aid' },
                      { id: 'Festival Advance Loan', name: 'Festival Advance Loan' },
                    ]}
                  />
                </div>

                <Input 
                  label="* Requested Principal Amount (৳)"
                  type="number"
                  placeholder="Enter principal amount (e.g. 50000)"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="h-[36px] text-[12.5px]"
                />

                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Preferred Tenure (Months)
                  </FormLabel>
                  <Select 
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(e.target.value)}
                    options={[
                      { id: '3', name: '3 Months' },
                      { id: '6', name: '6 Months' },
                      { id: '12', name: '12 Months' },
                      { id: '18', name: '18 Months' },
                      { id: '24', name: '24 Months' },
                    ]}
                  />
                </div>
              </div>

              {/* ROW 2: Effective Start Date, Reason / Purpose */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[12px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Effective Start Date
                  </FormLabel>
                  <DatePicker 
                    value={effectiveDate}
                    onChange={(val) => setEffectiveDate(val)}
                    className="w-full"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input 
                    label="* Purpose & Reason for Financial Aid"
                    placeholder="Specify detailed reason for financial aid requisition"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="h-[36px] text-[12.5px]"
                  />
                </div>
              </div>

              {/* ROW 3: UPLOAD ATTACHMENT & APPLY BUTTON */}
              <div className="flex items-center gap-3 pt-1">
                <label className="flex items-center gap-1.5 px-3 py-1.5 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded text-[12px] font-bold cursor-pointer transition-colors shadow-2xs">
                  <Upload size={14} className="stroke-[2.5]" />
                  <span>Upload Supporting Document</span>
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
                  SUBMIT LOAN REQUEST
                </Button>
              </div>

            </form>
          </div>

          {/* BOTTOM CARD: LOAN REQUISITIONS LIST TABLE */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            
            {/* Header with Title & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-[15px] font-bold text-slate-900">My Loan Requisitions & History</h3>
              
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search loan type..."
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
                    { id: 'Active', name: 'Active' },
                    { id: 'Pending', name: 'Pending' },
                    { id: 'Completed', name: 'Completed' },
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
                    <th className="py-2.5 px-3 border-r border-slate-200">Loan Type</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-right">Principal Amount</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Monthly EMI</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Tenure</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Effective Date</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Attachment</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Application Date</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {loanList.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-900">{item.loanType}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-right font-extrabold text-slate-900">{item.principal}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center font-bold text-emerald-700">{item.monthlyDeduction}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center text-slate-600 font-semibold">{item.tenure}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-slate-600 whitespace-nowrap">{item.effectiveDate}</td>
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
                            onClick={() => setSelectedViewLoan(item)}
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
                                onClick={() => handleDeleteLoanRecord(item.id)} 
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

      {/* ================= TAB 2: REPAYMENT & STATUS ================= */}
      {activeTab === 'repayment' && (
        <div className="space-y-4">
          
          {/* LOAN REPAYMENT PROGRESS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Active Loan Principal</span>
              <h3 className="text-[20px] font-extrabold text-slate-900">৳ 60,000</h3>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#008060] h-full w-[40%] rounded-full"></div>
              </div>
              <p className="text-[11.5px] text-slate-500 font-medium pt-1">4 of 12 EMI Payments Completed</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-2">
              <span className="text-[11px] font-bold text-emerald-700 uppercase">Total Repaid to Date</span>
              <h3 className="text-[20px] font-extrabold text-emerald-800">৳ 24,000</h3>
              <p className="text-[11.5px] text-slate-500 font-medium">Automatic monthly salary deduction</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-2">
              <span className="text-[11px] font-bold text-amber-700 uppercase">Remaining Loan Balance</span>
              <h3 className="text-[20px] font-extrabold text-amber-800">৳ 36,000</h3>
              <p className="text-[11.5px] text-slate-500 font-medium">Expected completion: Feb 2027</p>
            </div>

          </div>

          {/* REPAYMENT SCHEDULE LOG TABLE */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-[15px] font-bold text-slate-900">Monthly Payroll Deduction Schedule</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">EMI #</th>
                    <th className="py-2.5 px-3 border-r border-slate-200">Deduction Month</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-right">Deduction Amount</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-right">Remaining Principal</th>
                    <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {[
                    { emi: 1, month: 'March 2026', amount: '৳ 5,000', balance: '৳ 55,000', status: 'Deducted' },
                    { emi: 2, month: 'April 2026', amount: '৳ 5,000', balance: '৳ 50,000', status: 'Deducted' },
                    { emi: 3, month: 'May 2026', amount: '৳ 5,000', balance: '৳ 45,000', status: 'Deducted' },
                    { emi: 4, month: 'June 2026', amount: '৳ 5,000', balance: '৳ 40,000', status: 'Deducted' },
                    { emi: 5, month: 'July 2026', amount: '৳ 5,000', balance: '৳ 35,000', status: 'Upcoming (Payroll)' },
                    { emi: 6, month: 'August 2026', amount: '৳ 5,000', balance: '৳ 30,000', status: 'Scheduled' },
                  ].map((row) => (
                    <tr key={row.emi} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center font-bold text-slate-800">#{row.emi}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-900">{row.month}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-right font-extrabold text-slate-900">{row.amount}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-right font-semibold text-slate-600">{row.balance}</td>
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center">
                        <span className={`px-2 py-0.2 text-[10.5px] font-extrabold rounded border ${row.status === 'Deducted' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : 'bg-slate-100 text-slate-700 border-slate-300'}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      )}

      {/* VIEW LOAN DETAILS MODAL */}
      {selectedViewLoan && (
        <Modal
          isOpen={!!selectedViewLoan}
          onClose={() => setSelectedViewLoan(null)}
          title="Loan Application Details"
          description={`Loan ID #${selectedViewLoan.id}`}
          size="md"
          footer={
            <Button 
              onClick={() => setSelectedViewLoan(null)} 
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-bold"
            >
              Close Window
            </Button>
          }
        >
          <div className="space-y-4 text-left">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-[13px]">{selectedViewLoan.loanType}</h4>
                <p className="text-[11.5px] text-slate-500">Principal: <strong className="text-slate-900">{selectedViewLoan.principal}</strong></p>
              </div>
              <span className={`px-2 py-0.5 text-[10.5px] font-extrabold rounded border ${selectedViewLoan.statusBadge}`}>
                {selectedViewLoan.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[12.5px]">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Monthly Deduction</span>
                <p className="font-bold text-emerald-700 mt-0.5">{selectedViewLoan.monthlyDeduction}</p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Tenure</span>
                <p className="font-semibold text-slate-800 mt-0.5">{selectedViewLoan.tenure}</p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Effective Date</span>
                <p className="font-semibold text-slate-800 mt-0.5">{selectedViewLoan.effectiveDate}</p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase">Application Date</span>
                <p className="font-semibold text-slate-800 mt-0.5">{selectedViewLoan.appDate}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
