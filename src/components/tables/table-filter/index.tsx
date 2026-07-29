import React from 'react';
import DatePicker from '@/components/ui/date-picker';

export interface TableFilterProps {
    dateValue?: string;
    onDateChange?: (date: string) => void;
    onFilterClick?: () => void;
    onResetClick?: () => void;
    className?: string;
}

export default function TableFilter({ dateValue, onDateChange, className = "" }: TableFilterProps) {
    return (
        <div className={`flex items-center w-40 ${className}`}>
            <DatePicker 
                value={dateValue}
                onChange={(dateStr) => onDateChange && onDateChange(dateStr)}
                placeholder="Filter date..."
                size="sm"
            />
        </div>
    );
}
