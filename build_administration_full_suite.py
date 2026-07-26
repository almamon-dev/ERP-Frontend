import os
import json

base_dir = "/home/mamon/React/ERP-Frontend/src/modules/Administration"

modules_schema = {
    "Monitoring": [
        {"name": "Dashboard", "path": "dashboard", "desc": "Real-time system health and resource consumption overview."},
        {"name": "Error Logs", "path": "errors", "desc": "Application exceptions and system error traces."},
        {"name": "Performance", "path": "performance", "desc": "Response times, CPU load, and memory usage metrics."},
        {"name": "API Logs", "path": "api", "desc": "REST API request and response payload audit logs."},
        {"name": "Database Status", "path": "database", "desc": "PostgreSQL connection pool status and query metrics."},
        {"name": "Storage Usage", "path": "storage", "desc": "Disk space utilization and S3 storage bucket statistics."}
    ],
    "SystemTools": [
        {"name": "Queue Monitor", "path": "queue", "desc": "Background job queue workers and failed job retries."},
        {"name": "Scheduled Jobs", "path": "jobs", "desc": "Cron tasks, recurring jobs, and execution schedules."},
        {"name": "Cache Manager", "path": "cache", "desc": "Redis cache keys, flush operations, and memory stats."},
        {"name": "Log Viewer", "path": "logs", "desc": "System runtime log files and tail streams."},
        {"name": "System Health", "path": "health", "desc": "Service health checks and microservice heartbeats."},
        {"name": "Server Information", "path": "server", "desc": "OS kernel, Node runtime, Docker container environment."}
    ],
    "Localization": [
        {"name": "Languages", "path": "languages", "desc": "Supported system languages and active locales."},
        {"name": "Translations", "path": "translations", "desc": "I18n string dictionaries and locale translations."},
        {"name": "Currency", "path": "currency", "desc": "Supported currencies, exchange rates, and symbols."},
        {"name": "Date Formats", "path": "date-formats", "desc": "Regional date, time, and calendar formatting preferences."},
        {"name": "Time Zones", "path": "time-zones", "desc": "System timezone overrides and UTC offset mappings."}
    ],
    "AIConfiguration": [
        {"name": "AI Providers", "path": "providers", "desc": "OpenAI, Claude, Gemini, and Ollama provider settings."},
        {"name": "AI Models", "path": "models", "desc": "Default model configurations (GPT-4o, Claude 3.5, Gemini 1.5)."},
        {"name": "Prompt Templates", "path": "prompts", "desc": "System prompt templates for ERP AI copilots."},
        {"name": "Usage Limits", "path": "limits", "desc": "Token consumption quotas and user rate limits."},
        {"name": "API Configuration", "path": "api", "desc": "API endpoint URLs and authentication header keys."}
    ],
    "Templates": [
        {"name": "Email Templates", "path": "email", "desc": "HTML email layout templates for system notifications."},
        {"name": "Invoice Templates", "path": "invoice", "desc": "Print and PDF invoice layout templates."},
        {"name": "PDF Templates", "path": "pdf", "desc": "General PDF report layout headers and footers."},
        {"name": "Print Templates", "path": "print", "desc": "POS receipt and thermal printer layout formats."}
    ],
    "Workflow": [
        {"name": "Approval Levels", "path": "approval-levels", "desc": "Multi-tier approval workflows for purchase & sales orders."},
        {"name": "Workflow Rules", "path": "rules", "desc": "Automated trigger rules and action handlers."},
        {"name": "Escalation Rules", "path": "escalation", "desc": "SLA timeout escalation paths and manager alerts."},
        {"name": "Automation", "path": "automation", "desc": "Event-driven background automation triggers."}
    ],
    "CustomFields": [
        {"name": "User Fields", "path": "users", "desc": "Custom attributes for user profiles and team members."},
        {"name": "Customer Fields", "path": "customers", "desc": "Custom client metadata fields."},
        {"name": "Product Fields", "path": "products", "desc": "Custom inventory item specs and metadata fields."},
        {"name": "Dynamic Forms", "path": "forms", "desc": "Custom form builder templates and input schemas."}
    ],
    "MasterData": [
        {"name": "Countries", "path": "countries", "desc": "Master list of recognized countries and ISO codes."},
        {"name": "States", "path": "states", "desc": "States, provinces, and regional administrative divisions."},
        {"name": "Cities", "path": "cities", "desc": "City directory and municipal zone mappings."},
        {"name": "Time Zones", "path": "timezones", "desc": "Master timezone lookup database."},
        {"name": "Currencies", "path": "currencies", "desc": "ISO currency code directory."}
    ],
    "FileManagement": [
        {"name": "File Storage", "path": "storage", "desc": "Local storage vs S3 bucket storage settings."},
        {"name": "Upload Rules", "path": "rules", "desc": "Max upload sizes, MIME type restrictions, and security policies."},
        {"name": "File Types", "path": "types", "desc": "Allowed file extensions and MIME categories."},
        {"name": "Media Library", "path": "media", "desc": "Central asset manager and media browser."}
    ]
}

