import React, { useState } from 'react';
import { Plus, Edit, Trash2, RotateCcw, Save, Shield, ShieldCheck, Users, Briefcase, UserCheck, Eye, Layers } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';
import { ROLES, ROLE_LABELS, ROLE_CATEGORIES } from '@/constants/roles';

// Initial dataset matching the exact role hierarchy requested by user
const INITIAL_ROLES = [
  // System / Core Admin
  { id: 1, name: ROLE_LABELS[ROLES.SUPER_ADMIN], code: ROLES.SUPER_ADMIN, category: 'Administration', level: 'Super Level', status: 'Active', members: 2 },
  { id: 2, name: ROLE_LABELS[ROLES.SYSTEM_ADMIN], code: ROLES.SYSTEM_ADMIN, category: 'Administration', level: 'Admin Level', status: 'Active', members: 4 },
  { id: 3, name: ROLE_LABELS[ROLES.COMPANY_ADMIN], code: ROLES.COMPANY_ADMIN, category: 'Administration', level: 'Admin Level', status: 'Active', members: 3 },

  // Executive
  { id: 4, name: ROLE_LABELS[ROLES.CEO], code: ROLES.CEO, category: 'Executive', level: 'C-Suite', status: 'Active', members: 1 },
  { id: 5, name: ROLE_LABELS[ROLES.MD], code: ROLES.MD, category: 'Executive', level: 'C-Suite', status: 'Active', members: 1 },
  { id: 6, name: ROLE_LABELS[ROLES.DIRECTOR], code: ROLES.DIRECTOR, category: 'Executive', level: 'C-Suite', status: 'Active', members: 3 },
  { id: 7, name: ROLE_LABELS[ROLES.GM], code: ROLES.GM, category: 'Executive', level: 'Senior Exec', status: 'Active', members: 2 },
  { id: 8, name: ROLE_LABELS[ROLES.AGM], code: ROLES.AGM, category: 'Executive', level: 'Senior Exec', status: 'Active', members: 4 },

  // Management
  { id: 9, name: ROLE_LABELS[ROLES.OPERATIONS_MANAGER], code: ROLES.OPERATIONS_MANAGER, category: 'Management', level: 'Department Head', status: 'Active', members: 2 },
  { id: 10, name: ROLE_LABELS[ROLES.HR_MANAGER], code: ROLES.HR_MANAGER, category: 'Management', level: 'Department Head', status: 'Active', members: 3 },
  { id: 11, name: ROLE_LABELS[ROLES.FINANCE_MANAGER], code: ROLES.FINANCE_MANAGER, category: 'Management', level: 'Department Head', status: 'Active', members: 2 },
  { id: 12, name: ROLE_LABELS[ROLES.SALES_MANAGER], code: ROLES.SALES_MANAGER, category: 'Management', level: 'Department Head', status: 'Active', members: 5 },
  { id: 13, name: ROLE_LABELS[ROLES.PURCHASE_MANAGER], code: ROLES.PURCHASE_MANAGER, category: 'Management', level: 'Department Head', status: 'Active', members: 2 },
  { id: 14, name: ROLE_LABELS[ROLES.INVENTORY_MANAGER], code: ROLES.INVENTORY_MANAGER, category: 'Management', level: 'Department Head', status: 'Active', members: 2 },
  { id: 15, name: ROLE_LABELS[ROLES.PROJECT_MANAGER], code: ROLES.PROJECT_MANAGER, category: 'Management', level: 'Manager', status: 'Active', members: 6 },
  { id: 16, name: ROLE_LABELS[ROLES.IT_MANAGER], code: ROLES.IT_MANAGER, category: 'Management', level: 'Department Head', status: 'Active', members: 1 },

  // Team Management
  { id: 17, name: ROLE_LABELS[ROLES.TEAM_LEADER], code: ROLES.TEAM_LEADER, category: 'Team Management', level: 'Team Lead', status: 'Active', members: 12 },
  { id: 18, name: ROLE_LABELS[ROLES.SUPERVISOR], code: ROLES.SUPERVISOR, category: 'Team Management', level: 'Supervisor', status: 'Active', members: 18 },
  { id: 19, name: ROLE_LABELS[ROLES.SHIFT_IN_CHARGE], code: ROLES.SHIFT_IN_CHARGE, category: 'Team Management', level: 'Supervisor', status: 'Active', members: 8 },

  // Staff
  { id: 20, name: ROLE_LABELS[ROLES.HR_EXECUTIVE], code: ROLES.HR_EXECUTIVE, category: 'Staff', level: 'Executive', status: 'Active', members: 8 },
  { id: 21, name: ROLE_LABELS[ROLES.ACCOUNTANT], code: ROLES.ACCOUNTANT, category: 'Staff', level: 'Officer', status: 'Active', members: 10 },
  { id: 22, name: ROLE_LABELS[ROLES.SALES_EXECUTIVE], code: ROLES.SALES_EXECUTIVE, category: 'Staff', level: 'Executive', status: 'Active', members: 24 },
  { id: 23, name: ROLE_LABELS[ROLES.PURCHASE_EXECUTIVE], code: ROLES.PURCHASE_EXECUTIVE, category: 'Staff', level: 'Executive', status: 'Active', members: 6 },
  { id: 24, name: ROLE_LABELS[ROLES.INVENTORY_OFFICER], code: ROLES.INVENTORY_OFFICER, category: 'Staff', level: 'Officer', status: 'Active', members: 7 },
  { id: 25, name: ROLE_LABELS[ROLES.STORE_KEEPER], code: ROLES.STORE_KEEPER, category: 'Staff', level: 'Staff', status: 'Active', members: 11 },
  { id: 26, name: ROLE_LABELS[ROLES.CUSTOMER_SUPPORT_EXECUTIVE], code: ROLES.CUSTOMER_SUPPORT_EXECUTIVE, category: 'Staff', level: 'Executive', status: 'Active', members: 15 },
  { id: 27, name: ROLE_LABELS[ROLES.RECEPTIONIST], code: ROLES.RECEPTIONIST, category: 'Staff', level: 'Staff', status: 'Active', members: 4 },
  { id: 28, name: ROLE_LABELS[ROLES.OFFICE_ASSISTANT], code: ROLES.OFFICE_ASSISTANT, category: 'Staff', level: 'Staff', status: 'Active', members: 9 },
  { id: 29, name: ROLE_LABELS[ROLES.STAFF], code: ROLES.STAFF, category: 'Staff', level: 'General Staff', status: 'Active', members: 35 },

  // Employee, Auditor, Guest
  { id: 30, name: ROLE_LABELS[ROLES.EMPLOYEE], code: ROLES.EMPLOYEE, category: 'Employee', level: 'Standard User', status: 'Active', members: 142 },
  { id: 31, name: ROLE_LABELS[ROLES.AUDITOR], code: ROLES.AUDITOR, category: 'Audit', level: 'Audit & Compliance', status: 'Active', members: 3 },
  { id: 32, name: ROLE_LABELS[ROLES.GUEST], code: ROLES.GUEST, category: 'Guest', level: 'Read Only', status: 'Active', members: 0 },
];

