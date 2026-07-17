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
}

export default function DataTable<T extends Record<string, any>>({ 
    data, 
    columns, 
    searchPlaceholder = "Search...", 
    onDeleteSelected,
    keyExtractor = (item: any) => item.id,
    actions
}: DataTableProps<T>) {
    const [search, setSearch] = useState('');
    const [selectedIds, setSelectedIds] = useState<(number | string)[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map(c => c.id));

    const toggleColumn = (id: string) => {
        setVisibleColumns(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === data.length && data.length > 0) {
            setSelectedIds([]);
        } else {
            setSelectedIds(data.map(item => keyExtractor(item)));
        }
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
                    onClearSelection={() => setSelectedIds([])}
                    onDeleteSelected={onDeleteSelected ? () => onDeleteSelected(selectedIds as number[]) : undefined}
                >
                    <TableSearch 
                        value={search} 
                        onChange={setSearch} 
                        placeholder={searchPlaceholder} 
                    />
                    <div className="flex items-center gap-1.5">
                        <TableFilter 
                            onFilterClick={() => {}} 
                            onResetClick={() => {}} 
                        />
                        
                        <div className="w-[1px] h-4 bg-[#ebebeb] mx-1"></div>

                        <TableColumnToggle 
                            columns={columns}
                            visibleColumns={visibleColumns}
                            onToggleColumn={toggleColumn}
                        />
                    </div>
                </TableToolbar>

                {/* Data Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#f9fafb] border-b border-[#ebebeb] text-[11px] font-bold text-[#6d7175] uppercase tracking-wider">
                                <th className="px-4 py-2 w-[40px]">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedIds.length === data.length && data.length > 0}
                                        onChange={toggleSelectAll}
                                        className="w-4 h-4 text-[#008060] border-[#d1d1d1] rounded-[2px] focus:ring-[#008060] cursor-pointer"
                                    />
                                </th>
                                {columns.map(col => visibleColumns.includes(col.id) && (
                                    <th key={col.id} className="px-4 py-2">{col.label}</th>
                                ))}
                                {actions && <th className="px-4 py-2 text-right">Actions</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#ebebeb]">
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length + (actions ? 2 : 1)} className="p-0">
                                        <EmptyState />
                                    </td>
                                </tr>
                            ) : (
                                data.map(item => {
                                    const id = keyExtractor(item);
                                    const isSelected = selectedIds.includes(id);
                                    return (
                                        <tr key={id} className={`transition-colors group ${isSelected ? 'bg-[#f4f6f8]' : 'hover:bg-[#f9fafb]'}`}>
                                            <td className="px-4 py-3 whitespace-nowrap">
                                                <input 
                                                    type="checkbox" 
                                                    checked={isSelected}
                                                    onChange={() => toggleSelect(id)}
                                                    className="w-4 h-4 text-[#008060] border-[#d1d1d1] rounded-[2px] focus:ring-[#008060] cursor-pointer"
                                                />
                                            </td>
                                            {columns.map(col => visibleColumns.includes(col.id) && (
                                                <td key={col.id} className="px-4 py-3 whitespace-nowrap text-[13px] text-[#202223]">
                                                    {col.render ? col.render(item) : item[col.id]}
                                                </td>
                                            ))}
                                            {actions && (
                                                <td className="px-4 py-3 whitespace-nowrap text-right">
                                                    {actions(item)}
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
                    total={data.length}
                    fromIdx={data.length > 0 ? 1 : 0}
                    toIdx={data.length}
                    perPage={10}
                    onPerPageChange={() => {}}
                    onPrevPage={() => {}}
                    onNextPage={() => {}}
                    hasPrev={false}
                    hasNext={false}
                />
            </div>
        </div>
    );
}