def generate_list_component(mod_name, sub_name, desc):
    return f"""import React, {{ useState }} from 'react';
import {{ Plus, Edit2, Trash2, Save, Activity, CheckCircle, RefreshCcw }} from 'lucide-react';
import DataTable from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import FormLabel from '@/components/ui/label';
import Modal from '@/components/modals/modal';
import Switch from '@/components/ui/switch';

export default function {sub_name.replace(' ', '').replace('&', '').replace('-', '')}List() {{
    const [data, setData] = useState([
        {{ id: '1', name: 'Default {sub_name} Rule', code: '{sub_name[:3].upper()}-001', status: 'Active', updated: '2026-07-26' }},
        {{ id: '2', name: 'Secondary {sub_name} Config', code: '{sub_name[:3].upper()}-002', status: 'Active', updated: '2026-07-25' }},
        {{ id: '3', name: 'Backup {sub_name} Policy', code: '{sub_name[:3].upper()}-003', status: 'Inactive', updated: '2026-07-20' }},
    ]);

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [editItem, setEditItem] = useState<any>(null);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    const columns = [
        {{ id: 'name', label: 'Name / Title', render: (item: any) => <span className="font-semibold text-slate-800 text-[12.5px]">{{item.name}}</span> }},
        {{ id: 'code', label: 'Identifier Code', render: (item: any) => <span className="font-mono text-[12px] text-slate-600 px-2 py-0.5 bg-slate-100 rounded">{{item.code}}</span> }},
        {{ id: 'updated', label: 'Last Modified', render: (item: any) => <span className="text-[12px] text-slate-500">{{item.updated}}</span> }},
        {{ id: 'status', label: 'Status', render: (item: any) => (
            <span className={{`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${{item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}}`}}>
                {{item.status}}
            </span>
        )}},
    ];

    const renderActions = (item: any) => (
        <div className="flex justify-center gap-1.5">
            <button onClick={{() => setEditItem(item)}} className="p-1.5 text-slate-500 hover:text-[#008060] hover:bg-emerald-50 rounded-md transition-colors">
                <Edit2 size={13} />
            </button>
            <button onClick={{() => setData(data.filter(d => d.id !== item.id))}} className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors">
                <Trash2 size={13} />
            </button>
        </div>
    );

    const handleCreate = () => {{
        if (!name) return;
        setData([...data, {{ id: String(Date.now()), name, code: code || `{sub_name[:3].upper()}-00${{data.length + 1}}`, status: 'Active', updated: 'Just now' }}]);
        setName('');
        setCode('');
        setIsCreateOpen(false);
    }};

    const FormContent = ({{ isEdit = false }}: {{ isEdit?: boolean }}) => (
        <div className="space-y-3 pb-32 min-h-[200px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0" required>Name</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input 
                        value={{isEdit ? editItem?.name : name}} 
                        onChange={{(e) => isEdit ? setEditItem({{ ...editItem, name: e.target.value }}) : setName(e.target.value)}}
                        placeholder="Enter name"
                        className="h-8 text-[12.5px]"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">Code</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input 
                        value={{isEdit ? editItem?.code : code}} 
                        onChange={{(e) => isEdit ? setEditItem({{ ...editItem, code: e.target.value }}) : setCode(e.target.value)}}
                        placeholder="e.g. {sub_name[:3].upper()}-100"
                        className="h-8 text-[12.5px]"
                    />
                </div>
            </div>
            <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between">
                <div>
                    <h4 className="text-[12.5px] font-bold text-slate-800">Status</h4>
                    <p className="text-[11px] text-slate-500">Enable or disable this configuration rule.</p>
                </div>
                <Switch defaultChecked={{isEdit ? editItem?.status === 'Active' : true}} />
            </div>
        </div>
    );

    return (
        <div className="w-full p-4 md:p-6 bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">{sub_name}</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">{desc}</p>
                </div>
                <Button onClick={{() => setIsCreateOpen(true)}} className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Plus size={15} /> Add {sub_name}
                </Button>
            </div>
            <DataTable data={{data}} columns={{columns}} actions={{renderActions}} searchPlaceholder="Search..." compact />

            <Modal isOpen={{isCreateOpen}} onClose={{() => setIsCreateOpen(false)}} title={{`Add ${{sub_name}}`}} size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setIsCreateOpen(false)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button onClick={{handleCreate}} className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5"><Save size={13} /> Save</Button>
                    </>
                }}
            >
                <FormContent />
            </Modal>

            <Modal isOpen={{!!editItem}} onClose={{() => setEditItem(null)}} title={{`Edit ${{sub_name}}`}} size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setEditItem(null)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button onClick={{() => {{ setData(data.map(d => d.id === editItem.id ? editItem : d)); setEditItem(null); }}}} className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5"><Save size={13} /> Save Changes</Button>
                    </>
                }}
            >
                {{editItem && <FormContent isEdit />}}
            </Modal>
        </div>
    );
}}
"""

