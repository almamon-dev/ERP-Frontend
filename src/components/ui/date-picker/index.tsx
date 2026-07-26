import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export interface DatePickerProps {
  value?: string;
  onChange?: (dateStr: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'compact' | 'ghost';
  format?: 'full' | 'monthYear';
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function DatePicker({
  value,
  onChange,
  placeholder = 'Basic date picker',
  className = '',
  disabled = false,
  size = 'md',
  variant = 'default',
  format = 'full'
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 6, 27)); // Default July 27, 2026
  const [selectedDay, setSelectedDay] = useState<number | null>(27);
  const [viewMode, setViewMode] = useState<'calendar' | 'months'>('calendar');

  const containerRef = useRef<HTMLDivElement>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sun

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const dateStr = `${year}-${formattedMonth}-${formattedDay}`;
    if (onChange) onChange(dateStr);
    setIsOpen(false);
  };

  const formattedSelectedValue = format === 'monthYear'
    ? `${MONTH_NAMES[month]} ${year}`
    : selectedDay
      ? `${MONTH_NAMES[month]} ${selectedDay}, ${year}`
      : value || '';

  // Height and Padding Classes
  const sizeClasses = size === 'sm'
    ? 'h-[28px] py-0.5 px-2.5 text-[11.5px]'
    : size === 'lg'
      ? 'h-10 px-3.5 text-[14px]'
      : 'h-8 px-3 text-[12.5px]';

  // Variant Classes
  const variantClasses = variant === 'compact'
    ? 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 font-medium'
    : variant === 'ghost'
      ? 'bg-transparent border-transparent hover:bg-slate-100 text-slate-700 font-semibold'
      : 'bg-white border-slate-300 text-slate-900 hover:border-slate-400';

  return (
    <div ref={containerRef} className={`relative inline-flex items-center ${className}`}>
      {/* --- INPUT TRIGGER FIELD --- */}
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full border rounded-[3px] cursor-pointer transition-colors shadow-2xs ${sizeClasses} ${variantClasses} ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : ''
          } ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : ''}`}
      >
        <span className={`truncate ${formattedSelectedValue ? 'font-medium' : 'text-slate-400'}`}>
          {formattedSelectedValue || placeholder}
        </span>
        <CalendarIcon size={size === 'sm' ? 14 : 16} className="text-slate-500 shrink-0 ml-1.5" />
      </div>

      {/* --- CUSTOM POPOVER CALENDAR --- */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-[280px] bg-white border border-slate-200 rounded-lg shadow-xl z-50 p-4 font-sans text-slate-800 animate-in fade-in zoom-in-95 duration-100">

          {/* HEADER: MONTH YEAR & NAVIGATION */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'calendar' ? 'months' : 'calendar')}
              className="flex items-center gap-1 text-[14px] font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer px-1 py-0.5 rounded hover:bg-slate-100"
            >
              <span>{MONTH_NAMES[month]} {year}</span>
              <ChevronDown size={14} className="text-slate-500" />
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1 rounded text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1 rounded text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Next Month"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* MONTHS SELECTION GRID MODE */}
          {viewMode === 'months' ? (
            <div className="grid grid-cols-3 gap-2 py-3">
              {MONTH_NAMES.map((mName, mIdx) => (
                <button
                  key={mName}
                  type="button"
                  onClick={() => {
                    setCurrentDate(new Date(year, mIdx, 1));
                    if (format === 'monthYear') {
                      setIsOpen(false);
                    } else {
                      setViewMode('calendar');
                    }
                  }}
                  className={`py-2 text-[12.5px] font-medium rounded-[3px] cursor-pointer transition-colors ${mIdx === month
                    ? 'bg-blue-600 text-white font-bold'
                    : 'hover:bg-slate-100 text-slate-700'
                    }`}
                >
                  {mName.slice(0, 3)}
                </button>
              ))}
            </div>
          ) : (
            <>
              {/* WEEKDAY HEADERS (S M T W T F S) */}
              <div className="grid grid-cols-7 gap-1 text-center font-medium text-[12px] text-slate-400 mt-3 mb-2">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>

              {/* DAYS GRID */}
              <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-medium">
                {/* Empty cells before month start */}
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-8" />
                ))}

                {/* Days 1..N */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const isSelected = selectedDay === dayNum;
                  return (
                    <div key={dayNum} className="flex items-center justify-center h-8">
                      <button
                        type="button"
                        onClick={() => handleSelectDay(dayNum)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer text-[12.5px] ${isSelected
                          ? 'bg-[#e0f2fe] text-[#0f172a] font-bold border border-slate-400 shadow-2xs'
                          : 'hover:bg-slate-100 text-slate-700 font-normal'
                          }`}
                      >
                        {dayNum}
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}

        </div>
      )}
    </div>
  );
}
