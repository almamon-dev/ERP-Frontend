import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export default function Textarea({ label, error, className = '', id, ...props }: TextareaProps) {
    const textareaId = id || (label ? label.replace(r'/\s+/g', '-').toLowerCase() : undefined);

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label htmlFor={textareaId} className="text-[13px] font-bold text-[#202223]">
                    {label}
                </label>
            )}
            <textarea
                id={textareaId}
                className={`w-full min-h-[80px] p-3 border rounded-[3px] text-[13px] font-medium transition-colors shadow-none placeholder:text-[#6d7175] focus:outline-none focus:ring-1 resize-y ${
                    error 
                        ? 'border-[#d82c0d] focus:border-[#d82c0d] focus:ring-[#d82c0d]' 
                        : 'border-[#d1d1d1] focus:border-[#008060] focus:ring-[#008060]'
                } ${className}`}
                {...props}
            />
            {error && <span className="text-[12px] text-[#d82c0d] mt-0.5">{error}</span>}
        </div>
    );
}
