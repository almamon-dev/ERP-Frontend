import React, { useState } from 'react';
import { Plus, Edit, Trash2, RotateCcw, Save, Users, Shield, CheckCircle2, UserCheck, Layers, Award, FileCheck } from 'lucide-react';
import DataTable, { Column } from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

const SAMPLE_USER_GROUPS = [
  {
    id: 1,
    name: 'Executive Leadership Committee',
    code: 'GRP_EXEC_BOARD',
    type: 'Board & Executive',
    leader: 'Md. Al Mamon (CEO)',
    membersCount: 6,
    permissionsCount: 45,
    status: 'Active',
    description: 'High-level C-Suite and Directors committee for strategic approvals and company oversight.'
  },
  {
    id: 2,
    name: 'Capex & Procurement Approval Board',
    code: 'GRP_CAPEX_APPROVERS',
    type: 'Approval Signatories',
    leader: 'HR & Finance Manager',
    membersCount: 8,
    permissionsCount: 22,
    status: 'Active',
    description: 'Authorized signers for high-value purchase orders and capital expenditures above $10,000.'
  },
  {
    id: 3,
    name: 'ERP Implementation Task Force',
    code: 'GRP_ERP_TASKFORCE',
    type: 'Cross-Functional Team',
    leader: 'IT Manager',
    membersCount: 14,
    permissionsCount: 38,
    status: 'Active',
    description: 'Cross-departmental leads overseeing ERP module deployment, testing, and training.'
  },
  {
    id: 4,
    name: 'Payroll Release Signers',
    code: 'GRP_PAYROLL_SIGNERS',
    type: 'Approval Signatories',
    leader: 'Finance Manager',
    membersCount: 4,
    permissionsCount: 18,
    status: 'Active',
    description: 'Final authorization group responsible for approving monthly bank transfer salary disbursements.'
  },
  {
    id: 5,
    name: 'Shift Operations Lead Crew',
    code: 'GRP_SHIFT_LEADS',
    type: 'Operational & Shift',
    leader: 'Shift In-Charge',
    membersCount: 12,
    permissionsCount: 15,
    status: 'Active',
    description: 'Supervisors and shift leaders managing 24/7 plant production roster & overtime logs.'
  },
  {
    id: 6,
    name: 'Confidential HR & Compensation Access',
    code: 'GRP_CONFIDENTIAL_HR',
    type: 'Special Clearance',
    leader: 'HR Manager',
    membersCount: 5,
    permissionsCount: 28,
    status: 'Active',
    description: 'Restricted access group for handling sensitive employee salary, appraisal, and disciplinary files.'
  },
  {
    id: 7,
    name: 'ISO Audit & Compliance Committee',
    code: 'GRP_ISO_AUDIT',
    type: 'Cross-Functional Team',
    leader: 'Internal Auditor',
    membersCount: 9,
    permissionsCount: 16,
    status: 'Active',
    description: 'Internal auditor and QA engineers reviewing operational logs and compliance documentation.'
  },
  {
    id: 8,
    name: 'IT Helpdesk Tier-2 Engineers',
    code: 'GRP_IT_TIER2',
    type: 'Operational & Shift',
    leader: 'IT Lead',
    membersCount: 7,
    permissionsCount: 25,
    status: 'Active',
    description: 'Technical support team handling escalated user access requests, hardware, and server issues.'
  },
];

