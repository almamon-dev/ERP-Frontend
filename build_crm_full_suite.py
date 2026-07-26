import os
import json

crm_pages = [
    # Lead Management
    {
        "dir": "src/modules/CRM/Leads/pages",
        "file": "LeadsPage.tsx",
        "title": "Leads",
        "subtitle": "Track, assign, and convert potential business prospects.",
        "search": "Search leads...",
        "fields": [
            {"name": "Lead Name", "code": "name", "placeholder": "e.g. John Doe / TechCorp"},
            {"name": "Email Address", "code": "email", "placeholder": "e.g. john@techcorp.com"},
            {"name": "Phone Number", "code": "phone", "placeholder": "e.g. +1 555-0192"},
            {"name": "Source", "code": "source", "placeholder": "e.g. Website / Referral"}
        ],
        "dummy": [
            {"id": 1, "name": "Acme Corp Deal", "email": "contact@acme.com", "phone": "+1 202-555-0143", "source": "Website", "status": "New", "createdAt": "2026-07-20"},
            {"id": 2, "name": "Global Systems Inquiry", "email": "info@globalsys.io", "phone": "+1 202-555-0188", "source": "LinkedIn", "status": "Contacted", "createdAt": "2026-07-22"},
            {"id": 3, "name": "Apex Enterprise Project", "email": "sales@apex.org", "phone": "+1 202-555-0199", "source": "Trade Show", "status": "Qualified", "createdAt": "2026-07-24"},
        ]
    },
    {
        "dir": "src/modules/CRM/LeadSources/pages",
        "file": "index.tsx",
        "title": "Lead Sources",
        "subtitle": "Manage marketing channels and lead acquisition sources.",
        "search": "Search lead sources...",
        "fields": [
            {"name": "Source Name", "code": "name", "placeholder": "e.g. Google Ads"},
            {"name": "Channel Code", "code": "code", "placeholder": "e.g. CHAN_GOOGLE"},
        ],
        "dummy": [
            {"id": 1, "name": "Website Contact Form", "code": "SRC_WEB", "status": "Active", "createdAt": "2026-07-01"},
            {"id": 2, "name": "Google Organic Search", "code": "SRC_SEO", "status": "Active", "createdAt": "2026-07-05"},
            {"id": 3, "name": "Partner Referral", "code": "SRC_PARTNER", "status": "Active", "createdAt": "2026-07-10"},
        ]
    },
    {
        "dir": "src/modules/CRM/LeadStatuses/pages",
        "file": "index.tsx",
        "title": "Lead Statuses",
        "subtitle": "Configure lifecycle stages for lead pipeline progression.",
        "search": "Search lead statuses...",
        "fields": [
            {"name": "Status Name", "code": "name", "placeholder": "e.g. Qualified"},
            {"name": "Stage Code", "code": "code", "placeholder": "e.g. STAGE_QUALIFIED"},
        ],
        "dummy": [
            {"id": 1, "name": "New / Uncontacted", "code": "ST_NEW", "status": "Active", "createdAt": "2026-07-01"},
            {"id": 2, "name": "Contacted & Engaged", "code": "ST_CONTACTED", "status": "Active", "createdAt": "2026-07-02"},
            {"id": 3, "name": "Proposal Sent", "code": "ST_PROPOSAL", "status": "Active", "createdAt": "2026-07-03"},
        ]
    },
    {
        "dir": "src/modules/CRM/LeadScoring/pages",
        "file": "index.tsx",
        "title": "Lead Scoring Rules",
        "subtitle": "Set automated points and criteria to prioritize high-value leads.",
        "search": "Search scoring rules...",
        "fields": [
            {"name": "Rule Title", "code": "name", "placeholder": "e.g. Enterprise Domain Match"},
            {"name": "Points Added", "code": "points", "placeholder": "e.g. +25"},
        ],
        "dummy": [
            {"id": 1, "name": "CEO / C-Level Job Title", "points": "+30", "status": "Active", "createdAt": "2026-07-10"},
            {"id": 2, "name": "Company Size > 500", "points": "+25", "status": "Active", "createdAt": "2026-07-12"},
            {"id": 3, "name": "Visited Pricing Page 3x", "points": "+15", "status": "Active", "createdAt": "2026-07-15"},
        ]
    },

    # Customer & Contacts
    {
        "dir": "src/modules/CRM/Customers/pages",
        "file": "CustomersPage.tsx",
        "title": "Customers",
        "subtitle": "Central customer database with profile management.",
        "search": "Search customers...",
        "fields": [
            {"name": "Customer Name", "code": "name", "placeholder": "e.g. Apex Holdings"},
            {"name": "Contact Person", "code": "contact", "placeholder": "e.g. Sarah Jenkins"},
            {"name": "Email", "code": "email", "placeholder": "e.g. sarah@apex.com"}
        ],
        "dummy": [
            {"id": 1, "name": "Horizon Logistics Ltd", "contact": "David Miller", "email": "david@horizon.com", "status": "Active", "createdAt": "2026-06-15"},
            {"id": 2, "name": "Vertex Software Corp", "contact": "Elena Rostova", "email": "elena@vertex.io", "status": "Active", "createdAt": "2026-06-20"},
            {"id": 3, "name": "Nova Healthcare", "contact": "Marcus Vance", "email": "marcus@novahealth.org", "status": "Active", "createdAt": "2026-07-01"},
        ]
    },
    {
        "dir": "src/modules/CRM/Contacts/pages",
        "file": "ContactsPage.tsx",
        "title": "Contacts",
        "subtitle": "Individual key personnel and client stakeholders.",
        "search": "Search contacts...",
        "fields": [
            {"name": "Full Name", "code": "name", "placeholder": "e.g. Sarah Jenkins"},
            {"name": "Company", "code": "company", "placeholder": "e.g. Apex Holdings"},
            {"name": "Job Title", "code": "title", "placeholder": "e.g. VP of Procurement"}
        ],
        "dummy": [
            {"id": 1, "name": "Sarah Jenkins", "company": "Apex Holdings", "title": "VP of Sales", "status": "Active", "createdAt": "2026-06-10"},
            {"id": 2, "name": "Michael Chang", "company": "Vertex Software", "title": "CTO", "status": "Active", "createdAt": "2026-06-14"},
            {"id": 3, "name": "Rachel Adams", "company": "Nova Healthcare", "title": "Operations Lead", "status": "Active", "createdAt": "2026-06-18"},
        ]
    },
    {
        "dir": "src/modules/CRM/Accounts/pages",
        "file": "index.tsx",
        "title": "Accounts & Companies",
        "subtitle": "B2B client organization profiles and billing hierarchies.",
        "search": "Search accounts...",
        "fields": [
            {"name": "Account Name", "code": "name", "placeholder": "e.g. Enterprise Solutions Corp"},
            {"name": "Industry", "code": "industry", "placeholder": "e.g. Telecommunications"},
            {"name": "Account Manager", "code": "manager", "placeholder": "e.g. Alex Rivera"}
        ],
        "dummy": [
            {"id": 1, "name": "TechGlobal Ltd", "industry": "Software", "manager": "Alex Rivera", "status": "Active", "createdAt": "2026-05-10"},
            {"id": 2, "name": "BlueSkies Media", "industry": "Advertising", "manager": "Jessica Chen", "status": "Active", "createdAt": "2026-05-18"},
        ]
    },
    {
        "dir": "src/modules/CRM/Segments/pages",
        "file": "index.tsx",
        "title": "Customer Segments",
        "subtitle": "Categorize clients based on purchasing behavior and industry.",
        "search": "Search segments...",
        "fields": [
            {"name": "Segment Title", "code": "name", "placeholder": "e.g. Enterprise Tier-1"},
            {"name": "Target Audience", "code": "target", "placeholder": "e.g. Annual revenue > $10M"}
        ],
        "dummy": [
            {"id": 1, "name": "Enterprise VIP", "target": "Revenue > $5M", "status": "Active", "createdAt": "2026-06-01"},
            {"id": 2, "name": "SMB Tech Startups", "target": "10-50 Employees", "status": "Active", "createdAt": "2026-06-05"},
        ]
    },

    # Deals & Pipeline
    {
        "dir": "src/modules/CRM/Opportunities/pages",
        "file": "OpportunitiesPage.tsx",
        "title": "Opportunities & Deals",
        "subtitle": "Sales deal pipeline tracking with revenue forecasting.",
        "search": "Search opportunities...",
        "fields": [
            {"name": "Deal Name", "code": "name", "placeholder": "e.g. Cloud Migration Deal"},
            {"name": "Expected Value", "code": "value", "placeholder": "e.g. $45,000"},
            {"name": "Stage", "code": "stage", "placeholder": "e.g. Negotiation"}
        ],
        "dummy": [
            {"id": 1, "name": "Acme SaaS License Renewal", "value": "$50,000", "stage": "Proposal Sent", "status": "Active", "createdAt": "2026-07-01"},
            {"id": 2, "name": "Global Hardware Upgrade", "value": "$120,000", "stage": "Negotiation", "status": "Active", "createdAt": "2026-07-08"},
        ]
    },
    {
        "dir": "src/modules/CRM/Pipeline/pages",
        "file": "index.tsx",
        "title": "Pipeline Kanban",
        "subtitle": "Visual deal progression board across all active sales stages.",
        "search": "Search pipeline...",
        "fields": [
            {"name": "Pipeline Name", "code": "name", "placeholder": "e.g. Enterprise Sales Pipeline"},
            {"name": "Total Stages", "code": "stages", "placeholder": "e.g. 5 Stages"}
        ],
        "dummy": [
            {"id": 1, "name": "Standard Sales Pipeline", "stages": "6 Stages", "status": "Active", "createdAt": "2026-07-01"},
            {"id": 2, "name": "Key Accounts Pipeline", "stages": "4 Stages", "status": "Active", "createdAt": "2026-07-05"},
        ]
    },
    {
        "dir": "src/modules/CRM/Forecasts/pages",
        "file": "index.tsx",
        "title": "Sales Forecasts",
        "subtitle": "Quarterly and monthly revenue projection tools.",
        "search": "Search forecasts...",
        "fields": [
            {"name": "Forecast Period", "code": "name", "placeholder": "e.g. Q3 2026 Forecast"},
            {"name": "Target Amount", "code": "target", "placeholder": "e.g. $500,000"}
        ],
        "dummy": [
            {"id": 1, "name": "Q3 2026 Target", "target": "$450,000", "status": "Active", "createdAt": "2026-07-01"},
            {"id": 2, "name": "Q4 2026 Projections", "target": "$600,000", "status": "Draft", "createdAt": "2026-07-15"},
        ]
    },
    {
        "dir": "src/modules/CRM/Quotations/pages",
        "file": "index.tsx",
        "title": "Quotations & Proposals",
        "subtitle": "Generate and track formal price estimates and client quotes.",
        "search": "Search quotations...",
        "fields": [
            {"name": "Quote Number", "code": "name", "placeholder": "e.g. QT-2026-089"},
            {"name": "Client Name", "code": "client", "placeholder": "e.g. Vertex Software"},
            {"name": "Grand Total", "code": "total", "placeholder": "e.g. $12,500"}
        ],
        "dummy": [
            {"id": 1, "name": "QT-2026-001", "client": "Horizon Logistics", "total": "$14,200", "status": "Sent", "createdAt": "2026-07-10"},
            {"id": 2, "name": "QT-2026-002", "client": "Nova Healthcare", "total": "$35,000", "status": "Accepted", "createdAt": "2026-07-18"},
        ]
    },

    # Activities & Engagement
    {
        "dir": "src/modules/CRM/FollowUps/pages",
        "file": "FollowUpsPage.tsx",
        "title": "Tasks & Follow-ups",
        "subtitle": "Scheduled reminders, client meetings, and sales task tracking.",
        "search": "Search tasks & follow-ups...",
        "fields": [
            {"name": "Task Title", "code": "name", "placeholder": "e.g. Call CEO of Acme Corp"},
            {"name": "Assigned To", "code": "assignee", "placeholder": "e.g. John Salesman"},
            {"name": "Due Date", "code": "dueDate", "placeholder": "e.g. 2026-07-30"}
        ],
        "dummy": [
            {"id": 1, "name": "Follow up on Q3 Proposal", "assignee": "Alex Rivera", "dueDate": "2026-07-28", "status": "Pending", "createdAt": "2026-07-25"},
            {"id": 2, "name": "Schedule Product Demo", "assignee": "Sarah Jenkins", "dueDate": "2026-07-29", "status": "Completed", "createdAt": "2026-07-24"},
        ]
    },
    {
        "dir": "src/modules/CRM/Communications/pages",
        "file": "CommunicationsPage.tsx",
        "title": "Call & Log History",
        "subtitle": "Log interactions across phone calls, emails, and notes.",
        "search": "Search logs...",
        "fields": [
            {"name": "Subject", "code": "name", "placeholder": "e.g. Discovery Call"},
            {"name": "Contact Person", "code": "contact", "placeholder": "e.g. David Miller"},
            {"name": "Channel", "code": "channel", "placeholder": "e.g. Phone Call"}
        ],
        "dummy": [
            {"id": 1, "name": "Introductory Discovery Call", "contact": "David Miller", "channel": "Phone Call", "status": "Logged", "createdAt": "2026-07-24"},
            {"id": 2, "name": "Contract Term Discussion", "contact": "Elena Rostova", "channel": "Google Meet", "status": "Logged", "createdAt": "2026-07-25"},
        ]
    },
    {
        "dir": "src/modules/CRM/Meetings/pages",
        "file": "index.tsx",
        "title": "Meeting Scheduler",
        "subtitle": "Calendar sync and client meeting appointments.",
        "search": "Search meetings...",
        "fields": [
            {"name": "Meeting Title", "code": "name", "placeholder": "e.g. Executive Strategy Sync"},
            {"name": "Organizer", "code": "organizer", "placeholder": "e.g. Sarah Jenkins"}
        ],
        "dummy": [
            {"id": 1, "name": "Onboarding Strategy Session", "organizer": "Sarah Jenkins", "status": "Scheduled", "createdAt": "2026-07-26"},
        ]
    },
    {
        "dir": "src/modules/CRM/EmailCampaigns/pages",
        "file": "index.tsx",
        "title": "Email Campaigns",
        "subtitle": "Outreach email broadcasts, tracking open rates and clicks.",
        "search": "Search campaigns...",
        "fields": [
            {"name": "Campaign Title", "code": "name", "placeholder": "e.g. Product v2.0 Announcement"},
            {"name": "Target List", "code": "list", "placeholder": "e.g. Active Customers"}
        ],
        "dummy": [
            {"id": 1, "name": "July Product Updates Newsletter", "list": "All Leads", "status": "Sent", "createdAt": "2026-07-15"},
        ]
    },

    # Customer Support
    {
        "dir": "src/modules/CRM/Tickets/pages",
        "file": "index.tsx",
        "title": "Support Tickets",
        "subtitle": "Manage customer service tickets and resolutions.",
        "search": "Search tickets...",
        "fields": [
            {"name": "Ticket Subject", "code": "name", "placeholder": "e.g. API Integration Issue"},
            {"name": "Customer", "code": "customer", "placeholder": "e.g. Apex Corp"},
            {"name": "Priority", "code": "priority", "placeholder": "e.g. High"}
        ],
        "dummy": [
            {"id": 1, "name": "Login Authentication Failure", "customer": "Nova Healthcare", "priority": "High", "status": "Open", "createdAt": "2026-07-26"},
            {"id": 2, "name": "Billing Address Correction", "customer": "TechGlobal", "priority": "Low", "status": "Resolved", "createdAt": "2026-07-20"},
        ]
    },
    {
        "dir": "src/modules/CRM/SlaRules/pages",
        "file": "index.tsx",
        "title": "SLA Rules",
        "subtitle": "Configure response times and ticket escalation benchmarks.",
        "search": "Search SLA rules...",
        "fields": [
            {"name": "Rule Name", "code": "name", "placeholder": "e.g. VIP 1-Hour Response"},
            {"name": "Resolution Limit", "code": "limit", "placeholder": "e.g. 4 Hours"}
        ],
        "dummy": [
            {"id": 1, "name": "Priority 1 - Critical Outage", "limit": "1 Hour", "status": "Active", "createdAt": "2026-07-01"},
        ]
    },
    {
        "dir": "src/modules/CRM/Feedback/pages",
        "file": "index.tsx",
        "title": "Feedback & Surveys",
        "subtitle": "NPS ratings, customer satisfaction surveys, and reviews.",
        "search": "Search feedback...",
        "fields": [
            {"name": "Survey Title", "code": "name", "placeholder": "e.g. Post-Onboarding CSAT"},
            {"name": "Avg Score", "code": "score", "placeholder": "e.g. 4.8 / 5.0"}
        ],
        "dummy": [
            {"id": 1, "name": "2026 Q2 CSAT Survey", "score": "4.9 / 5", "status": "Completed", "createdAt": "2026-07-10"},
        ]
    },

    # Analytics & Reports
    {
        "dir": "src/modules/CRM/Analytics/LeadAnalyticsPage",
        "file": "index.tsx",
        "title": "Lead Analytics",
        "subtitle": "Conversion rates, lead velocity, and channel performance.",
        "search": "Search metrics...",
        "fields": [
            {"name": "Metric Name", "code": "name", "placeholder": "e.g. Lead Conversion Rate"},
            {"name": "Current Value", "code": "value", "placeholder": "e.g. 24.5%"}
        ],
        "dummy": [
            {"id": 1, "name": "Inbound Lead Conversion Rate", "value": "28.4%", "status": "Active", "createdAt": "2026-07-26"},
            {"id": 2, "name": "Avg Lead Qualification Time", "value": "1.8 Days", "status": "Active", "createdAt": "2026-07-26"},
        ]
    },
    {
        "dir": "src/modules/CRM/Analytics/SalesPerformancePage",
        "file": "index.tsx",
        "title": "Sales Performance",
        "subtitle": "Sales representative metrics, deal win rates, and quotas.",
        "search": "Search rep performance...",
        "fields": [
            {"name": "Sales Rep", "code": "name", "placeholder": "e.g. Alex Rivera"},
            {"name": "Quota Attained", "code": "quota", "placeholder": "e.g. 112%"}
        ],
        "dummy": [
            {"id": 1, "name": "Alex Rivera", "quota": "115%", "status": "Active", "createdAt": "2026-07-26"},
            {"id": 2, "name": "Sarah Jenkins", "quota": "98%", "status": "Active", "createdAt": "2026-07-26"},
        ]
    },
    {
        "dir": "src/modules/CRM/Analytics/CampaignRoiPage",
        "file": "index.tsx",
        "title": "Campaign ROI",
        "subtitle": "Return on investment metrics for paid acquisition and events.",
        "search": "Search campaign ROI...",
        "fields": [
            {"name": "Campaign Name", "code": "name", "placeholder": "e.g. Google Ads Q2"},
            {"name": "ROI Ratio", "code": "roi", "placeholder": "e.g. 3.8x"}
        ],
        "dummy": [
            {"id": 1, "name": "Google Search Ads Q2", "roi": "4.2x ROI", "status": "Active", "createdAt": "2026-07-26"},
        ]
    },

    # Settings
    {
        "dir": "src/modules/CRM/Settings/GeneralSettingsPage",
        "file": "index.tsx",
        "title": "General CRM Settings",
        "subtitle": "Default currency, pipeline stages, and system preferences.",
        "search": "Search settings...",
        "fields": [
            {"name": "Setting Name", "code": "name", "placeholder": "e.g. Default Currency"},
            {"name": "Config Value", "code": "value", "placeholder": "e.g. USD ($)"}
        ],
        "dummy": [
            {"id": 1, "name": "Default Currency", "value": "USD ($)", "status": "Active", "createdAt": "2026-07-01"},
            {"id": 2, "name": "Auto-Assign New Leads", "value": "Round Robin", "status": "Active", "createdAt": "2026-07-01"},
        ]
    },
    {
        "dir": "src/modules/CRM/Settings/IntegrationsPage",
        "file": "index.tsx",
        "title": "CRM Integration Setup",
        "subtitle": "Connect email providers, VoIP telephony, and social lead ads.",
        "search": "Search integrations...",
        "fields": [
            {"name": "Service Name", "code": "name", "placeholder": "e.g. Twilio Voice"},
            {"name": "Connection Status", "code": "conn", "placeholder": "e.g. Connected"}
        ],
        "dummy": [
            {"id": 1, "name": "Google Workspace Sync", "conn": "Connected", "status": "Active", "createdAt": "2026-07-01"},
            {"id": 2, "name": "Twilio SMS & Calling", "conn": "Connected", "status": "Active", "createdAt": "2026-07-05"},
        ]
    },
    {
        "dir": "src/modules/CRM/Settings/WebFormsPage",
        "file": "index.tsx",
        "title": "Web Forms Widget",
        "subtitle": "Embeddable lead capture form code snippets for websites.",
        "search": "Search web forms...",
        "fields": [
            {"name": "Form Title", "code": "name", "placeholder": "e.g. Contact Us Widget"},
            {"name": "Embed Code", "code": "code", "placeholder": "e.g. <script src='...'>"}
        ],
        "dummy": [
            {"id": 1, "name": "Landing Page Lead Capture", "code": "WF_EMBED_01", "status": "Active", "createdAt": "2026-07-10"},
        ]
    }
]

