import React from 'react';

export interface ActionBarProps {
    className?: string;
}

export default function ActionBar({ className }: ActionBarProps) {
    return (
        <div className={className}>
            {/* ActionBar Component */}
        </div>
    );
}