export default function UserGroupList() {
  const [data, setData] = useState(SAMPLE_USER_GROUPS);
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this User Group?')) {
      setData(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleBulkDelete = (ids: number[]) => {
    if (confirm(`Are you sure you want to delete ${ids.length} User Groups?`)) {
      setData(prev => prev.filter(c => !ids.includes(c.id)));
    }
  };

  const columns: Column[] = [
    { id: 'id', label: 'ID', render: (item) => <span className="text-slate-400 font-mono text-[11.5px]">#{item.id}</span> },
    {
      id: 'name',
      label: 'User Group Name',
      render: (item) => (
        <div>
          <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[13px]">
            <Users size={15} className="text-[#008060] shrink-0" />
            <span>{item.name}</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
        </div>
      )
    },
    {
      id: 'code',
      label: 'Group Code',
      render: (item) => (
        <span className="font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10.5px] font-semibold border border-slate-200">
          {item.code}
        </span>
      )
    },
    {
      id: 'type',
      label: 'Group Type',
      render: (item) => (
        <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-slate-100 text-slate-700 border border-slate-200">
          {item.type}
        </span>
      )
    },
    {
      id: 'leader',
      label: 'Group Lead / Owner',
      render: (item) => (
        <span className="text-[12px] font-medium text-slate-800">
          {item.leader}
        </span>
      )
    },
    {
      id: 'membersCount',
      label: 'Members',
      render: (item) => (
        <span className="font-mono font-bold text-[#008060] bg-emerald-50 px-2 py-0.5 rounded text-[11.5px] border border-emerald-200">
          {item.membersCount} Members
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
      <button onClick={() => setEditItem(item)} className="p-1.5 text-slate-500 hover:text-[#008060] hover:bg-emerald-50 rounded-md transition-colors" title="Edit Group">
        <Edit size={14} strokeWidth={1.5} />
      </button>
      <button onClick={() => handleDelete(item.id)} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete Group">
        <Trash2 size={14} strokeWidth={1.5} />
      </button>
    </div>
  );

  const filteredData = data.filter(c => {
    if (typeFilter !== 'All' && c.type !== typeFilter) return false;
    if (statusFilter !== 'All' && c.status !== statusFilter) return false;
    return true;
  });

  const typesList = ['All', 'Board & Executive', 'Approval Signatories', 'Cross-Functional Team', 'Operational & Shift', 'Special Clearance'];

  const renderFilters = (
    <div className="flex flex-wrap items-center gap-3">
      <div className="w-full sm:w-[220px]">
        <label className="block text-[11.5px] font-bold text-slate-700 mb-1">Group Classification</label>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none"
        >
          {typesList.map(type => (
            <option key={type} value={type}>{type === 'All' ? 'All Group Types' : type}</option>
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
          onClick={() => { setTypeFilter('All'); setStatusFilter('All'); }}
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
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Group Name</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <Input defaultValue={isEdit ? editItem?.name : ''} placeholder="e.g. Capex & Procurement Approval Board" className="h-8 text-[12.5px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Group Code</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <Input defaultValue={isEdit ? editItem?.code : ''} placeholder="e.g. GRP_CAPEX_APPROVERS" className="font-mono h-8 text-[12.5px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Group Type</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <select defaultValue={isEdit ? editItem?.type : 'Approval Signatories'} className="w-full h-8 px-2 border border-slate-300 rounded text-[12.5px] outline-none">
            <option value="Board & Executive">Board & Executive</option>
            <option value="Approval Signatories">Approval Signatories</option>
            <option value="Cross-Functional Team">Cross-Functional Team</option>
            <option value="Operational & Shift">Operational & Shift</option>
            <option value="Special Clearance">Special Clearance</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Group Leader</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
        <div className="flex-1">
          <Input defaultValue={isEdit ? editItem?.leader : ''} placeholder="e.g. Finance Manager" className="h-8 text-[12.5px]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-2.5">
        <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0 mt-1">Description</FormLabel>
        <span className="text-[12.5px] text-slate-400 hidden sm:inline mt-1">:</span>
        <div className="flex-1">
          <Textarea defaultValue={isEdit ? editItem?.description : ''} placeholder="State purpose and operational scope of this group..." className="min-h-[60px] text-[12.5px] py-1.5" />
        </div>
      </div>

      <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
        <div>
          <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
          <p className="text-[11px] text-slate-500 mt-0.5">Is this User Group active in workflow routing and access policy?</p>
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
            <Users className="text-[#008060]" size={22} />
            User Groups Management
          </h1>
          <p className="text-[12.5px] font-medium text-slate-500 mt-0.5">
            Organize users across departments into operational teams, approval committees, task forces, and security clearance groups.
          </p>
        </div>

        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px] h-8.5 px-4 font-bold shadow-2xs cursor-pointer"
        >
          <Plus size={14} />
          Create User Group
        </Button>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
        <div className="bg-white p-3.5 rounded-[3px] border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total User Groups</div>
            <div className="text-[20px] font-extrabold text-slate-900 mt-0.5 font-mono">{data.length} Groups</div>
          </div>
          <div className="w-9 h-9 rounded bg-emerald-50 text-[#008060] flex items-center justify-center border border-emerald-200">
            <Users size={18} />
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-[3px] border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Approval Boards</div>
            <div className="text-[20px] font-extrabold text-slate-900 mt-0.5 font-mono">2 Boards</div>
          </div>
          <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
            <FileCheck size={18} />
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-[3px] border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Task Forces & Teams</div>
            <div className="text-[20px] font-extrabold text-slate-900 mt-0.5 font-mono">3 Teams</div>
          </div>
          <div className="w-9 h-9 rounded bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
            <Layers size={18} />
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-[3px] border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Security Clearance</div>
            <div className="text-[20px] font-extrabold text-slate-900 mt-0.5 font-mono">1 Group</div>
          </div>
          <div className="w-9 h-9 rounded bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
            <Shield size={18} />
          </div>
        </div>
      </div>

      {/* DATA TABLE */}
      <DataTable
        data={filteredData}
        columns={columns}
        searchPlaceholder="Search group name, code or lead..."
        actions={renderActions}
        onDeleteSelected={handleBulkDelete}
        filterContent={renderFilters}
        compact
      />

      {/* Create Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New User Group"
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-8 text-[12px]">Cancel</Button>
            <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1 flex items-center text-[12px] h-8 px-3 font-bold">
              <Save size={13} /> Save User Group
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
        title="Edit User Group"
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