for item in crm_pages:
    os.makedirs(item["dir"], exist_ok=True)
    comp_name = item["title"].replace(" & ", "").replace(" ", "").replace("-", "") + "Page"
    
    cols = []
    form_fields = []
    for f in item["fields"]:
        c_code = f["code"]
        c_label = f["name"]
        cols.append(f'        {{ id: \'{c_code}\', label: \'{c_label}\', render: (item: any) => <span className="font-bold text-slate-800 text-[13px]">{{item.{c_code}}}</span> }},')
        
        field_html = f'''            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                <FormLabel className="!mb-0 sm:w-32 text-[12.5px] font-semibold text-slate-700 shrink-0">{c_label}</FormLabel>
                <span className="text-[12.5px] text-slate-400 hidden sm:inline">:</span>
                <div className="flex-1">
                    <Input defaultValue={{isEdit ? editItem?.{c_code} : ''}} placeholder="{f['placeholder']}" className="h-8 text-[12.5px]" />
                </div>
            </div>'''
        form_fields.append(field_html)

    cols_str = "\n".join(cols)
    fields_str = "\n".join(form_fields)
    dummy_json = json.dumps(item["dummy"], indent=8)

    file_content = f'''import React, {{ useState }} from 'react';
import {{ Plus, Edit, Trash2, RotateCcw, Save }} from 'lucide-react';
import DataTable, {{ Column }} from '@/components/tables/data-table';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import Modal from '@/components/modals/modal';
import FormLabel from '@/components/ui/label';

export default function {comp_name}() {{
    const [data, setData] = useState<any[]>({dummy_json});
    const [statusFilter, setStatusFilter] = useState('All');
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
        {{ id: 'id', label: 'ID', render: (item) => <span className="text-slate-400 font-mono text-[12px]">#{{item.id}}</span> }},
{cols_str}
        {{
            id: 'status',
            label: 'Status',
            render: (item) => (
                <span className={{`px-2 py-0.5 text-[11.5px] font-bold rounded-full ${{item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}}`}}>
                    {{item.status || 'Active'}}
                </span>
            )
        }},
        {{ id: 'createdAt', label: 'Created At' }},
    ];

    const renderActions = (item: any) => (
        <div className="flex items-center justify-center gap-1">
            <button onClick={{() => setEditItem(item)}} className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Edit">
                <Edit size={{14}} strokeWidth={{1.5}} />
            </button>
            <button onClick={{() => handleDelete(item.id)}} className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={{14}} strokeWidth={{1.5}} />
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
                <label className="block text-[12px] font-bold text-slate-700 mb-1">Status</label>
                <select 
                    value={{statusFilter}} 
                    onChange={{(e) => setStatusFilter(e.target.value)}}
                    className="w-full h-[32px] px-2 bg-white border border-[#d1d1d1] rounded-[3px] text-[12px] text-[#202223] outline-none focus:border-[#d1d1d1] focus:ring-0 transition-colors"
                >
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div className="mt-5">
                <button 
                    onClick={{() => setStatusFilter('All')}} 
                    className="h-[32px] w-[32px] flex items-center justify-center bg-white border border-[#d1d1d1] text-[#6d7175] rounded-[3px] hover:border-slate-400 transition-all group outline-none"
                    title="Clear Filters"
                >
                    <RotateCcw size={{13}} />
                </button>
            </div>
        </div>
    );
    
    const FormContent = ({{ isEdit = false }}: {{ isEdit?: boolean }}) => (
        <div className="space-y-3">
{fields_str}
            <div className="p-2.5 px-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between mt-1">
                <div>
                    <h4 className="text-[12.5px] font-bold text-slate-800">Active Status</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Enable or disable this item</p>
                </div>
                <Switch defaultChecked={{isEdit ? editItem?.status === 'Active' : true}} />
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">{item["title"]}</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">{item["subtitle"]}</p>
                </div>
                <Button 
                    onClick={{() => setIsCreateModalOpen(true)}} 
                    className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4"
                >
                    <Plus size={{15}} />
                    Add {item["title"]}
                </Button>
            </div>

            <DataTable 
                data={{filteredData}} 
                columns={{columns}}
                searchPlaceholder="{item['search']}"
                actions={{renderActions}}
                onDeleteSelected={{handleBulkDelete}}
                filterContent={{renderFilters}}
                compact
            />

            <Modal
                isOpen={{isCreateModalOpen}}
                onClose={{() => setIsCreateModalOpen(false)}}
                title="Create {item['title']}"
                size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setIsCreateModalOpen(false)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
                            <Save size={{13}} /> Save
                        </Button>
                    </>
                }}
            >
                <FormContent />
            </Modal>
            
            <Modal
                isOpen={{!!editItem}}
                onClose={{() => setEditItem(null)}}
                title="Edit {item['title']}"
                size="lg"
                footer={{
                    <>
                        <Button variant="outline" onClick={{() => setEditItem(null)}} className="h-8.5 text-[12.5px]">Cancel</Button>
                        <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
                            <Save size={{13}} /> Save Changes
                        </Button>
                    </>
                }}
            >
                {{editItem && <FormContent isEdit />}}
            </Modal>
        </div>
    );
}}
'''
    file_path = os.path.join(item["dir"], item["file"])
    with open(file_path, "w") as f:
        f.write(file_content)
    print(f"Generated: {file_path}")

print("All CRM Pages generated successfully.")
