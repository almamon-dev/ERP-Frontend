import os

modules = [
    ('Localization', 'localization', 'Globe'),
    ('Notifications', 'notifications', 'Bell'),
    ('Security', 'security', 'Shield'),
    ('ApiSettings', 'api', 'Webhook'),
    ('QueueScheduler', 'queue', 'Timer'),
    ('CacheManagement', 'cache', 'RefreshCcw'),
    ('SystemLogs', 'logs', 'Terminal'),
    ('License', 'license', 'Key')
]

base_dir = 'src/modules/Administration/Settings'

for mod_name, route_path, icon in modules:
    mod_dir = os.path.join(base_dir, mod_name)
    pages_dir = os.path.join(mod_dir, 'pages', 'List')
    os.makedirs(pages_dir, exist_ok=True)
    
    # index.tsx
    with open(os.path.join(mod_dir, 'index.tsx'), 'w', encoding='utf-8') as f:
        f.write(f"""import React from 'react';
import {{ Outlet }} from 'react-router-dom';

export default function {mod_name}Module() {{
    return <Outlet />;
}}
""")
    
    # routes.tsx
    with open(os.path.join(mod_dir, 'routes.tsx'), 'w', encoding='utf-8') as f:
        f.write(f"""import {{ RouteObject }} from 'react-router-dom';
import {mod_name}List from './pages/List';

export const {mod_name.lower()}Routes: RouteObject[] = [
    {{
        index: true,
        element: <{mod_name}List />
    }}
];
""")
    
    # navigation.ts
    with open(os.path.join(mod_dir, 'navigation.ts'), 'w', encoding='utf-8') as f:
        f.write(f"""export const {mod_name.lower()}Navigation = [
    {{ name: '{mod_name}', path: '/administration/settings/{route_path}' }}
];
""")
        
    # pages/List/index.tsx
    with open(os.path.join(pages_dir, 'index.tsx'), 'w', encoding='utf-8') as f:
        f.write(f"""import React from 'react';
import {{ {icon} }} from 'lucide-react';

export default function {mod_name}List() {{
    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                    <{icon} size={{20}} />
                </div>
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">{mod_name} Settings</h1>
                    <p className="text-[14px] font-medium text-slate-500 mt-1">Manage {mod_name.lower()} configuration.</p>
                </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
                <{icon} size={{48}} className="text-slate-300 mb-4" />
                <h3 className="text-[16px] font-semibold text-slate-800">{mod_name} Config Under Construction</h3>
                <p className="text-[14px] text-slate-500 mt-2 max-w-md">The {mod_name} settings module will contain all relevant configurations for this feature.</p>
            </div>
        </div>
    );
}}
""")

print('Modules generated successfully!')
