import React, { ReactNode } from 'react';
import { Trash2, X } from 'lucide-react';

export interface TableToolbarProps {
    selectedCount?: number;
    onClearSelection?: () => void;
    onDeleteSelected?: () => void;
    children?: ReactNode;
    className?: string;
}

export default function TableToolbar({ 
    selectedCount = 0,
    onClearSelection,
    onDeleteSelected,
    children,
    className = "" 
}: TableToolbarProps) {
    return (
        <div className={`relative z-30 ${className}`}>
            {/* Bulk Action Bar Overlay */}
            {selectedCount > 0 && (
                <div className="absolute inset-0 bg-white z-20 flex items-center justify-between px-3 border-b border-[#ebebeb] animate-in fade-in duration-200">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <span className="flex items-center justify-center bg-[#008060] text-white text-[12px] font-bold h-[22px] px-2 rounded-[3px] shadow-sm">
                                {selectedCount}
                            </span>
                            <span className="text-[13px] font-bold text-[#202223]">
                                {selectedCount === 1 ? 'item selected' : 'items selected'}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {onDeleteSelected && (
                            <button 
                                onClick={onDeleteSelected}
                                className="h-[32px] px-3 bg-white border border-[#d1d1d1] text-[#d82c0d] rounded-[3px] text-[12px] font-bold hover:bg-[#fff5f5] hover:border-[#d82c0d] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer outline-none"
                            >
                                <Trash2 size={14} />
                                Delete selected
                            </button>
                        )}
                        {onClearSelection && (
                            <button 
                                onClick={onClearSelection} 
                                className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:bg-[#f6f6f7] transition-all cursor-pointer outline-none" 
                                title="Clear selection"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>
                </div>
            )}

            <div className={`p-3 border-b border-[#ebebeb] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-opacity ${selectedCount > 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {children}
            </div>
        </div>
    );
}
