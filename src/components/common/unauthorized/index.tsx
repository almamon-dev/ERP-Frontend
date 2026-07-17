import React from 'react';

export interface UnauthorizedProps {
    className?: string;
}

export default function Unauthorized({ className }: UnauthorizedProps) {
    return (
        <div className={className}>
            {/* Unauthorized Component */}
        </div>
    );
}
