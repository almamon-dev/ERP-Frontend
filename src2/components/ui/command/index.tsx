import React from 'react';

export interface CommandProps {
    className?: string;
}

export default function Command({ className }: CommandProps) {
    return (
        <div className={className}>
            {/* Command Component */}
        </div>
    );
}
