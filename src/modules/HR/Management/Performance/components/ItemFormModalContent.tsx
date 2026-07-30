import React from 'react';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

interface ItemFormModalContentProps {
    isEdit?: boolean;
    editItem?: any;
}

export const ItemFormModalContent: React.FC<ItemFormModalContentProps> = ({ isEdit = false }: { isEdit?: boolean }) => (
        <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Cycle Title</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={isEdit ? editItem?.name : ''} placeholder="e.g. Mid-Year Review 2026" className="h-8 text-[12.5px]" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Employee Name</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={isEdit ? editItem?.emp : ''} placeholder="e.g. Emily Watson" className="h-8 text-[12.5px]" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Rating Score</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={isEdit ? editItem?.rating : ''} placeholder="e.g. 4.5 / 5.0" className="h-8 text-[12.5px]" />
                </div>
            </div>
            <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
                <div>
                    <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Enable or disable this item</p>
                </div>
                <Switch defaultChecked={isEdit ? editItem?.status === 'Active' : true} />
            </div>
        </div>
    );
