import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

import { cn } from "@/lib/utils";

export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (dateStr: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'compact' | 'ghost';
  format?: 'full' | 'monthYear';
  align?: 'left' | 'right' | 'auto';
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SHORT_MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export default function DatePicker({
  label,
  value,
  onChange,
  placeholder = 'Select date...',
  className = '',
  disabled = false,
  size = 'md',
  variant = 'default',
  format = 'full',
  align = 'auto'
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        const d = parseInt(parts[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) return new Date(y, m, d);
      }
    }
    return new Date(2026, 6, 1);
  });
  const [selectedDay, setSelectedDay] = useState<number | null>(() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        const d = parseInt(parts[2], 10);
        if (!isNaN(d)) return d;
      }
    }
    return 1;
  });
  const [viewMode, setViewMode] = useState<'calendar' | 'months'>('calendar');
  const [popoverAlign, setPopoverAlign] = useState<'left' | 'right'>('left');

  const containerRef = useRef<HTMLDivElement>(null);

  // Sync value prop whenever it changes externally
  useEffect(() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        const d = parseInt(parts[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
          setCurrentDate(new Date(y, m, d));
          setSelectedDay(d);
          return;
        }
      }
      const parsedDate = new Date(value);
      if (!isNaN(parsedDate.getTime())) {
        setCurrentDate(parsedDate);
        setSelectedDay(parsedDate.getDate());
      }
    }
  }, [value]);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      if (align === 'right' || rect.left + 260 > windowWidth - 16) {
        setPopoverAlign('right');
      } else {
        setPopoverAlign('left');
      }
    }
  }, [isOpen, align]);

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

  const handlePrevYear = () => {
    setCurrentDate(new Date(year - 1, month, 1));
  };

  const handleNextYear = () => {
    setCurrentDate(new Date(year + 1, month, 1));
  };

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

  const formattedSelectedValue = (() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        const d = parseInt(parts[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
          return format === 'monthYear'
            ? `${SHORT_MONTH_NAMES[m]} ${y}`
            : `${SHORT_MONTH_NAMES[m]} ${String(d).padStart(2, '0')}, ${y}`;
        }
      }
      const parsedDate = new Date(value);
      if (!isNaN(parsedDate.getTime())) {
        return format === 'monthYear'
          ? `${SHORT_MONTH_NAMES[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`
          : `${SHORT_MONTH_NAMES[parsedDate.getMonth()]} ${String(parsedDate.getDate()).padStart(2, '0')}, ${parsedDate.getFullYear()}`;
      }
      return value;
    }
    return selectedDay
      ? `${SHORT_MONTH_NAMES[month]} ${String(selectedDay).padStart(2, '0')}, ${year}`
      : placeholder;
  })();

  // Height and Padding Classes matching Input component
  const sizeClasses = size === 'sm'
    ? 'h-[28px] py-0.5 px-2.5 text-[12px]'
    : size === 'lg'
      ? 'h-10 px-3.5 text-[14px]'
      : 'h-[36px] px-3 text-[14px]';

  // Variant Classes
  const variantClasses = variant === 'compact'
    ? 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 font-medium'
    : variant === 'ghost'
      ? 'bg-transparent border-transparent hover:bg-slate-100 text-slate-700 font-semibold'
      : 'bg-white border-[#d1d1d1] text-[#202223] hover:border-slate-400';

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[14px] font-bold text-[#202223]">
          {label}
        </label>
      )}

      <div ref={containerRef} className="relative inline-flex items-center w-full">
        {/* --- INPUT TRIGGER FIELD --- */}
        <div
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={cn(
            "flex h-[30px] w-full rounded-[4px] border bg-white px-3 py-1 text-[12px] font-medium text-[#202223] placeholder:text-[#6d7175] focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 shadow-none cursor-pointer transition-colors border-[#d1d1d1] items-center justify-between",
            disabled && "opacity-50 cursor-not-allowed bg-slate-50",
            className
          )}
        >
          <span className={`truncate ${formattedSelectedValue ? 'font-medium text-[#202223]' : 'text-[#6d7175]'}`}>
            {formattedSelectedValue || placeholder}
          </span>
          <CalendarIcon size={15} className="text-[#6d7175] shrink-0 ml-1.5" />
        </div>

        {/* --- CUSTOM POPOVER CALENDAR MATCHING SCREENSHOT --- */}
        {isOpen && (
          <div className={cn(
            "absolute top-full mt-1 w-[260px] bg-white border border-slate-200 rounded-lg shadow-xl z-[100] p-3 font-sans text-slate-800 animate-in fade-in zoom-in-95 duration-100",
            popoverAlign === 'right' ? "right-0" : "left-0"
          )}>

            {/* HEADER: << <   Jul 2033   > >> MATCHING SCREENSHOT */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  onClick={handlePrevYear}
                  className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Previous Year"
                >
                  <ChevronsLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Previous Month"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setViewMode(viewMode === 'calendar' ? 'months' : 'calendar')}
                className="text-[13.5px] font-bold text-slate-800 hover:text-[#008060] transition-colors cursor-pointer px-2 py-0.5 rounded hover:bg-slate-100 tracking-tight"
              >
                {SHORT_MONTH_NAMES[month]} {year}
              </button>

              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Next Month"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNextYear}
                  className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Next Year"
                >
                  <ChevronsRight size={16} />
                </button>
              </div>
            </div>

            {/* MONTHS SELECTION GRID MODE */}
            {viewMode === 'months' ? (
              <div className="grid grid-cols-3 gap-1.5 py-2">
                {SHORT_MONTH_NAMES.map((mName, mIdx) => (
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
                    className={`py-1.5 text-[12px] font-bold rounded cursor-pointer transition-colors ${mIdx === month
                      ? 'bg-[#008060] text-white'
                      : 'hover:bg-slate-100 text-slate-700'
                      }`}
                  >
                    {mName}
                  </button>
                ))}
              </div>
            ) : (
              <>
                {/* WEEKDAY HEADERS (Su Mo Tu We Th Fr Sa) */}
                <div className="grid grid-cols-7 gap-1 text-center font-bold text-[11px] text-slate-400 mt-2 mb-1">
                  <div>Su</div>
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                </div>

                {/* DAYS GRID */}
                <div className="grid grid-cols-7 gap-1 text-center text-[12px] font-semibold">
                  {/* Empty cells before month start */}
                  {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-7" />
                  ))}

                  {/* Days 1..N */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNum = i + 1;
                    const isSelected = selectedDay === dayNum;
                    return (
                      <div key={dayNum} className="flex items-center justify-center h-7">
                        <button
                          type="button"
                          onClick={() => handleSelectDay(dayNum)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer text-[12px] ${isSelected
                            ? 'bg-[#008060] text-white font-bold shadow-2xs'
                            : 'hover:bg-slate-100 text-slate-700 font-medium'
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
    </div>
  );
}
