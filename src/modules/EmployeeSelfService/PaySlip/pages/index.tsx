import React, { useState } from 'react';
import { Download, RotateCcw, FileText, CheckCircle2, Clock } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';

export default function MonthlyPaySlipsPage() {
    const [data] = useState<any[]>([
        {
            "id": 1,
            "slipNo": "PS-2026-06",
            "month": "June 2026",
            "workingDays": "22 Days",
            "basic": "$3,500",
            "allowance": "+$1,800",
            "deduction": "-$450",
            "netPay": "$4,850",
            "paymentMethod": "Bank Transfer (City Bank)",
            "disbursedDate": "2026-06-30",
            "status": "Disbursed"
        },
        {
            "id": 2,
            "slipNo": "PS-2026-05",
            "month": "May 2026",
            "workingDays": "21 Days",
            "basic": "$3,500",
            "allowance": "+$1,800",
            "deduction": "-$450",
            "netPay": "$4,850",
            "paymentMethod": "Bank Transfer (City Bank)",
            "disbursedDate": "2026-05-31",
            "status": "Disbursed"
        },
        {
            "id": 3,
            "slipNo": "PS-2026-04",
            "month": "April 2026",
            "workingDays": "22 Days",
            "basic": "$3,500",
            "allowance": "+$1,650",
            "deduction": "-$420",
            "netPay": "$4,730",
            "paymentMethod": "Bank Transfer (City Bank)",
            "disbursedDate": "2026-04-30",
            "status": "Disbursed"
        },
        {
            "id": 4,
            "slipNo": "PS-2026-03",
            "month": "March 2026",
            "workingDays": "23 Days",
            "basic": "$3,500",
            "allowance": "+$1,650",
            "deduction": "-$420",
            "netPay": "$4,730",
            "paymentMethod": "Bank Transfer (City Bank)",
            "disbursedDate": "2026-03-31",
            "status": "Disbursed"
        },
        {
            "id": 5,
            "slipNo": "PS-2026-02",
            "month": "February 2026",
            "workingDays": "20 Days",
            "basic": "$3,500",
            "allowance": "+$1,500",
            "deduction": "-$400",
            "netPay": "$4,600",
            "paymentMethod": "Bank Transfer (City Bank)",
            "disbursedDate": "2026-02-28",
            "status": "Disbursed"
        },
        {
            "id": 6,
            "slipNo": "PS-2026-01",
            "month": "January 2026",
            "workingDays": "22 Days",
            "basic": "$3,500",
            "allowance": "+$1,500",
            "deduction": "-$400",
            "netPay": "$4,600",
            "paymentMethod": "Bank Transfer (City Bank)",
            "disbursedDate": "2026-01-31",
            "status": "Disbursed"
        }
    ]);
    const [statusFilter, setStatusFilter] = useState('All');

    const handleDownload = (item: any) => {
        alert(`Downloading PaySlip PDF for ${item.month} (${item.slipNo})`);
    };

    const columns: Column[] = [
        { 
            id: 'slipNo', 
            label: 'Slip No', 
            render: (item) => <span className="text-slate-700 font-mono font-semibold text-[12px]">{item.slipNo}</span> 
        },
        { 
            id: 'month', 
            label: 'Pay Month', 
            render: (item: any) => <span className="font-semibold text-slate-800 text-[12.5px]">{item.month}</span> 
        },
        { 
            id: 'workingDays', 
            label: 'Working Days', 
            render: (item: any) => <span className="text-slate-600 text-[12px]">{item.workingDays}</span> 
        },
        { 
            id: 'basic', 
            label: 'Basic Pay', 
            render: (item: any) => <span className="text-slate-700 font-medium text-[12.5px]">{item.basic}</span> 
        },
        { 
            id: 'allowance', 
            label: 'Allowances', 
            render: (item: any) => <span className="text-emerald-700 font-medium text-[12.5px]">{item.allowance}</span> 
        },
        { 
            id: 'deduction', 
            label: 'Deductions', 
            render: (item: any) => <span className="text-rose-600 font-medium text-[12.5px]">{item.deduction}</span> 
        },
        { 
            id: 'netPay', 
            label: 'Net Payable', 
            render: (item: any) => <span className="font-bold text-slate-900 text-[13px]">{item.netPay}</span> 
        },
        { 
            id: 'paymentMethod', 
            label: 'Payment Method', 
            render: (item: any) => <span className="text-slate-600 text-[11.5px]">{item.paymentMethod}</span> 
        },
        { 
            id: 'disbursedDate', 
            label: 'Disbursed Date',
            render: (item: any) => <span className="text-slate-500 text-[11.5px]">{item.disbursedDate}</span>
        },
        {
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 size={11} />
                    {item.status}
                </span>
            )
        },
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button 
                onClick={() => handleDownload(item)} 
                className="px-2 py-1 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded transition-colors flex items-center gap-1 text-[11.5px] font-semibold cursor-pointer border border-slate-200 hover:border-emerald-200" 
                title="Download Pay Slip PDF"
            >
                <Download size={13} strokeWidth={1.75} />
                <span>PDF</span>
            </button>
        </div>
    );

    const filteredData = data.filter(c => {
        if (statusFilter !== 'All' && c.status !== statusFilter) return false;
        return true;
    });

    const renderFilters = (
        <div className="flex flex-wrap items-center gap-4">
            <div className="w-full sm:w-[200px]">
                <label className="block text-[12px] font-semibold text-slate-700 mb-1">Status</label>
                <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none focus:border-[#008060] focus:ring-0 transition-colors"
                >
                    <option value="All">All Statuses</option>
                    <option value="Disbursed">Disbursed</option>
                    <option value="Generated">Generated</option>
                </select>
            </div>
            <div className="mt-5">
                <button 
                    onClick={() => setStatusFilter('All')} 
                    className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:border-slate-400 transition-all group outline-none"
                    title="Clear Filters"
                >
                    <RotateCcw size={13} />
                </button>
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20 font-sans">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Monthly PaySlips</h1>
                    <p className="text-[13px] font-medium text-slate-500 mt-0.5">View and download official itemized monthly salary slips, tax breakdown, and deductions.</p>
                </div>
            </div>

            <DataTable 
                data={filteredData} 
                columns={columns}
                searchPlaceholder="Search payslips by month, ref no..."
                actions={renderActions}
                filterContent={renderFilters}
                compact
            />
        </div>
    );
}
