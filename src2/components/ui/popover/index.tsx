import React from 'react';

export interface PopoverProps {
    className?: string;
}

export default function Popover({ className }: PopoverProps) {
    return (
        <div className={className}>
            {/* Popover Component */}
        </div>
    );
}
