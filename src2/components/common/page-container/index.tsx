import React from 'react';

export interface PageContainerProps {
    className?: string;
}

export default function PageContainer({ className }: PageContainerProps) {
    return (
        <div className={className}>
            {/* PageContainer Component */}
        </div>
    );
}
