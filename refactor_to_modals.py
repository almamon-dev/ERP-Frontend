import os

BASE_DIR = "src/modules/Administration/AccessManagement"

MODULES = {
    "Roles": {
        "singular": "Role",
        "icon": "Shield",
        "description": "Manage system roles and configurations.",
        "display": "Roles"
    },
    "Permissions": {
        "singular": "Permission",
        "icon": "Key",
        "description": "Manage system permissions and access levels.",
        "display": "Permissions"
    },
    "UserGroups": {
        "singular": "UserGroup",
        "icon": "Users",
        "display": "User Groups",
        "description": "Manage user groups and memberships."
    },
    "AccessPolicies": {
        "singular": "AccessPolicy",
        "icon": "ShieldAlert",
        "display": "Access Policies",
        "description": "Manage access policies and rules."
    }
}

def generate_routes(module_name):
    return f"""import {{ RouteObject }} from 'react-router-dom';
import List from './pages/List';

export const {module_name.lower()}Routes: RouteObject[] = [
    {{ index: true, element: <List /> }},
];
"""

def generate_list_page(module_name, config):
    singular = config["singular"]
    display_name = config.get("display", module_name)
    desc = config["description"]
    
    return f"""import React, {{ useState }} from 'react';
import {{ Plus, Eye, Edit, Trash2, RotateCcw, Save }} from 'lucide-react';
import DataTable, {{ Column }} from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Switch from '@/components/ui/switch';
import Select from '@/components/ui/select';
import Modal from '@/components/modals/modal';

const FormLabel = ({{ children, required }}: {{ children: React.ReactNode, required?: boolean }}) => (
    <label className="text-[13px] font-bold text-slate-700 mb-1.5 block">
        {{children}} {{required && <span className="text-red-500">*</span>}}
    </label>
);

export default function {singular}List() {{
    const [data, setData] = useState([
        {{ id: 1, name: 'Sample {singular} 1', code: 'CODE_001', status: 'Active', createdAt: '2026-07-10' }},
        {{ id: 2, name: 'Sample {singular} 2', code: 'CODE_002', status: 'Inactive', createdAt: '2026-07-12' }},
    ]);
    
    const [statusFilter, setStatusFilter] = useState('All');
    
    // Modal states
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);

    const handleDelete = (id: number) => {{
        if (confirm('Are you sure you want to delete this record?')) {{
            setData(prev => prev.filter(c => c.id !== id));
        }}
    }};

    const handleBulkDelete = (ids: number[]) => {{
        if (confirm(`Are you sure you want to delete ${{ids.length}} records?`)) {{
            setData(prev => prev.filter(c => !ids.includes(c.id)));
        }}
    }};

    const columns: Column[] = [
        {{ id: 'id', label: 'ID' }},
        {{ id: 'name', label: 'Name' }},
        {{ id: 'code', label: 'Code' }},
        {{
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={{`px-2.5 py-1 text-[12px] font-medium rounded-full ${{item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}}`}}>
                    {{item.status}}
                </span>
            )
        }},
        {{ id: 'createdAt', label: 'Created At' }},
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={{() => setEditItem(item)}} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={{15}} strokeWidth={{1.5}} />
            </button>
            <button onClick={{() => handleDelete(item.id)}} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={{15}} strokeWidth={{1.5}} />
            </button>
        </div>
    );

    const filteredData = data.filter(c => {{
        if (statusFilter !== 'All' && c.status !== statusFilter) return false;
        return true;
    }});

    const renderFilters = (
        <div className="flex flex-wrap items-center gap-4">
            <div className="w-full sm:w-[200px]">
                <label className="block text-[13px] font-bold text-slate-700 mb-1">Status</label>
                <select 
                    value={{statusFilter}} 
                    onChange={{(e) => setStatusFilter(e.target.value)}}
                    className="w-full h-[36px] px-2 bg-white border border-[#d1d1d1] rounded-[4px] text-[14px] text-[#202223] outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] transition-colors"
                >
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div className="mt-5">
                <button 
                    onClick={{() => setStatusFilter('All')}} 
                    className="h-[36px] w-[36px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[4px] hover:border-[#008060] hover:text-[#008060] transition-all group outline-none shadow-sm"
                    title="Clear Filters"
                >
                    <RotateCcw size={{14}} className="group-hover:rotate-[-45deg] transition-transform" />
                </button>
            </div>
        </div>
    );
    
    // Reusable Form Content for Modals
    const FormContent = ({{ isEdit = false }}: {{ isEdit?: boolean }}) => (
        <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <FormLabel required>Name</FormLabel>
                    <Input defaultValue={{isEdit ? editItem?.name : ''}} placeholder="Enter {singular} Name" />
                </div>
                <div className="col-span-2">
                    <FormLabel required>Code / Identifier</FormLabel>
                    <Input defaultValue={{isEdit ? editItem?.code : ''}} placeholder="e.g. CODE_001" />
                </div>
                <div className="col-span-2">
                    <FormLabel>Description</FormLabel>
                    <Textarea placeholder="Detailed description..." className="min-h-[80px]" />
                </div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-between">
                <div>
                    <h4 className="text-[13px] font-bold text-slate-800">Active Status</h4>
                    <p className="text-[12px] text-slate-500 mt-0.5">Is this {singular.lower()} active in the system?</p>
                </div>
                <Switch defaultChecked={{isEdit ? editItem?.status === 'Active' : true}} />
            </div>
        </div>
    );

    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">{display_name}</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">{desc}</p>
                </div>
                <Button 
                    onClick={{() => setIsCreateModalOpen(true)}} 
                    className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white"
                >
                    <Plus size={{16}} />
                    Add {singular}
                </Button>
            </div>

            <DataTable 
                data={{filteredData}} 
                columns={{columns}}
                searchPlaceholder="Search {display_name.lower()}..."
                actions={{renderActions}}
                onDeleteSelected={{handleBulkDelete}}
                filterContent={{renderFilters}}
            />

            {{/* Create Modal */}}
            <Modal
                isOpen={{isCreateModalOpen}}
                onClose={{() => setIsCreateModalOpen(false)}}
                title={{`Create New ${singular}`}}
                size="md"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setIsCreateModalOpen(false)}}>Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-2 flex items-center">
                            <Save size={{14}} /> Save {singular}
                        </Button>
                    </>
                }}
            >
                <FormContent />
            </Modal>
            
            {{/* Edit Modal */}}
            <Modal
                isOpen={{!!editItem}}
                onClose={{() => setEditItem(null)}}
                title={{`Edit ${singular}`}}
                size="md"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setEditItem(null)}}>Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-2 flex items-center">
                            <Save size={{14}} /> Save Changes
                        </Button>
                    </>
                }}
            >
                {{editItem && <FormContent isEdit />}}
            </Modal>
        </div>
    );
}}
"""

def main():
    import shutil
    for module_name, config in MODULES.items():
        module_path = os.path.join(BASE_DIR, module_name)
        
        # Rewrite routes.tsx
        routes_path = os.path.join(module_path, "routes.tsx")
        with open(routes_path, "w", encoding="utf-8") as f:
            f.write(generate_routes(module_name))
            
        # Rewrite List page
        list_page_path = os.path.join(module_path, "pages", "List", "index.tsx")
        with open(list_page_path, "w", encoding="utf-8") as f:
            f.write(generate_list_page(module_name, config))
            
        # Delete Create and Edit pages
        create_dir = os.path.join(module_path, "pages", "Create")
        edit_dir = os.path.join(module_path, "pages", "Edit")
        if os.path.exists(create_dir):
            shutil.rmtree(create_dir)
        if os.path.exists(edit_dir):
            shutil.rmtree(edit_dir)
            
        print(f"Refactored {module_name} to use Modals instead of dedicated pages.")

if __name__ == "__main__":
    main()
