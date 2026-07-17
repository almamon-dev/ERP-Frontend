#!/bin/bash

# Find all empty index.tsx files in src/components and add boilerplate code
find src/components -type f -name "index.tsx" -size 0c | while read -r file; do
    # Get the parent directory name
    dir_name=$(basename $(dirname "$file"))
    
    # Convert dash-case to PascalCase for the component name
    # e.g. table-actions -> TableActions
    component_name=$(echo "$dir_name" | awk -F- '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1' OFS="")
    
    # Write the boilerplate code
    cat << EOF > "$file"
import React from 'react';

export interface ${component_name}Props {
    className?: string;
}

export default function ${component_name}({ className }: ${component_name}Props) {
    return (
        <div className={className}>
            {/* ${component_name} Component */}
        </div>
    );
}
EOF
    echo "Filled $file with $component_name boilerplate"
done