for mod_name, items in modules_schema.items():
    mod_dir = os.path.join(base_dir, mod_name)
    os.makedirs(mod_dir, exist_ok=True)
    
    routes_imports = []
    routes_export = []
    nav_items = []

    for item in items:
        sub_dir = os.path.join(mod_dir, item["name"].replace(' ', '').replace('&', '').replace('-', ''))
        pages_dir = os.path.join(sub_dir, "pages", "List")
        os.makedirs(pages_dir, exist_ok=True)

        comp_name = item["name"].replace(' ', '').replace('&', '').replace('-', '')
        list_code = generate_list_component(mod_name, item["name"], item["desc"])

        with open(os.path.join(pages_dir, "index.tsx"), "w", encoding="utf-8") as f:
            f.write(list_code)

        routes_imports.append(f"import {comp_name}List from './{comp_name}/pages/List';")
        routes_export.append(f"  {{ path: '{item['path']}', element: <{comp_name}List /> }},")
        nav_items.append(f"  {{ name: '{item['name']}', path: '/administration/{mod_name.lower()}/{item['path']}' }},")

    # Write routes.tsx
    routes_code = f"""import React from 'react';
import {{ RouteObject }} from 'react-router-dom';
{'\n'.join(routes_imports)}

export const {mod_name.lower()}Routes: RouteObject[] = [
{'\n'.join(routes_export)}
];
"""
    with open(os.path.join(mod_dir, "routes.tsx"), "w", encoding="utf-8") as f:
        f.write(routes_code)

    # Write navigation.ts
    nav_code = f"""export const {mod_name.lower()}Navigation = [
{'\n'.join(nav_items)}
];
"""
    with open(os.path.join(mod_dir, "navigation.ts"), "w", encoding="utf-8") as f:
        f.write(nav_code)

    # Write index.ts
    index_code = f"""export * from './routes';
export * from './navigation';
"""
    with open(os.path.join(mod_dir, "index.ts"), "w", encoding="utf-8") as f:
        f.write(index_code)

print("✓ Scaffolded all missing Administration sub-modules successfully!")
