import React from 'react';

export interface SkeletonProps {
    className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
    return (
        <div className={className}>
            {/* Skeleton Component */}
        </div>
    );
}
