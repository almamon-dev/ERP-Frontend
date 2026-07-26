const fs = require('fs');
const files = [
  '/home/mamon/React/ERP-Frontend/src/modules/Administration/Organization/Companies/pages/Create/index.tsx',
  '/home/mamon/React/ERP-Frontend/src/modules/Administration/Organization/Companies/pages/Edit/index.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // 1. Update FormLabel component to remove 'block' and 'mb-1.5', add 'mt-2'
  content = content.replace(
    /className="block text-\[13px\] font-medium text-slate-700 mb-1\.5"/g,
    'className="text-[13px] font-medium text-slate-700 mt-2"'
  );

  // 2. Replace <div> wrapping FormLabel with grid
  // Find all <div> that have <FormLabel> inside them with only whitespace between.
  content = content.replace(
    /<div>(\s*)<FormLabel/g,
    '<div className="grid grid-cols-[140px_1fr] items-start gap-3">$1<FormLabel'
  );

  // 3. Replace <div className="..."> wrapping FormLabel with grid + original class
  // Make sure not to double-add if it already has grid.
  content = content.replace(
    /<div className="([^"]*)">(\s*)<FormLabel/g,
    (match, classes, spaces) => {
      if (classes.includes('grid-cols-[140px_1fr]')) return match; // Already done
      return `<div className="${classes} grid grid-cols-[140px_1fr] items-start gap-3">${spaces}<FormLabel`;
    }
  );

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
