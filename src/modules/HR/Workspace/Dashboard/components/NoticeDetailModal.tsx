import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Notice } from '../types';

interface NoticeDetailModalProps {
  notice: Notice | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({ notice, onClose }) => {
  if (!notice) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 font-['Poppins',sans-serif]">
      <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xl w-full max-w-[420px] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="px-4 py-2.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
            {notice.category} Notice
          </span>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 cursor-pointer p-1 rounded hover:bg-slate-200/50 transition-colors">
            <X size={15} />
          </button>
        </div>

        <div className="p-4 space-y-2 text-left">
          <h3 className="font-semibold text-[14.5px] leading-[19px] text-[#1e293b]">{notice.title}</h3>
          <div className="text-[11.5px] text-[#667085]">{notice.date}</div>
          <p className="font-normal text-[12.5px] leading-[19px] text-[#344054] bg-slate-50 p-2.5 rounded border border-slate-200/60">
            {notice.content}
          </p>
        </div>

        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button onClick={onClose} className="px-3.5 py-1 font-medium text-[12px] text-white bg-slate-800 hover:bg-slate-900 rounded cursor-pointer transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
