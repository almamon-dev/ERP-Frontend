import React from 'react';
import DataTable, { Column } from '@/components/tables/data-table';
import { Edit } from 'lucide-react';
import Button from '@/components/ui/button';

export default function EmailTemplatesList() {
    const data = [
        { id: 1, name: 'Welcome Email', subject: 'Welcome to ERP System', type: 'System', lastUpdated: '12 days ago' },
        { id: 2, name: 'Password Reset', subject: 'Reset Your Password', type: 'Security', lastUpdated: '1 month ago' },
        { id: 3, name: 'Invoice Generated', subject: 'New Invoice #{invoice_number}', type: 'Billing', lastUpdated: '5 days ago' },
    ];

    const columns: Column[] = [
        { id: 'name', label: 'Template Name', render: (item) => <span className="font-bold text-slate-800">{item.name}</span> },
        { id: 'subject', label: 'Email Subject' },
        { id: 'type', label: 'Category' },
        { id: 'lastUpdated', label: 'Last Updated' },
    ];
    
    const renderActions = () => (
        <Button variant="outline" size="sm" className="h-8 gap-2 text-[#008060] border-[#008060]/30 hover:bg-[#008060]/5">
            <Edit size={14} /> Edit HTML
        </Button>
    );

    return (
        <div className="w-full p-6 md:p-8 bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Email Templates</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Customize outgoing system email designs.</p>
                </div>
            </div>
            <DataTable data={data} columns={columns} actions={renderActions} searchPlaceholder="Search templates..." />
        </div>
    );
}
