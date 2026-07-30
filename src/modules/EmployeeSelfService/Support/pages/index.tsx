import React, { useState } from 'react';
import { 
  HelpCircle, MessageSquare, Headphones, Mail, Phone, Clock, Plus, Search, 
  ChevronDown, ChevronUp, CheckCircle, AlertTriangle, FileText, Send, Paperclip,
  ShieldAlert, LifeBuoy, UserCheck, Cpu, CreditCard, Tool
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';

export default function EssSupportPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'tickets' | 'faq'>('create');
  
  // New Ticket State
  const [ticketCategory, setTicketCategory] = useState('IT & Hardware');
  const [ticketPriority, setTicketPriority] = useState('Medium');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [createdTicketId, setCreatedTicketId] = useState('');

  // Sample User Tickets List
  const [myTickets, setMyTickets] = useState([
    {
      id: 'TKT-94201',
      category: 'IT & Hardware',
      subject: 'Secondary Monitor Flickering & Display Port Cable issue',
      priority: 'High',
      status: 'In Progress',
      date: '2026-07-28',
      department: 'IT Helpdesk',
    },
    {
      id: 'TKT-89104',
      category: 'HR & Leave Query',
      subject: 'Overtime hours calculation discrepancy for Q2',
      priority: 'Medium',
      status: 'Resolved',
      date: '2026-07-15',
      department: 'HR Support',
    },
    {
      id: 'TKT-82190',
      category: 'Payroll & Salary',
      subject: 'Tax deduction certificate request for FY 2025-26',
      priority: 'Low',
      status: 'Resolved',
      date: '2026-06-30',
      department: 'Accounts & Payroll',
    },
  ]);

  // FAQ Accordion Toggle State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I apply for Leave or Movement?',
      answer: 'Navigate to "Leave & Movement" from the ESS left sidebar, click on "Apply Leave", select your Leave Type (Casual, Sick, Earned), specify start and end dates with reason, and submit for supervisor approval.'
    },
    {
      question: 'When is monthly payroll processed and payslips issued?',
      answer: 'Monthly payroll is calculated on the 28th of every month. Payslips are published on the 1st working day of the following month under the "Payroll" tab.'
    },
    {
      question: 'How can I request an Off-Day / Shift Swap?',
      answer: 'Go to "Attendance" -> "Off Day Swap (Comp Off)" or "Shift Swap", select your requested date and swap colleague details, then submit for automated approval.'
    },
    {
      question: 'What should I do if my hardware laptop has issues?',
      answer: 'Submit an IT Helpdesk ticket using the "Raise Support Ticket" tab on this page with category "IT & Hardware", or contact IT Extension 102 directly for urgent hardware replacements.'
    },
    {
      question: 'How are KPI targets and Quarterly Bonuses calculated?',
      answer: 'Your target progress is updated daily from assigned operational projects. Earned bonuses and carry-over amounts can be tracked in the "KPI & Bonus Summary" tab.'
    },
  ];

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketDescription) {
      alert('Please fill in both Subject and Description.');
      return;
    }
    const newId = `TKT-${Math.floor(10000 + Math.random() * 90000)}`;
    const newTicket = {
      id: newId,
      category: ticketCategory,
      subject: ticketSubject,
      priority: ticketPriority,
      status: 'Open',
      date: new Date().toISOString().split('T')[0],
      department: ticketCategory.includes('IT') ? 'IT Helpdesk' : ticketCategory.includes('HR') ? 'HR Support' : 'Admin & Support',
    };

    setMyTickets([newTicket, ...myTickets]);
    setCreatedTicketId(newId);
    setShowSuccessToast(true);
    setTicketSubject('');
    setTicketDescription('');

    setTimeout(() => {
      setShowSuccessToast(false);
      setActiveTab('tickets');
    }, 2000);
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-5 font-sans antialiased pb-24">

      {/* SUCCESS TOAST */}
      {showSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#008060] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2.5 text-[12.5px] font-bold animate-in slide-in-from-bottom-5">
          <CheckCircle size={18} />
          <span>Support Ticket {createdTicketId} created successfully!</span>
        </div>
      )}

      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <LifeBuoy size={22} className="text-[#008060]" />
            <span>Employee Support & Helpdesk</span>
          </h1>
          <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
            Raise technical support tickets, contact internal department helpdesks, and read FAQs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setActiveTab('create')}
            className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8 px-3.5 tracking-wide cursor-pointer flex items-center gap-1.5 shrink-0 shadow-2xs"
          >
            <Plus size={14} />
            <span>Raise New Ticket</span>
          </Button>
        </div>
      </div>

      {/* 4 DIRECT DEPARTMENT HELPDESK CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        
        {/* CARD 1: HR HELPDESK */}
        <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-2 hover:border-emerald-300 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded bg-emerald-50 text-[#008060] flex items-center justify-center border border-emerald-200">
              <UserCheck size={16} />
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">EXT 101</span>
          </div>
          <div>
            <h3 className="text-[13px] font-bold text-slate-900">HR & People Support</h3>
            <p className="text-[11px] text-slate-500">Leave, policy & employment queries</p>
          </div>
          <div className="pt-1 text-[11px] font-medium text-slate-700 font-mono flex items-center gap-1">
            <Mail size={12} className="text-slate-400" />
            <span>hr-support@company.com</span>
          </div>
        </div>

        {/* CARD 2: IT HELPDESK */}
        <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-2 hover:border-blue-300 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
              <Cpu size={16} />
            </div>
            <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">EXT 102</span>
          </div>
          <div>
            <h3 className="text-[13px] font-bold text-slate-900">IT & Hardware Desk</h3>
            <p className="text-[11px] text-slate-500">Laptop, VPN, email & system issues</p>
          </div>
          <div className="pt-1 text-[11px] font-medium text-slate-700 font-mono flex items-center gap-1">
            <Mail size={12} className="text-slate-400" />
            <span>it-helpdesk@company.com</span>
          </div>
        </div>

        {/* CARD 3: PAYROLL & ACCOUNTS */}
        <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-2 hover:border-purple-300 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
              <CreditCard size={16} />
            </div>
            <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200">EXT 103</span>
          </div>
          <div>
            <h3 className="text-[13px] font-bold text-slate-900">Payroll & Accounts</h3>
            <p className="text-[11px] text-slate-500">Salary, payslip & tax query</p>
          </div>
          <div className="pt-1 text-[11px] font-medium text-slate-700 font-mono flex items-center gap-1">
            <Mail size={12} className="text-slate-400" />
            <span>payroll@company.com</span>
          </div>
        </div>

        {/* CARD 4: ADMIN & FACILITIES */}
        <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-2 hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
              <Headphones size={16} />
            </div>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">EXT 104</span>
          </div>
          <div>
            <h3 className="text-[13px] font-bold text-slate-900">Facilities & Admin</h3>
            <p className="text-[11px] text-slate-500">Desk, ID Card, seating & office</p>
          </div>
          <div className="pt-1 text-[11px] font-medium text-slate-700 font-mono flex items-center gap-1">
            <Mail size={12} className="text-slate-400" />
            <span>admin@company.com</span>
          </div>
        </div>

      </div>

      {/* MAIN SUPPORT TABBED CONTENT CONTAINER */}
      <div className="bg-white p-4 md:p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
        
        {/* TAB BUTTONS */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-3.5 py-1.5 text-[12px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'create'
                ? 'bg-[#008060] text-white shadow-2xs'
                : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
            }`}
          >
            <Plus size={14} />
            <span>Raise Support Ticket</span>
          </button>

          <button
            onClick={() => setActiveTab('tickets')}
            className={`px-3.5 py-1.5 text-[12px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'tickets'
                ? 'bg-[#008060] text-white shadow-2xs'
                : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
            }`}
          >
            <FileText size={14} />
            <span>My Support Tickets ({myTickets.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`px-3.5 py-1.5 text-[12px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'faq'
                ? 'bg-[#008060] text-white shadow-2xs'
                : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
            }`}
          >
            <HelpCircle size={14} />
            <span>Knowledge Base & FAQs</span>
          </button>
        </div>

        {/* TAB 1: CREATE TICKET FORM */}
        {activeTab === 'create' && (
          <form onSubmit={handleCreateTicket} className="space-y-4">
            <div className="pb-2 border-b border-slate-100">
              <h2 className="text-[14.5px] font-bold text-slate-900">Submit Support Request Ticket</h2>
              <p className="text-[12px] text-slate-500">Provide details about your query or hardware issue so the assigned team can assist you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <FormLabel className="text-[12px] font-bold text-slate-700">Category / Department</FormLabel>
                <Select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  options={[
                    { id: 'IT & Hardware', name: 'IT & Hardware Issue' },
                    { id: 'HR & Leave Query', name: 'HR & Leave Policy Query' },
                    { id: 'Payroll & Salary', name: 'Payroll & Salary Dispute' },
                    { id: 'Facilities & Admin', name: 'Facilities & Office Seating' },
                    { id: 'General Query', name: 'General Support Query' },
                  ]}
                />
              </div>

              <div>
                <FormLabel className="text-[12px] font-bold text-slate-700">Urgency / Priority Level</FormLabel>
                <Select
                  value={ticketPriority}
                  onChange={(e) => setTicketPriority(e.target.value)}
                  options={[
                    { id: 'Low', name: 'Low (General Inquiry)' },
                    { id: 'Medium', name: 'Medium (Standard Response)' },
                    { id: 'High', name: 'High (Work Impacted)' },
                    { id: 'Urgent', name: 'Urgent (Complete Work Blocker)' },
                  ]}
                />
              </div>
            </div>

            <div>
              <FormLabel className="text-[12px] font-bold text-slate-700">Ticket Subject / Title</FormLabel>
              <Input
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                placeholder="Briefly state the issue (e.g. Laptop charger not working, Payslip discrepancy)"
                className="h-8.5 text-[12px]"
              />
            </div>

            <div>
              <FormLabel className="text-[12px] font-bold text-slate-700">Detailed Description & Steps</FormLabel>
              <textarea
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                rows={4}
                placeholder="Provide details, error codes, or context to help us resolve the issue quickly..."
                className="w-full p-2.5 text-[12px] border border-slate-200 rounded-md focus:ring-1 focus:ring-[#008060] focus:border-[#008060] outline-none"
              />
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200 border-dashed flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Paperclip size={16} className="text-slate-400" />
                <span className="text-[11.5px] font-medium text-slate-600">Attach screenshot or error log (Max 5MB)</span>
              </div>
              <Button type="button" className="bg-white hover:bg-slate-100 text-slate-700 text-[11px] font-bold h-7 px-2.5 border border-slate-200">
                Browse File
              </Button>
            </div>

            <div className="pt-2 flex justify-end">
              <Button type="submit" className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8.5 px-5 flex items-center gap-1.5 cursor-pointer">
                <Send size={14} />
                <span>Submit Ticket</span>
              </Button>
            </div>
          </form>
        )}

        {/* TAB 2: MY TICKETS TABLE */}
        {activeTab === 'tickets' && (
          <div className="space-y-3">
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-[14.5px] font-bold text-slate-900">Submitted Helpdesk Tickets</h2>
                <p className="text-[12px] text-slate-500">Track status updates and resolution responses on your past queries.</p>
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded">
              <table className="w-full text-left text-[11.5px] border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold text-[11px]">
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">Ticket ID</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">Subject</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">Department</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100 text-center">Priority</th>
                    <th className="py-1.5 px-2.5 border-r border-slate-100">Created Date</th>
                    <th className="py-1.5 px-2.5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {myTickets.map((t, idx) => (
                    <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-2 px-2.5 border-r border-slate-100 text-center text-slate-400 font-semibold">{idx + 1}</td>
                      <td className="py-2 px-2.5 border-r border-slate-100 font-mono font-bold text-[#008060]">{t.id}</td>
                      <td className="py-2 px-2.5 border-r border-slate-100 font-semibold text-slate-800">{t.subject}</td>
                      <td className="py-2 px-2.5 border-r border-slate-100 text-slate-600">{t.department}</td>
                      <td className="py-2 px-2.5 border-r border-slate-100 text-center">
                        <span className={`inline-block px-1.5 py-0.2 text-[10px] font-bold rounded border ${
                          t.priority === 'High' || t.priority === 'Urgent'
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : t.priority === 'Medium'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {t.priority}
                        </span>
                      </td>
                      <td className="py-2 px-2.5 border-r border-slate-100 text-slate-600">{t.date}</td>
                      <td className="py-2 px-2.5 text-center">
                        <span className={`inline-block px-2 py-0.5 text-[10.5px] font-bold rounded border ${
                          t.status === 'Resolved'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : t.status === 'In Progress'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: FAQS ACCORDION */}
        {activeTab === 'faq' && (
          <div className="space-y-3">
            <div className="pb-2 border-b border-slate-100">
              <h2 className="text-[14.5px] font-bold text-slate-900">Knowledge Base & FAQ Guide</h2>
              <p className="text-[12px] text-slate-500">Quick answers to common questions about ESS policies, attendance, and payroll.</p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-md bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-3 text-left font-bold text-[12.5px] text-slate-800 hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === idx ? <ChevronUp size={16} className="text-[#008060]" /> : <ChevronDown size={16} className="text-slate-400" />}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-3 pt-0 text-[12px] text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
