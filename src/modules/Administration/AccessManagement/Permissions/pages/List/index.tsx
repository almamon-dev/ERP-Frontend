import React, { useState } from 'react';
import { Plus, Edit, Trash2, RotateCcw, Save, ShieldCheck, Key, Lock, CheckCircle, ChevronRight, Layers, FileKey } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';
import {
  PERMISSION_ACTIONS,
  SYSTEM_PERMISSIONS_STRUCTURE,
  FLAT_PERMISSIONS_LIST,
  PermissionItem
} from '@/constants/permissions';

export default function PermissionList() {
  const [data, setData] = useState<any[]>(
    FLAT_PERMISSIONS_LIST.map((item, index) => ({
      ...item,
      status: index % 7 === 0 ? 'Inactive' : 'Active',
      rolesCount: Math.floor(Math.random() * 8) + 2,
    }))
  );

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to delete this permission key?')) {
      setData(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleBulkDelete = (ids: (string | number)[]) => {
    if (confirm(`Are you sure you want to delete ${ids.length} permission keys?`)) {
      setData(prev => prev.filter(c => !ids.includes(c.id)));
    }
  };

  const columns: Column[] = [
    {
      id: 'name',
      label: 'Permission Name',
      render: (item) => (
        <div className="flex items-center gap-2">
          <Key size={14} className="text-[#008060] shrink-0" />
          <span className="font-bold text-slate-800 text-[13px]">{item.name}</span>
        </div>
      )
    },
    {
      id: 'code',
      label: 'Permission Code',
      render: (item) => (
        <span className="font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10.5px] font-semibold border border-slate-200">
          {item.code}
        </span>
      )
    },
    {
      id: 'category',
      label: 'Module / Category',
      render: (item) => (
        <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-slate-100 text-slate-700 border border-slate-200">
          {item.category}
        </span>
      )
    },
    {
      id: 'rolesCount',
      label: 'Assigned Roles',
      render: (item) => (
        <span className="font-mono font-bold text-slate-700 text-[11.5px] bg-emerald-50 text-[#008060] px-2 py-0.5 rounded border border-emerald-200">
          {item.rolesCount} Roles
        </span>
      )
    },
    {
      id: 'status',
      label: 'Status',
      render: (item) => (
        <span className={`px-2 py-0.5 text-[11px] font-bold rounded-full ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
          {item.status}
        </span>
      )
    },
  ];

  const renderActions = (item: any) => (
    <div className="flex items-center justify-center gap-1">
      <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-[#008060] hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
        <Edit size={14} strokeWidth={1.5} />
      </button>
      <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
        <Trash2 size={14} strokeWidth={1.5} />
      </button>
    </div>
  );

  const filteredData = data.filter(c => {
    if (categoryFilter !== 'All' && c.category !== categoryFilter) return false;
    if (statusFilter !== 'All' && c.status !== statusFilter) return false;
    return true;
  });

  const categoriesList = ['All', ...Object.keys(SYSTEM_PERMISSIONS_STRUCTURE)];

  const renderFilters = (
    <div className="flex flex-wrap items-center gap-3">
      <div className="w-full sm:w-[220px]">
        <label className="block text-[11.5px] font-bold text-slate-700 mb-1">Module Category</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none"
        >
          {categoriesList.map(cat => (
            <option key={cat} value={cat}>{cat === 'All' ? 'All Modules (30)' : cat}</option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-[150px]">
        <label className="block text-[11.5px] font-bold text-slate-700 mb-1">Status</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="mt-5">
        <button
          onClick={() => { setCategoryFilter('All'); setStatusFilter('All'); }}
          className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:border-slate-400 transition-all outline-none cursor-pointer"
          title="Reset Filters"
        >
          <RotateCcw size={13} />
        </button>
      </div>
    </div>
  );

  const FormContent = ({ isEdit = false }: { isEdit?: boolean }) => (
    <div className="space-y-3 font-['Poppins',sans-serif]">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Permission Name</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <Input defaultValue={isEdit ? editItem?.name : ''} placeholder="e.g. Approve Attendance" className="h-8 text-[12.5px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Permission Code</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <Input defaultValue={isEdit ? editItem?.code : ''} placeholder="e.g. PERM_ATTENDANCE_APPROVE_ATTENDANCE" className="font-mono h-8 text-[12.5px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Module Category</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <select defaultValue={isEdit ? editItem?.category : 'Employee'} className="w-full h-8 px-2 border border-slate-300 rounded text-[12.5px] outline-none">
            {Object.keys(SYSTEM_PERMISSIONS_STRUCTURE).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0 mt-1">Description</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline mt-1">:</span>
        <div className="flex-1">
          <Textarea defaultValue={isEdit ? editItem?.description : ''} placeholder="Describe permission scope and access policy..." className="min-h-[60px] text-[12.5px] py-1.5" />
        </div>
      </div>

      <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
        <div>
          <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
          <p className="text-[11px] text-slate-500 mt-0.5">Is this permission active across role policies?</p>
        </div>
        <Switch defaultChecked={isEdit ? editItem?.status === 'Active' : true} />
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20 font-['Poppins',sans-serif]">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <FileKey className="text-[#008060]" size={22} />
            System Permissions & Access Matrix
          </h1>
          <p className="text-[12.5px] font-medium text-slate-500 mt-0.5">
            Total <strong className="text-[#008060]">{data.length} Granular Permissions</strong> categorized across 30 System Modules and 23 Action Verbs.
          </p>
        </div>

        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px] h-8.5 px-4 font-bold shadow-2xs cursor-pointer"
        >
          <Plus size={14} />
          Add Permission
        </Button>
      </div>

      {/* CORE PERMISSION ACTIONS MATRIX BANNER */}
      <div className="bg-white p-3.5 rounded-[3px] border border-slate-200 shadow-2xs mb-5 space-y-2">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="text-[13.5px] font-bold text-slate-800 flex items-center gap-1.5">
            <Layers size={16} className="text-[#008060]" />
            <span>Supported Permission Actions (CRUD & Operations Matrix)</span>
          </h3>
          <span className="text-[11px] font-mono font-bold text-[#008060] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            23 Core Action Verbs
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {PERMISSION_ACTIONS.map(action => (
            <span key={action.key} className={`px-2.5 py-1 text-[11px] font-bold rounded ${action.color} border border-slate-200/60 shadow-2xs`}>
              {action.label}
            </span>
          ))}
        </div>
      </div>

      {/* DATA TABLE */}
      <DataTable
        data={filteredData}
        columns={columns}
        searchPlaceholder="Search permission name or code..."
        actions={renderActions}
        onDeleteSelected={handleBulkDelete}
        filterContent={renderFilters}
        compact
      />

      {/* Create Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New System Permission"
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-8 text-[12px]">Cancel</Button>
            <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1 flex items-center text-[12px] h-8 px-3 font-bold">
              <Save size={13} /> Save Permission
            </Button>
          </>
        }
      >
        <FormContent />
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={!!editItem}
        onClose={() => setEditItem(null)}
        title="Edit System Permission"
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setEditItem(null)} className="h-8 text-[12px]">Cancel</Button>
            <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1 flex items-center text-[12px] h-8 px-3 font-bold">
              <Save size={13} /> Save Changes
            </Button>
          </>
        }
      >
        {editItem && <FormContent isEdit />}
      </Modal>
    </div>
  );
}
