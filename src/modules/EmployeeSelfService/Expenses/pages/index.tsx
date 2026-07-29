import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CreditCard, Plus, Receipt, Upload, Check, X } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

// Modular Components
import ExpenseDashboard from '../components/ExpenseDashboard';
import ExpenseRequisitions from '../components/ExpenseRequisitions';
import ExpenseClaims from '../components/ExpenseClaims';
import PendingApprovals from '../components/PendingApprovals';
import ExpenseAdvances from '../components/ExpenseAdvances';
import ExpenseReimbursements from '../components/ExpenseReimbursements';
import ExpenseReceipts from '../components/ExpenseReceipts';
import ExpenseCategories from '../components/ExpenseCategories';
import ExpenseReports from '../components/ExpenseReports';

export default function MyExpensesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const rawTab = searchParams.get('tab');

    const normalizeTab = (t: string | null) => {
        if (!t) return 'dashboard';
        if (t === 'my-claims' || t === 'claims') return 'claims';
        return t;
    };

    const [activeTab, setActiveTab] = useState<string>(normalizeTab(rawTab));

    useEffect(() => {
        const t = normalizeTab(searchParams.get('tab'));
        setActiveTab(t);
    }, [searchParams]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    // MOCK DATA: Expense Requisitions
    const [requisitions, setRequisitions] = useState<any[]>([
        { id: 'REQ-2026-001', title: 'Chittagong Site Visit Travel', category: 'Travel & Accommodation', estAmount: '৳ 15,000', reqDate: '2026-07-20', status: 'Approved', statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
        { id: 'REQ-2026-002', title: 'Q3 Client Entertainment Meeting', category: 'Food & Entertainment', estAmount: '৳ 6,500', reqDate: '2026-07-24', status: 'Pending Approval', statusBadge: 'bg-amber-50 text-amber-700 border-amber-200' },
    ]);

    // MOCK DATA: Expense Claims
    const [claims, setClaims] = useState<any[]>([
        { id: 'CLM-2026-101', title: 'Uber Taxi Fare to Client Office', category: 'Conveyance', amount: '৳ 1,850', voucherNo: 'VCH-8821', date: '2026-07-18', receipt: true, status: 'Approved', statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
        { id: 'CLM-2026-102', title: 'Team Lunch with Foreign Delegates', category: 'Food & Entertainment', amount: '৳ 4,500', voucherNo: 'VCH-8902', date: '2026-07-25', receipt: true, status: 'Submitted', statusBadge: 'bg-blue-50 text-blue-700 border-blue-200' },
        { id: 'CLM-2026-103', title: 'Monthly Office Internet Bill', category: 'Utilities & Subscriptions', amount: '৳ 2,200', voucherNo: 'VCH-8910', date: '2026-07-27', receipt: true, status: 'Pending Approval', statusBadge: 'bg-amber-50 text-amber-700 border-amber-200' },
    ]);

    // MOCK DATA: Advance Requests
    const [advances] = useState<any[]>([
        { id: 'ADV-2026-01', purpose: 'Khulna Branch Audit Advance', requestedAmount: '৳ 20,000', approvedAmount: '৳ 20,000', reqDate: '2026-07-10', status: 'Disbursed', statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    ]);

    // MOCK DATA: Reimbursements
    const [reimbursements] = useState<any[]>([
        { id: 'RMB-2026-44', claimRef: 'CLM-2026-101', amount: '৳ 1,850', paymentMode: 'Bank Transfer (City Bank)', disburseDate: '2026-07-22', status: 'Paid', statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    ]);

    // MODAL STATES
    const [isCreateReqModalOpen, setIsCreateReqModalOpen] = useState(false);
    const [isCreateClaimModalOpen, setIsCreateClaimModalOpen] = useState(false);

    // Form inputs
    const [reqTitle, setReqTitle] = useState('');
    const [reqCategory, setReqCategory] = useState('Travel & Accommodation');
    const [reqAmount, setReqAmount] = useState('');
    const [reqDate] = useState('2026-07-29');

    const [claimTitle, setClaimTitle] = useState('');
    const [claimCategory, setClaimCategory] = useState('Conveyance');
    const [claimAmount, setClaimAmount] = useState('');
    const [claimVoucher, setClaimVoucher] = useState('');
    const [claimDate] = useState('2026-07-29');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCreateRequisition = () => {
        if (!reqTitle || !reqAmount) return alert('Please fill in requisition title and estimated amount.');
        const newReq = {
            id: `REQ-2026-0${requisitions.length + 1}`,
            title: reqTitle,
            category: reqCategory,
            estAmount: `৳ ${reqAmount}`,
            reqDate: reqDate,
            status: 'Pending Approval',
            statusBadge: 'bg-amber-50 text-amber-700 border-amber-200'
        };
        setRequisitions([newReq, ...requisitions]);
        setIsCreateReqModalOpen(false);
        setReqTitle('');
        setReqAmount('');
    };

    const handleCreateClaim = () => {
        if (!claimTitle || !claimAmount) return alert('Please fill in claim title and amount.');
        const newClaim = {
            id: `CLM-2026-${claims.length + 104}`,
            title: claimTitle,
            category: claimCategory,
            amount: `৳ ${claimAmount}`,
            voucherNo: claimVoucher || `VCH-${Math.floor(1000 + Math.random() * 9000)}`,
            date: claimDate,
            receipt: true,
            status: 'Submitted',
            statusBadge: 'bg-blue-50 text-blue-700 border-blue-200'
        };
        setClaims([newClaim, ...claims]);
        setIsCreateClaimModalOpen(false);
        setClaimTitle('');
        setClaimAmount('');
        setClaimVoucher('');
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const getHeaderInfo = () => {
        switch (activeTab) {
            case 'requisitions':
                return { title: 'Expense Requisitions', desc: 'Submit and manage pre-spend expense estimations.' };
            case 'claims':
                return { title: 'My Expense Claims', desc: 'Track submitted bill vouchers and claims for reimbursement.' };
            case 'pending-approvals':
                return { title: 'Pending Approvals', desc: 'Manager review and approval workflow for team expense claims.' };
            case 'advances':
                return { title: 'Advance Requests', desc: 'Request and track cash/bank advance funds prior to travel.' };
            case 'reimbursements':
                return { title: 'Reimbursements Log', desc: 'View payout disbursements credited to your bank account.' };
            case 'receipts':
                return { title: 'Receipts & Attachments', desc: 'Archive of official receipt vouchers attached to claims.' };
            case 'categories':
                return { title: 'Expense Categories & Policies', desc: 'Monthly expense limits, allowances, and company policies.' };
            case 'reports':
                return { title: 'Reports & History', desc: 'Itemized expense breakdown and annual audit history.' };
            default:
                return { title: 'Expenses Dashboard', desc: 'Overview of monthly claims, active advances, and reimbursement history.' };
        }
    };
    const headerInfo = getHeaderInfo();

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20 font-sans">
            {/* HEADER */}
            <div className="mb-5">
                <h1 className="text-[19px] font-semibold text-slate-800 flex items-center gap-2">
                    <CreditCard size={20} className="text-[#008060]" />
                    {headerInfo.title}
                </h1>
                <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
                    {headerInfo.desc}
                </p>
            </div>

            {/* TAB CONTENT RENDERERS */}
            {activeTab === 'dashboard' && <ExpenseDashboard claims={claims} onViewAllClaims={() => handleTabChange('claims')} />}
            {activeTab === 'requisitions' && <ExpenseRequisitions requisitions={requisitions} onOpenCreateModal={() => setIsCreateReqModalOpen(true)} />}
            {activeTab === 'claims' && <ExpenseClaims claims={claims} onOpenCreateModal={() => setIsCreateClaimModalOpen(true)} />}
            {activeTab === 'pending-approvals' && <PendingApprovals />}
            {activeTab === 'advances' && <ExpenseAdvances advances={advances} />}
            {activeTab === 'reimbursements' && <ExpenseReimbursements reimbursements={reimbursements} />}
            {activeTab === 'receipts' && <ExpenseReceipts />}
            {activeTab === 'categories' && <ExpenseCategories />}
            {activeTab === 'reports' && <ExpenseReports />}

            {/* MODAL: CREATE REQUISITION */}
            <Modal
                isOpen={isCreateReqModalOpen}
                onClose={() => setIsCreateReqModalOpen(false)}
                title="Create Pre-Expense Requisition"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setIsCreateReqModalOpen(false)} className="h-8 text-[12px]">Cancel</Button>
                        <Button onClick={handleCreateRequisition} className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-bold">
                            Submit Requisition
                        </Button>
                    </>
                }
            >
                <div className="space-y-3 font-sans">
                    <div className="flex flex-col gap-1">
                        <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Requisition Purpose / Title</FormLabel>
                        <Input value={reqTitle} onChange={(e) => setReqTitle(e.target.value)} placeholder="e.g. Chittagong Site Visit Travel" className="text-[12px]" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Category</FormLabel>
                            <Select
                                value={reqCategory}
                                onChange={(e) => setReqCategory(e.target.value)}
                                options={[
                                    { id: 'Travel & Accommodation', name: 'Travel & Accommodation' },
                                    { id: 'Food & Entertainment', name: 'Food & Entertainment' },
                                    { id: 'Office Supplies', name: 'Office Supplies' },
                                    { id: 'Utilities', name: 'Utilities' },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Est. Amount (৳)</FormLabel>
                            <Input value={reqAmount} onChange={(e) => setReqAmount(e.target.value)} placeholder="e.g. 15000" className="text-[12px]" />
                        </div>
                    </div>
                </div>
            </Modal>

            {/* MODAL: CREATE CLAIM */}
            <Modal
                isOpen={isCreateClaimModalOpen}
                onClose={() => setIsCreateClaimModalOpen(false)}
                title="Submit Expense Claim"
                size="lg"
                footer={
                    <>
                        <Button variant="outline" onClick={() => setIsCreateClaimModalOpen(false)} className="h-8 text-[12px]">Cancel</Button>
                        <Button onClick={handleCreateClaim} className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-bold">
                            Submit Claim
                        </Button>
                    </>
                }
            >
                <div className="space-y-3 font-sans">
                    <div className="flex flex-col gap-1">
                        <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Expense Purpose / Title</FormLabel>
                        <Input value={claimTitle} onChange={(e) => setClaimTitle(e.target.value)} placeholder="e.g. Uber Taxi Fare to Client Meeting" className="text-[12px]" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Category</FormLabel>
                            <Select
                                value={claimCategory}
                                onChange={(e) => setClaimCategory(e.target.value)}
                                options={[
                                    { id: 'Conveyance', name: 'Conveyance' },
                                    { id: 'Food & Entertainment', name: 'Food & Entertainment' },
                                    { id: 'Utilities & Subscriptions', name: 'Utilities & Subscriptions' },
                                    { id: 'Office Supplies', name: 'Office Supplies' },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Claim Amount (৳)</FormLabel>
                            <Input value={claimAmount} onChange={(e) => setClaimAmount(e.target.value)} placeholder="e.g. 1850" className="text-[12px]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Voucher / Receipt No</FormLabel>
                            <Input value={claimVoucher} onChange={(e) => setClaimVoucher(e.target.value)} placeholder="e.g. VCH-8821" className="text-[12px]" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <FormLabel className="text-[12px] font-semibold text-slate-700 !mb-0">Attach Bill / Receipt</FormLabel>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setSelectedFile(e.target.files[0]);
                                    }
                                }}
                            />
                            {selectedFile ? (
                                <div className="h-8 border border-emerald-300 rounded px-2.5 flex items-center justify-between bg-emerald-50 text-[11.5px] text-emerald-800">
                                    <span className="truncate max-w-[150px] font-medium flex items-center gap-1">
                                        <Check size={13} className="text-emerald-600 shrink-0" />
                                        {selectedFile.name}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedFile(null);
                                            if (fileInputRef.current) fileInputRef.current.value = '';
                                        }}
                                        className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                                        title="Remove file"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="h-8 border border-dashed border-slate-300 rounded flex items-center justify-center bg-slate-50 text-[11.5px] text-slate-500 cursor-pointer hover:bg-slate-100 hover:border-slate-400 transition-colors"
                                >
                                    <Upload size={13} className="mr-1.5 text-slate-400" />
                                    <span>Upload Invoice (PDF/JPG)</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
