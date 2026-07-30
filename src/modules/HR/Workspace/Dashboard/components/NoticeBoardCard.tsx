import React, { useState } from 'react';
import { NOTICES_LIST } from '../constants/mockData';
import { Notice } from '../types';

const CATEGORIES = ['All', 'Important', 'Notice', 'Urgent', 'Event'];

interface NoticeBoardCardProps {
  onSelectNotice: (notice: Notice) => void;
}

export const NoticeBoardCard: React.FC<NoticeBoardCardProps> = ({ onSelectNotice }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNotices = selectedCategory === 'All'
    ? NOTICES_LIST
    : NOTICES_LIST.filter((n) => n.category === selectedCategory);

  return (
    <div className="lg:col-span-4 bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <h3 className="font-semibold text-[15px] leading-[22px] text-[#1e3a5f] tracking-tight">Corporate Notice Board</h3>
          <span className="font-semibold text-[12px] leading-[20px] text-white bg-slate-600 px-2 py-0.5 rounded-full">{NOTICES_LIST.length} Items</span>
        </div>

        <div className="flex items-center gap-1 text-[10px] overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-0.5 rounded-[3px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${selectedCategory === cat
                ? 'bg-[#1e293b] text-white shadow-xs'
                : 'bg-slate-100 text-[#475569] hover:bg-slate-200 hover:text-[#1e293b]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 max-h-[260px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filteredNotices.slice(0, 4).map((notice, index) => (
          <div
            key={notice.id}
            onClick={() => onSelectNotice(notice)}
            className="flex items-start gap-2 hover:bg-slate-50/70 transition-colors rounded-[2px] cursor-pointer"
          >
            <div className="relative flex flex-col items-center shrink-0 pt-[8px]">
              <div className={`w-2 h-2 rounded-full shrink-0 ${notice.dot}`} />
              {index < filteredNotices.length - 1 && (
                <div className="w-px flex-1 bg-slate-200 mt-1" style={{ minHeight: '28px' }} />
              )}
            </div>

            <div className="flex items-start gap-2 flex-1 min-w-0 py-1.5">
              <div className="w-[72px] shrink-0">
                <span className="text-[11px] font-normal text-[#667085] block leading-tight whitespace-nowrap">{notice.date}</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-normal text-[13px] text-[#344054] block truncate leading-tight">{notice.title}</span>
                <span className="text-[10.5px] font-normal text-[#667085] block leading-tight mt-0.5">{notice.category}</span>
              </div>
              <div className="shrink-0">
                <span className={`inline-block font-medium px-1.5 py-0.5 rounded-[3px] border text-[11px] whitespace-nowrap ${notice.badge}`}>{notice.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
