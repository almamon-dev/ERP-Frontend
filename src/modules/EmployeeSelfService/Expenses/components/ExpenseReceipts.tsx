import React, { useState } from 'react';
import { FileText, Download, Eye, Upload } from 'lucide-react';
import Button from '@/components/ui/button';

interface ExpenseReceiptsProps {
  receipts?: any[];
}

export default function ExpenseReceipts({ receipts }: ExpenseReceiptsProps) {
  const [filter, setFilter] = useState<'My Receipts' | 'Upload Receipt' | 'OCR Receipt Scan' | 'Linked Receipts'>('My Receipts');

  const defaultReceipts = receipts || [
    { id: 'VCH-8821', title: 'Uber Fare Receipt', claimRef: 'CLM-2026-101', date: '2026-07-18', size: '240 KB', type: 'PDF' },
    { id: 'VCH-8902', title: 'Team Lunch Cash Voucher', claimRef: 'CLM-2026-102', date: '2026-07-25', size: '1.2 MB', type: 'JPG' },
    { id: 'VCH-8910', title: 'Internet Broadband Bill Invoice', claimRef: 'CLM-2026-103', date: '2026-07-27', size: '480 KB', type: 'PDF' },
  ];

  return (
    <div className="bg-white rounded-md border border-slate-200/80 shadow-2xs p-4 animate-in fade-in duration-200 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-md overflow-x-auto">
          {(['My Receipts', 'Upload Receipt', 'OCR Receipt Scan', 'Linked Receipts'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                filter === tab 
                  ? 'bg-white text-slate-800 shadow-2xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-3 font-medium rounded-xs cursor-pointer flex items-center gap-1.5 shrink-0">
          <Upload size={13} />
          Upload Receipt
        </Button>
      </div>
      {filter === 'Upload Receipt' && (
        <div className="p-8 border-2 border-dashed border-slate-300 rounded-md text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
          <Upload size={24} className="mx-auto text-[#008060] mb-2" />
          <h4 className="text-[13px] font-semibold text-slate-800">Drag & Drop Receipt Files Here</h4>
          <p className="text-[11.5px] text-slate-500 mt-1">Supports PDF, PNG, JPG files up to 10MB each</p>
          <Button className="mt-3 bg-[#008060] hover:bg-[#006e52] text-white text-[12px] h-8 px-4 font-medium rounded-xs cursor-pointer inline-flex items-center gap-1.5">
            Browse Files
          </Button>
        </div>
      )}

      {filter === 'OCR Receipt Scan' && (
        <div className="p-6 border border-slate-200 rounded-md bg-emerald-50/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[13px] font-semibold text-slate-800 flex items-center gap-2">
              <FileText size={16} className="text-[#008060]" />
              AI Automated Receipt OCR Scanner
            </h4>
            <span className="text-[11px] font-medium bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Ready</span>
          </div>
          <p className="text-[12px] text-slate-600 mb-3">Upload a photo of your receipt to auto-extract Title, Voucher No, Date, and Amount into your claim form.</p>
          <div className="border border-dashed border-emerald-300 rounded-md p-4 text-center bg-white">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white text-[12px] h-8 px-4 font-medium rounded-xs cursor-pointer">
              Upload & Auto-Scan Bill
            </Button>
          </div>
        </div>
      )}

      {(filter === 'My Receipts' || filter === 'Linked Receipts') && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {defaultReceipts.map((rcpt, idx) => (
            <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded bg-emerald-100 text-[#008060] flex items-center justify-center shrink-0">
                  <FileText size={16} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[12px] font-semibold text-slate-800 truncate" title={rcpt.title}>{rcpt.title}</h4>
                  <p className="text-[10.5px] font-mono text-slate-500">{rcpt.id} • {rcpt.claimRef}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-2">
                <button className="p-1 text-slate-500 hover:text-emerald-700 rounded hover:bg-slate-200/60" title="View">
                  <Eye size={14} />
                </button>
                <button className="p-1 text-slate-500 hover:text-emerald-700 rounded hover:bg-slate-200/60" title="Download">
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