export default function RoleList() {
  const [data, setData] = useState(INITIAL_ROLES);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this role?')) {
      setData(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleBulkDelete = (ids: number[]) => {
    if (confirm(`Are you sure you want to delete ${ids.length} roles?`)) {
      setData(prev => prev.filter(c => !ids.includes(c.id)));
    }
  };

  const columns: Column[] = [
    { id: 'id', label: 'ID', render: (item) => <span className="text-slate-400 font-mono text-[11.5px]">#{item.id}</span> },
    {
      id: 'name',
      label: 'Role Name',
      render: (item) => (
        <div className="flex items-center gap-2">
          <Shield size={15} className="text-[#008060] shrink-0" />
          <span className="font-bold text-slate-800 text-[13px]">{item.name}</span>
        </div>
      )
    },
    { id: 'code', label: 'System Code', render: (item) => <span className="font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold">{item.code}</span> },
    {
      id: 'category',
      label: 'Category',
      render: (item) => {
        const categoryColors: Record<string, string> = {
          'Administration': 'bg-purple-100 text-purple-800 border-purple-200',
          'Executive': 'bg-blue-100 text-blue-800 border-blue-200',
          'Management': 'bg-indigo-100 text-indigo-800 border-indigo-200',
          'Team Management': 'bg-emerald-100 text-emerald-800 border-emerald-200',
          'Staff': 'bg-[#008060]/10 text-[#008060] border-emerald-200',
          'Employee': 'bg-slate-100 text-slate-700 border-slate-200',
          'Audit': 'bg-amber-100 text-amber-800 border-amber-200',
          'Guest': 'bg-slate-50 text-slate-500 border-slate-200',
        };
        return (
          <span className={`px-2 py-0.5 text-[11px] font-bold rounded border ${categoryColors[item.category] || 'bg-slate-100 text-slate-700'}`}>
            {item.category}
          </span>
        );
      }
    },
    { id: 'members', label: 'Assigned Users', render: (item) => <span className="font-mono font-bold text-slate-700 text-[12px]">{item.members} Users</span> },
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
      <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-[#008060] hover:bg-emerald-50 rounded-md transition-colors" title="Edit Role">
        <Edit size={14} strokeWidth={1.5} />
      </button>
      <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete Role">
        <Trash2 size={14} strokeWidth={1.5} />
      </button>
    </div>
  );

  const filteredData = data.filter(c => {
    if (categoryFilter !== 'All' && c.category !== categoryFilter) return false;
    if (statusFilter !== 'All' && c.status !== statusFilter) return false;
    return true;
  });

  const categoriesList = ['All', 'Administration', 'Executive', 'Management', 'Team Management', 'Staff', 'Employee', 'Audit', 'Guest'];

  const renderFilters = (
    <div className="flex flex-wrap items-center gap-3">
      <div className="w-full sm:w-[200px]">
        <label className="block text-[11.5px] font-bold text-slate-700 mb-1">Category Group</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none"
        >
          {categoriesList.map(cat => (
            <option key={cat} value={cat}>{cat === 'All' ? 'All Role Categories' : cat}</option>
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
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Role Name</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <Input defaultValue={isEdit ? editItem?.name : ''} placeholder="e.g. Chief Executive Officer (CEO)" className="h-8 text-[12.5px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>System Code</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <Input defaultValue={isEdit ? editItem?.code : ''} placeholder="e.g. ceo" className="font-mono h-8 text-[12.5px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Category Group</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <select defaultValue={isEdit ? editItem?.category : 'Executive'} className="w-full h-8 px-2 border border-slate-300 rounded text-[12.5px] outline-none">
            <option value="Administration">Administration</option>
            <option value="Executive">Executive</option>
            <option value="Management">Management</option>
            <option value="Team Management">Team Management</option>
            <option value="Staff">Staff</option>
            <option value="Employee">Employee</option>
            <option value="Audit">Audit</option>
            <option value="Guest">Guest</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0 mt-1">Description</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline mt-1">:</span>
        <div className="flex-1">
          <Textarea defaultValue={isEdit ? editItem?.description : ''} placeholder="Describe role authority and responsibilities..." className="min-h-[60px] text-[12.5px] py-1.5" />
        </div>
      </div>

      <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
        <div>
          <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
          <p className="text-[11px] text-slate-500 mt-0.5">Is this role enabled across the ERP system?</p>
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
            <ShieldCheck className="text-[#008060]" size={22} />
            System Roles & Permissions Hierarchy
          </h1>
          <p className="text-[12.5px] font-medium text-slate-500 mt-0.5">
            Total <strong className="text-[#008060]">{data.length} Roles</strong> across Administration, Executive, Management, Team Management, Staff, and Employees.
          </p>
        </div>

        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px] h-8.5 px-4 font-bold shadow-2xs cursor-pointer"
        >
          <Plus size={14} />
          Create New Role
        </Button>
      </div>

      {/* QUICK STATS CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-5">
        {[
          { title: 'Admin & System', count: 3, bg: 'bg-purple-50 text-purple-700 border-purple-200' },
          { title: 'Executive (C-Suite)', count: 5, bg: 'bg-blue-50 text-blue-700 border-blue-200' },
          { title: 'Management', count: 8, bg: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
          { title: 'Team Leaders', count: 3, bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
          { title: 'Staff Officers', count: 10, bg: 'bg-teal-50 text-teal-700 border-teal-200' },
          { title: 'General Employees', count: 1, bg: 'bg-slate-100 text-slate-700 border-slate-200' },
          { title: 'Auditor & Guest', count: 2, bg: 'bg-amber-50 text-amber-700 border-amber-200' },
        ].map((card, i) => (
          <div key={i} className={`p-2.5 rounded-[3px] border ${card.bg} text-center space-y-0.5`}>
            <div className="text-[18px] font-extrabold font-mono leading-none">{card.count}</div>
            <div className="text-[10px] font-bold truncate">{card.title}</div>
          </div>
        ))}
      </div>

      {/* DATA TABLE */}
      <DataTable
        data={filteredData}
        columns={columns}
        searchPlaceholder="Search role name or system code..."
        actions={renderActions}
        onDeleteSelected={handleBulkDelete}
        filterContent={renderFilters}
        compact
      />

      {/* Create Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New Role Definition"
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-8 text-[12px]">Cancel</Button>
            <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1 flex items-center text-[12px] h-8 px-3 font-bold">
              <Save size={13} /> Save Role
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
        title="Edit System Role"
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
