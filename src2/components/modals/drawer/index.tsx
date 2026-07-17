import React from 'react';

export interface DrawerProps {
    className?: string;
}

export default function Drawer({ className }: DrawerProps) {
    return (
        <div className={className}>
            {/* Drawer Component */}
        </div>
    );
}
