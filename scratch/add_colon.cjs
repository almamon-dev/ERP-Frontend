const fs = require('fs');
const files = [
  '/home/mamon/React/ERP-Frontend/src/modules/Administration/Organization/Companies/pages/Create/index.tsx',
  '/home/mamon/React/ERP-Frontend/src/modules/Administration/Organization/Companies/pages/Edit/index.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // 1. Change grid columns to match View exactly (160px label, 10px colon, 1fr input)
  content = content.replace(/grid-cols-\[140px_1fr\]/g, 'grid-cols-[160px_10px_1fr]');
  
  // 2. Add colon after </FormLabel> if it doesn't already exist
  content = content.replace(/<\/FormLabel>(?!\s*<p className="text-\[13px\] text-slate-400 mt-2\">:<\/p>)/g, '</FormLabel>\n                                        <p className="text-[13px] text-slate-400 mt-2">:</p>');

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
