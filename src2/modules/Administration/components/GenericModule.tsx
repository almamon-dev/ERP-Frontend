import React, { useState, useRef, useEffect } from 'react';
import { 
    Search, Plus, SlidersHorizontal, MoreVertical, 
    RotateCcw, Trash2, X, Settings2, Eye, EyeOff, Edit
} from 'lucide-react';
import Pagination from '@/components/Form/Pagination';

interface Column {
    id: string;
    label: string;
}

interface GenericModuleProps {
    title: string;
    description: string;
    columns?: Column[];
}

export default function GenericModule({ title, description, columns = [] }: GenericModuleProps) {
    const defaultColumns = columns.length > 0 ? columns : [
        { id: 'name', label: 'Name' },
        { id: 'status', label: 'Status' },
        { id: 'created', label: 'Created At' }
    ];

    const [search, setSearch] = useState('');
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<string[]>(defaultColumns.map(c => c.id));
    const [isColumnManagerOpen, setIsColumnManagerOpen] = useState(false);
    const columnManagerRef = useRef<HTMLDivElement>(null);

    // Mock empty state for now
    const mockData: any[] = [];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (columnManagerRef.current && !columnManagerRef.current.contains(event.target as Node)) {
                setIsColumnManagerOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleColumn = (id: string) => {
        setVisibleColumns(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === mockData.length && mockData.length > 0) {
            setSelectedIds([]);
        } else {
            setSelectedIds(mockData.map(d => d.id));
        }
    };

    return (
        <div className="pb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-[20px] font-bold text-[#202223] tracking-tight">{title}</h1>
                    <p className="text-[#6d7175] text-[13px] mt-0.5 font-medium">{description}</p>
                </div>
                <button className="px-4 py-1.5 bg-[#008060] text-white rounded-[3px] font-bold text-[12px] hover:bg-[#006e52] transition-all flex items-center gap-2 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                    <Plus size={14} /> Add New
                </button>
            </div>

            <div className="bg-white rounded-[4px] border border-[#ebebeb] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
                <div className="animate-in fade-in duration-300">
                    <div className="relative z-30">
                        {selectedIds.length > 0 && (
                            <div className="absolute inset-0 bg-white z-20 flex items-center justify-between px-3 border-b border-[#ebebeb] animate-in fade-in duration-200">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center justify-center bg-[#008060] text-white text-[12px] font-bold h-[22px] px-2 rounded-[3px] shadow-sm">
                                            {selectedIds.length}
                                        </span>
                                        <span className="text-[13px] font-bold text-[#202223]">
                                            {selectedIds.length === 1 ? 'item selected' : 'items selected'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="h-[32px] px-3 bg-white border border-[#d1d1d1] text-[#d82c0d] rounded-[3px] text-[12px] font-bold hover:bg-[#fff5f5] hover:border-[#d82c0d] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer outline-none">
                                        <Trash2 size={14} /> Delete selected
                                    </button>
                                    <button onClick={() => setSelectedIds([])} className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:bg-[#f6f6f7] transition-all cursor-pointer outline-none">
                                        <X size={14} />
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className={`p-3 border-b border-[#ebebeb] flex items-center justify-between gap-4 transition-opacity ${selectedIds.length > 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <div className="relative w-[320px]">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d7175]" size={14} />
                                <input 
                                    type="text" 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search..." 
                                    className="w-full h-[32px] pl-9 pr-3 border border-[#d1d1d1] rounded-[3px] text-[12px] font-medium placeholder:text-[#6d7175] focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors shadow-none"
                                />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <button className="h-[32px] px-3 rounded-[3px] border border-[#d1d1d1] text-[12px] font-bold flex items-center gap-1.5 bg-white text-[#202223] hover:bg-[#f6f6f7] transition-all outline-none">
                                    <SlidersHorizontal size={14} /> Filters
                                </button>
                                <button className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:border-[#008060] hover:text-[#008060] transition-all group outline-none">
                                    <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" />
                                </button>
                                
                                <div className="w-[1px] h-4 bg-[#ebebeb] mx-1"></div>

                                <div className="relative" ref={columnManagerRef}>
                                    <button 
                                        onClick={() => setIsColumnManagerOpen(!isColumnManagerOpen)}
                                        className={`h-[32px] w-[32px] flex items-center justify-center rounded-[3px] border transition-all outline-none ${isColumnManagerOpen ? 'bg-[#f1f1f1] ring-1 ring-[#008060] border-[#008060] text-[#202223]' : 'bg-white border-[#d1d1d1] text-[#6d7175] hover:bg-[#f6f6f7]'}`}
                                    >
                                        <Settings2 size={14} />
                                    </button>
                                    
                                    {isColumnManagerOpen && (
                                        <div className="absolute right-0 mt-1 w-[240px] bg-white border border-[#ebebeb] rounded-[4px] shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                                            <div className="p-3">
                                                <h3 className="text-[11px] font-bold text-[#6d7175] mb-2 px-1 uppercase">Visible Columns</h3>
                                                <div className="space-y-0.5 max-h-[300px] overflow-y-auto">
                                                    {defaultColumns.map(col => {
                                                        const isVisible = visibleColumns.includes(col.id);
                                                        return (
                                                            <div key={col.id} onClick={() => toggleColumn(col.id)} className="flex items-center justify-between p-1.5 hover:bg-[#f6f6f7] rounded-[4px] group cursor-pointer transition-colors">
                                                                <span className={`text-[12px] truncate ${isVisible ? 'text-[#202223] font-semibold' : 'text-[#bababa]'}`}>
                                                                    {col.label}
                                                                </span>
                                                                <div className="flex items-center gap-2">
                                                                    {isVisible ? <Eye size={14} className="text-[#008060]" /> : <EyeOff size={14} className="text-[#bababa]" />}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#f9fafb] border-b border-[#ebebeb] text-[11px] font-bold text-[#6d7175] uppercase tracking-wider">
                                    <th className="px-4 py-2 w-[40px]">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedIds.length === mockData.length && mockData.length > 0}
                                            onChange={toggleSelectAll}
                                            className="w-4 h-4 text-[#008060] border-[#d1d1d1] rounded-[2px] focus:ring-[#008060] cursor-pointer"
                                        />
                                    </th>
                                    {defaultColumns.map(col => visibleColumns.includes(col.id) && (
                                        <th key={col.id} className="px-4 py-2">{col.label}</th>
                                    ))}
                                    <th className="px-4 py-2 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#ebebeb]">
                                {mockData.length === 0 ? (
                                    <tr>
                                        <td colSpan={defaultColumns.length + 2} className="px-4 py-12 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="w-12 h-12 bg-[#f6f6f7] rounded-full flex items-center justify-center mb-3">
                                                    <Search className="text-[#8c9196]" size={20} />
                                                </div>
                                                <h3 className="text-[14px] font-bold text-[#202223]">No records found</h3>
                                                <p className="text-[13px] text-[#6d7175] mt-1 max-w-sm">Try changing your search query or filters to find what you're looking for.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    mockData.map(item => null)
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    <Pagination 
                        total={mockData.length}
                        fromIdx={0}
                        toIdx={0}
                        perPage={10}
                        onPerPageChange={() => {}}
                        onPrevPage={() => {}}
                        onNextPage={() => {}}
                        hasPrev={false}
                        hasNext={false}
                    />
                </div>
            </div>
        </div>
    );
}
