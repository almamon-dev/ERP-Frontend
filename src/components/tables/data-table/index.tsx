import React, { useState, useRef, useEffect } from 'react';
import { 
    Search, SlidersHorizontal, RotateCcw, Trash2, X
} from 'lucide-react';
import TablePagination from '@/components/tables/table-pagination';
import EmptyState from '@/components/tables/empty-state';
import TableSearch from '@/components/tables/table-search';
import TableFilter from '@/components/tables/table-filter';
import TableColumnToggle from '@/components/tables/table-column-toggle';
import TableToolbar from '@/components/tables/table-toolbar';

export interface Column<T = any> {
    id: string;
    label: string;
    render?: (item: T) => React.ReactNode;
}

export interface DataTableProps<T = any> {
    data: T[];
    columns: Column<T>[];
    searchPlaceholder?: string;
    onDeleteSelected?: (selectedIds: number[]) => void;
    keyExtractor?: (item: T) => number | string;
    actions?: (item: T) => React.ReactNode;
    filterContent?: React.ReactNode;
    compact?: boolean;
    dateValue?: string;
    onDateChange?: (date: string) => void;
}

export default function DataTable<T extends Record<string, any>>({ 
    data, 
    columns, 
    searchPlaceholder = "Search...", 
    onDeleteSelected,
    keyExtractor = (item: any) => item.id,
    actions,
    filterContent,
    compact = false,
    dateValue: propDateValue,
    onDateChange: propOnDateChange
}: DataTableProps<T>) {
    const [search, setSearch] = useState('');
    const [dateFilter, setDateFilter] = useState(propDateValue || '');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedIds, setSelectedIds] = useState<(number | string)[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map(c => c.id));
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    // Reset to page 1 when search or date changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search, dateFilter]);

    const handleDateChange = (val: string) => {
        setDateFilter(val);
        if (propOnDateChange) propOnDateChange(val);
    };

    // Apply Search & Date Filtering
    const filteredData = data.filter(item => {
        if (search) {
            const matchesSearch = Object.values(item).some(val => 
                String(val).toLowerCase().includes(search.toLowerCase())
            );
            if (!matchesSearch) return false;
        }
        if (dateFilter) {
            const matchesDate = Object.values(item).some(val => 
                String(val).includes(dateFilter)
            );
            if (!matchesDate) return false;
        }
        return true;
    });

    // Pagination Logic
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);

    const toggleColumn = (id: string) => {
        setVisibleColumns(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === paginatedData.length && paginatedData.length > 0) {
            setSelectedIds([]);
        } else {
            setSelectedIds(paginatedData.map(item => keyExtractor(item)));
        }
    };

    const handleSelectAll = () => {
        setSelectedIds(filteredData.map(item => keyExtractor(item)));
    };

    const toggleSelect = (id: number | string) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    return (
        <div className="bg-white rounded-[4px] border border-[#ebebeb] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
            <div className="animate-in fade-in duration-300">
                {/* Toolbar (Polaris Style) */}
                <TableToolbar 
                    selectedCount={selectedIds.length}
                    totalCount={totalItems}
                    onClearSelection={() => setSelectedIds([])}
                    onDeleteSelected={onDeleteSelected ? () => onDeleteSelected(selectedIds as number[]) : undefined}
                    onSelectAll={handleSelectAll}
                >
                    <TableSearch 
                        value={search} 
                        onChange={setSearch} 
                        placeholder={searchPlaceholder} 
                    />
                    <div className="flex items-center gap-1.5">
                        <TableFilter 
                            dateValue={dateFilter}
                            onDateChange={handleDateChange}
                        />
                        
                        <div className="w-[1px] h-4 bg-[#ebebeb] mx-1"></div>

                        <TableColumnToggle 
                            columns={columns}
                            visibleColumns={visibleColumns}
                            onToggleColumn={toggleColumn}
                        />
                    </div>
                </TableToolbar>

                {/* Filter Content Area */}
                {showFilters && filterContent && (
                    <div className="p-4 border-b border-[#ebebeb] bg-[#fcfcfc] animate-in slide-in-from-top-2 duration-200">
                        {filterContent}
                    </div>
                )}

                {/* Data Table */}
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#f9fafb] border-b border-[#ebebeb] text-[13px] font-bold text-[#6d7175] uppercase tracking-wider">
                                <th className={`${compact ? 'px-2 py-1.5' : 'px-3 py-2'} w-[40px]`}>
                                    <div className="flex items-center justify-center">
                                        <input 
                                        type="checkbox" 
                                        checked={selectedIds.length === paginatedData.length && paginatedData.length > 0}
                                        onChange={toggleSelectAll}
                                        className="w-4 h-4 text-[#008060] border-[#d1d1d1] rounded-[2px] focus:ring-[#008060] cursor-pointer" />
                                                </div>
                                </th>
                                {columns.map(col => visibleColumns.includes(col.id) && (
                                    <th key={col.id} className={compact ? 'px-2 py-1.5' : 'px-3 py-2'}>{col.label}</th>
                                ))}
                                {actions && <th className={`${compact ? 'px-2 py-1.5' : 'px-3 py-2'} text-center`}>Actions</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#ebebeb]">
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length + (actions ? 2 : 1)} className="p-0">
                                        <EmptyState />
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map(item => {
                                    const id = keyExtractor(item);
                                    const isSelected = selectedIds.includes(id);
                                    return (
                                        <tr key={id} className={`transition-colors group ${isSelected ? 'bg-[#f4f6f8]' : 'hover:bg-[#f9fafb]'}`}>
                                            <td className={`${compact ? 'px-2 py-1.5' : 'px-3 py-2.5'} whitespace-nowrap`}>
                                                <div className="flex items-center justify-center">
                                                    <input 
                                                    type="checkbox" 
                                                    checked={isSelected}
                                                    onChange={() => toggleSelect(id)}
                                                    className="w-4 h-4 text-[#008060] border-[#d1d1d1] rounded-[2px] focus:ring-[#008060] cursor-pointer" />
                                                </div>
                                            </td>
                                            {columns.map(col => visibleColumns.includes(col.id) && (
                                                <td key={col.id} className={`${compact ? 'px-2 py-1.5' : 'px-3 py-2.5'} whitespace-nowrap text-[14px] text-[#202223]`}>
                                                    {col.render ? col.render(item) : item[col.id]}
                                                </td>
                                            ))}
                                            {actions && (
                                                <td className={`${compact ? 'px-2 py-1.5' : 'px-3 py-2.5'} whitespace-nowrap text-center`}>
                                                    <div className="flex justify-center">
                                                        {actions(item)}
                                                    </div>
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination */}
                <TablePagination 
                    total={totalItems}
                    fromIdx={totalItems > 0 ? startIndex + 1 : 0}
                    toIdx={Math.min(startIndex + perPage, totalItems)}
                    perPage={perPage}
                    onPerPageChange={(val) => {
                        setPerPage(Number(val));
                        setCurrentPage(1);
                    }}
                    onPrevPage={() => setCurrentPage(p => Math.max(1, p - 1))}
                    onNextPage={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    hasPrev={currentPage > 1}
                    hasNext={currentPage < totalPages}
                />
            </div>
        </div>
    );
}
