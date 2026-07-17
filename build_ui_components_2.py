import os

SRC_UI = "src/components/ui"
SRC2_UI = "src2/components/ui"

components = {
    "button/index.tsx": """import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    fullWidth?: boolean;
}

export default function Button({ 
    variant = 'secondary', 
    size = 'md', 
    isLoading = false, 
    fullWidth = false, 
    className = '', 
    children, 
    disabled, 
    ...props 
}: ButtonProps) {
    const baseClasses = "inline-flex items-center justify-center rounded-[3px] font-bold transition-all shadow-sm outline-none disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-[#008060] text-white hover:bg-[#006e52] border border-transparent shadow-[0_1px_0_rgba(0,0,0,0.05)]",
        secondary: "bg-white text-[#202223] border border-[#d1d1d1] hover:bg-[#f9fafb] shadow-[0_1px_0_rgba(0,0,0,0.05)]",
        danger: "bg-white text-[#d82c0d] border border-[#d1d1d1] hover:bg-[#fff5f5] hover:border-[#d82c0d]",
        ghost: "bg-transparent text-[#6d7175] border-transparent hover:bg-[#f6f6f7] shadow-none",
    };

    const sizes = {
        sm: "h-[28px] px-3 text-[11px]",
        md: "h-[32px] px-4 text-[12px]",
        lg: "h-[44px] px-6 text-[14px]",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button 
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 animate-spin" size={14} />}
            {children}
        </button>
    );
}
""",
    "textarea/index.tsx": """import React from 'react';

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
""",
    "chip/index.tsx": """import React from 'react';
import { X } from 'lucide-react';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    onRemove?: () => void;
}

export default function Chip({ label, onRemove, className = '', ...props }: ChipProps) {
    return (
        <div 
            className={`inline-flex items-center gap-1.5 h-[24px] px-2.5 bg-[#f6f6f7] border border-[#d1d1d1] rounded-full text-[12px] text-[#202223] font-medium ${className}`}
            {...props}
        >
            <span>{label}</span>
            {onRemove && (
                <button 
                    onClick={(e) => { e.stopPropagation(); onRemove(); }}
                    className="w-[14px] h-[14px] rounded-full flex items-center justify-center hover:bg-[#e4e5e7] text-[#6d7175] transition-colors outline-none"
                >
                    <X size={10} strokeWidth={3} />
                </button>
            )}
        </div>
    );
}
"""
}

for path_suffix, content in components.items():
    for base_dir in [SRC_UI, SRC2_UI]:
        full_path = os.path.join(base_dir, path_suffix)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w") as f:
            f.write(content)
        print(f"Updated {full_path}")
