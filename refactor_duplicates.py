import os
import re

LABEL_COMPONENT = """import React from 'react';
import { cn } from '@/lib/utils';

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}

export default function FormLabel({ children, required, className, ...props }: FormLabelProps) {
    return (
        <label className={cn("text-[13px] font-bold text-slate-700 mb-1.5 block", className)} {...props}>
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
}
"""

TAB_HEADER_COMPONENT = """import React from 'react';
import { cn } from '@/lib/utils';

interface TabHeaderProps {
    title: string;
    icon?: React.ElementType;
    className?: string;
}

export default function TabHeader({ title, icon: Icon, className }: TabHeaderProps) {
    return (
        <div className={cn("col-span-1 md:col-span-2 -mt-2 md:-mt-4 mb-5 pb-4 border-b border-slate-200 -mx-6 md:-mx-8 px-6 md:px-8", className)}>
            <h2 className="text-[18px] font-bold text-slate-800 flex items-center gap-2">
                {Icon && <Icon size={18} className="text-slate-600" />}
                {title}
            </h2>
        </div>
    );
}
"""

def extract_duplicate_components():
    # 1. Create component files
    os.makedirs('src/components/ui/label', exist_ok=True)
    with open('src/components/ui/label/index.tsx', 'w', encoding='utf-8') as f:
        f.write(LABEL_COMPONENT)
        
    os.makedirs('src/components/ui/tab-header', exist_ok=True)
    with open('src/components/ui/tab-header/index.tsx', 'w', encoding='utf-8') as f:
        f.write(TAB_HEADER_COMPONENT)

    # Patterns to match the inline components
    # We will use regex to find and remove them.
    # Note: Regex can be tricky with multiline React components, so we will look for start and end patterns.
    
    label_pattern_1 = re.compile(r'const FormLabel = \(\{ children, required \}: \{ children: React\.ReactNode, required\?: boolean \}\) => \(\s*<label className="text-\[13px\] font-bold text-slate-700 mb-1\.5 block">\s*\{children\} \{required && <span className="text-red-500">\*</span>\}\s*</label>\s*\);', re.MULTILINE)
    
    label_pattern_2 = re.compile(r'const FormLabel = \(\{ children, required \}: \{ children: React\.ReactNode, required\?: boolean \}\) => \(\s*<label className="text-\[14px\] font-medium text-slate-700 mt-2">\s*\{children\} \{required && <span className="text-red-500">\*</span>\}\s*</label>\s*\);', re.MULTILINE)
    
    tab_header_pattern = re.compile(r'const TabHeader = \(\{ title, icon: Icon \}: \{ title: string, icon\?: any \}\) => \(\s*<div className="col-span-1 md:col-span-2 -mt-2 md:-mt-4 mb-5 pb-4 border-b border-slate-200 -mx-6 md:-mx-8 px-6 md:px-8">\s*<h2 className="text-\[18px\] font-bold text-slate-800 flex items-center gap-2">\s*\{Icon && <Icon size=\{18\} className="text-slate-600" />\}\s*\{title\}\s*</h2>\s*</div>\s*\);', re.MULTILINE)

    # 2. Iterate over all files in src/modules
    for root, dirs, files in os.walk('src/modules'):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.jsx'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                # Check for FormLabel
                has_label = False
                if label_pattern_1.search(content):
                    content = label_pattern_1.sub('', content)
                    has_label = True
                elif label_pattern_2.search(content):
                    content = label_pattern_2.sub('', content)
                    has_label = True
                    
                # Check for TabHeader
                has_tab_header = False
                if tab_header_pattern.search(content):
                    content = tab_header_pattern.sub('', content)
                    has_tab_header = True
                    
                if has_label or has_tab_header:
                    # We need to add imports at the top
                    imports_to_add = []
                    if has_label:
                        imports_to_add.append("import FormLabel from '@/components/ui/label';")
                    if has_tab_header:
                        imports_to_add.append("import TabHeader from '@/components/ui/tab-header';")
                        
                    # Find the last import statement
                    lines = content.split('\n')
                    last_import_idx = -1
                    for i, line in enumerate(lines):
                        if line.startswith('import '):
                            last_import_idx = i
                            
                    if last_import_idx != -1:
                        for imp in imports_to_add:
                            lines.insert(last_import_idx + 1, imp)
                    else:
                        for imp in imports_to_add:
                            lines.insert(0, imp)
                            
                    content = '\n'.join(lines)
                    
                    # Clean up multiple empty lines left behind by regex replacement
                    content = re.sub(r'\n{3,}', '\n\n', content)
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                        
                    print(f"Refactored {file_path}")

if __name__ == "__main__":
    extract_duplicate_components()
