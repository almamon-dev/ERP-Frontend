const fs = require('fs');
const files = [
  '/home/mamon/React/ERP-Frontend/src/modules/Administration/Organization/Companies/pages/Create/index.tsx',
  '/home/mamon/React/ERP-Frontend/src/modules/Administration/Organization/Companies/pages/Edit/index.tsx'
];

const tabHeaderDef = `
const TabHeader = ({ title, icon: Icon }: { title: string, icon?: any }) => (
    <div className="col-span-1 md:col-span-2 mb-4 pb-3 border-b-2 border-red-500">
        <h2 className="text-[16px] font-bold text-slate-800 flex items-center gap-2">
            {Icon && <Icon size={18} className="text-slate-600" />}
            {title}
        </h2>
    </div>
);
`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (!content.includes('const TabHeader =')) {
    content = content.replace(
      /const SectionHeader =[\s\S]*?\);\n/m,
      match => match + tabHeaderDef
    );
  }

  // Find the first SectionHeader in each tab and replace it with TabHeader
  content = content.replace(/(w-full">\s*)<SectionHeader/g, '$1<TabHeader');

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
