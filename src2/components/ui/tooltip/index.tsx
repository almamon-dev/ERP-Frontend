import React from 'react';

export interface TooltipProps {
    className?: string;
}

export default function Tooltip({ className }: TooltipProps) {
    return (
        <div className={className}>
            {/* Tooltip Component */}
        </div>
    );
}
