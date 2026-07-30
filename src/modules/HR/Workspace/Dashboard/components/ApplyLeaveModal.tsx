import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2 } from 'lucide-react';
import { LeaveFormData } from '../types';

interface ApplyLeaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitLeave: (data: LeaveFormData) => void;
}

export const ApplyLeaveModal: React.FC<ApplyLeaveModalProps> = ({ isOpen, onClose, onSubmitLeave }) => {
  const [formData, setFormData] = useState<LeaveFormData>({ leaveType: 'Casual Leave [CL]', startDate: '', endDate: '', reason: '' });
  if (!isOpen) return null;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.startDate || !formData.endDate) return;
    onSubmitLeave(formData);
    setFormData({ leaveType: 'Casual Leave [CL]', startDate: '', endDate: '', reason: '' });
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 font-['Poppins',sans-serif]">
      <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xl w-full max-w-[420px] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="px-4 py-2.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <h3 className="font-semibold text-[14.5px] leading-[18px] text-[#1e293b]">Apply for Leave</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 cursor-pointer p-1 rounded hover:bg-slate-200/50 transition-colors">
            <X size={15} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-2.5 text-left">
          <div>
            <label className="block font-medium text-[12px] text-[#475467] mb-1">Leave Type</label>
            <select
              value={formData.leaveType}
              onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
              className="w-full h-8 bg-slate-50/70 border border-slate-200 rounded px-2.5 outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px]"
            >
              <option value="Casual Leave [CL]">Casual Leave [CL] (Bal: 9)</option>
              <option value="Sick Leave [SL]">Sick Leave [SL] (Bal: 13)</option>
              <option value="Earn Leave [EL]">Earn Leave [EL] (Bal: 29)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block font-medium text-[12px] text-[#475467] mb-1">Start Date</label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full h-8 bg-slate-50/70 border border-slate-200 rounded px-2.5 outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px]"
              />
            </div>
            <div>
              <label className="block font-medium text-[12px] text-[#475467] mb-1">End Date</label>
              <input
                type="date"
                required
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full h-8 bg-slate-50/70 border border-slate-200 rounded px-2.5 outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px]"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-[12px] text-[#475467] mb-1">Reason / Purpose</label>
            <textarea
              rows={2}
              placeholder="Provide brief explanation for leave request..."
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full p-2 bg-slate-50/70 border border-slate-200 rounded outline-none focus:bg-white focus:border-[#008060] font-normal text-[#344054] text-[12.5px] resize-none"
            />
          </div>

          <div className="pt-2.5 flex items-center justify-end gap-2 border-t border-slate-100">
            <button type="button" onClick={onClose} className="px-3 py-1 font-medium text-[12px] text-[#344054] bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-3.5 py-1 font-medium text-[12px] text-white bg-[#008060] hover:bg-[#006e52] rounded transition-colors flex items-center gap-1 cursor-pointer">
              <CheckCircle2 size={13} />
              <span>Submit Application</span>
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};
