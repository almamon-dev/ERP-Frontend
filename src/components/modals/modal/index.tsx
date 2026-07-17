import React from 'react';

export interface ModalProps {
    className?: string;
}

export default function Modal({ className }: ModalProps) {
    return (
        <div className={className}>
            {/* Modal Component */}
        </div>
    );
}
