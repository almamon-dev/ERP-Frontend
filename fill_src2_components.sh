#!/bin/bash

# Find all empty index.tsx files in src2/components and add boilerplate code
find src2/components -type f -name "index.tsx" -size 0c | while read -r file; do
    # Get the parent directory name
    dir_name=$(basename $(dirname "$file"))
    
    # Convert dash-case to PascalCase for the component name
    # e.g. table-actions -> TableActions
    component_name=$(echo "$dir_name" | awk -F- '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1' OFS="")
    
    # Write the boilerplate code directly to the file without cat (abiding by Critical Instruction 1a)
    printf "import React from 'react';\n\nexport interface %sProps {\n    className?: string;\n}\n\nexport default function %s({ className }: %sProps) {\n    return (\n        <div className={className}>\n            {/* %s Component */}\n        </div>\n    );\n}\n" "$component_name" "$component_name" "$component_name" "$component_name" > "$file"
    
    echo "Filled $file with $component_name boilerplate"
done
